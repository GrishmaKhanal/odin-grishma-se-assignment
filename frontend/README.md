# Chat Timeline Grouper

This project is React-based. The focus of this project is on the logic of grouping and displaying messages correctly, rather than on styling or backend integration.

## Features

- **Chronological Sorting:** Messages are sorted by their creation time, with fallback to message ID for tie-breaking.
- **Message Grouping:** Consecutive messages from the same author within a two-minute are grouped into a single chat bubble.
- **Date Separators:** A separator with the date is displayed whenever the day changes between messages.
- **Unread Message Indicator:** An Unread divider is shown to indicate the first message not read, if provided readAt.
- **User-Specific Styling:** Messages sent by the current user have different style from messages sent by others.

## Getting Started

After cloning/downloading the repo:

```zsh
cd frontend
npm install
```

Then, to run the development server:

```zsh
npm run dev
```

## Test Examples

You can change the input data in `App.tsx` to test different scenarios:

```ts
import { input_different_days as user_input } from "./samples/example-input";
```

You can add your own test cases to `example-input.ts` alongside the other samples.

## Thought Process

The core logic for processing is in the `getFinalParsedMessages` function in `src/utils/chatutils.ts`. This function prepares the message data for rendering.

1. **Sorting:** The messages are first sorted using the `getSortedMessages` function.

2. **Parsing and Pre-processing:** The sorted messages are then iterated over to identify day changes and the first unread message.

3. **Message Merging:** The `mergeMessages` function then groups consecutive messages from the same author within a two-minute interval.

4. **Rendering:** The final processed messages is then passed to the `ChatTimeline` component, which maps over the messages and renders them. It uses the `ChatBubble`, `DateDivider`, and   `UnreadDivider` components to display the messages, date separators, and the unread message indicator.
