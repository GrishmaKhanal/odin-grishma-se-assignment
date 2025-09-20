import React from "react";
import type { Input, CustomMessage } from "../types";
import ChatBubble from "./ChatBubble";
import { getFinalParsedMessages } from "../utils/chatutils";
import DateDivider from "./DateDivider";
import UnreadDivider from "./UnreadDivider";

type Props = {
  input: Input;
};

const styles: { [key: string]: React.CSSProperties } = {
  messageList: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};

const ChatTimeline: React.FC<Props> = ({ input }) => {
  const finalParsedMessages: CustomMessage[] = getFinalParsedMessages(input);
  console.log("input = ",input)
  console.log("\nfinal parsed messages = ",finalParsedMessages);
  return (
    <div>
      <div style={styles.messageList}>
        {finalParsedMessages.map((msg) => (
          <div
            style={{ display: "flex", flexDirection: "column" }}
            key={msg.id}
          >
            {msg.isDayChange && <DateDivider date={msg.createdAt} />}
            {msg.isUnread && <UnreadDivider />}
            <ChatBubble
              message_text={msg.text}
              is_my_message={input.currentUserId === msg.authorId}
              author_id={msg.authorId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatTimeline;
