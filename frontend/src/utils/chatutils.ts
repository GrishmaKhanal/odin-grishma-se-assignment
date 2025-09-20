import type { CustomMessage, Input, Message } from "../types";

export function getSortedMessages(input_message: Message[]): Message[] {
  return [...input_message].sort((a, b) => {
    const timeDifference =
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    if (timeDifference == 0) {
      return a.id.localeCompare(b.id);
    } else {
      return timeDifference;
    }
  });
}

export function mergeMessages(input_message: CustomMessage[]): CustomMessage[] {
  if (input_message.length === 0) {
    return input_message;
  }
  let buffer: CustomMessage = { ...input_message[0] };
  const merged_message: CustomMessage[] = [];

  for (let i = 1; i < input_message.length; i++) {
    const curr = input_message[i];
    if (curr.isDayChange) {
      merged_message.push(buffer);
      buffer = { ...curr };
      continue;
    }

    const prevTime = new Date(buffer.createdAt).getTime();
    const currTime = new Date(curr.createdAt).getTime();

    if (
      buffer.authorId === curr.authorId &&
      currTime - prevTime <= 2 * 60 * 1000 &&
      // does not make sense to merge unread and read messages
      buffer.isUnread === curr.isUnread &&
      buffer.id !== curr.id
    ) {
      buffer.text += "\n" + curr.text;
    } else {
      merged_message.push(buffer);
      buffer = { ...curr };
    }
  }
  merged_message.push(buffer);
  return merged_message;
}

function compareUnreadIds(readAtDT: string, createdAtDT: string): boolean {
  const readTime = new Date(readAtDT).getTime();
  const createdTime = new Date(createdAtDT).getTime();

  return createdTime > readTime;
}

function checkDayChange(prevDateTime: string, currDateTime: string): boolean {
  const prev = new Date(prevDateTime);
  const curr = new Date(currDateTime);

  return (
    prev.getFullYear() !== curr.getFullYear() ||
    prev.getMonth() !== curr.getMonth() ||
    prev.getDate() !== curr.getDate()
  );
}

export function getFinalParsedMessages(input: Input): CustomMessage[] {
  const sortedMessage: Message[] = getSortedMessages(input.messages);
  let prevDateTime: string = sortedMessage[0].createdAt;
  let unreadMarked: boolean = false;
  let parsedMessage: CustomMessage[] = [...sortedMessage].map((message) => {
    const currDateTime: string = message.createdAt;
    const isDayChange: boolean = checkDayChange(prevDateTime, currDateTime);
    prevDateTime = currDateTime;
    let isUnread = false;
    if (!unreadMarked && input.readAt) {
      if (compareUnreadIds(input.readAt, message.createdAt)) {
        // mark only the first unread message
        isUnread = true;
        unreadMarked = true;
      }
    }
    return {
      id: message.id,
      authorId: message.authorId,
      text: message.text,
      createdAt: message.createdAt,
      isUnread: isUnread,
      isDayChange: isDayChange,
    };
  });
  parsedMessage = mergeMessages(parsedMessage);
  return parsedMessage;
}
