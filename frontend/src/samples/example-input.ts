import type { Input } from "../types";

export const example_input: Input = {
  currentUserId: "u1",
  readAt: "2025-06-12T09:10:00Z",
  messages: [
    { id: "m1", authorId: "u2", text: "hi", createdAt: "2025-06-12T09:00:00Z" },
    {
      id: "m2",
      authorId: "u2",
      text: "you there?",
      createdAt: "2025-06-12T09:01:15Z",
    },
    {
      id: "m3",
      authorId: "u1",
      text: "yep",
      createdAt: "2025-06-12T09:12:00Z",
    },
    {
      id: "m4",
      authorId: "u2",
      text: "cool",
      createdAt: "2025-06-13T07:00:00Z",
    },
  ],
};


export const input_without_readAt: Input = {
    currentUserId: "u1",
    messages: [
        {id: "m1", authorId: "u1", text: "hello, how are you doing", createdAt: "2025-06-12T09:00:00Z"},
        {id: "m2", authorId: "u1", text: "I'm fine, hope you are doing well too", createdAt: "2025-06-12T09:01:15Z"},
        {id: "m3", authorId: "u2", text: "Hello, Do I know you?", createdAt: "2025-06-12T09:02:15Z"},
        {id: "m3", authorId: "u3", text: "Hi, this is patrick!!", createdAt: "2025-06-12T09:02:39Z"},
    ]
};

export const input_different_days: Input = {
  currentUserId: "u1",
  readAt: "2025-06-12T10:00:00Z",
  messages: [
    {
      id: "m1",
      authorId: "u2",
      text: "Message from day 1",
      createdAt: "2025-06-11T09:00:00Z",
    },
    {
      id: "m2",
      authorId: "u1",
      text: "Message from day 2",
      createdAt: "2025-06-12T09:01:15Z",
    },
    {
      id: "m3",
      authorId: "u2",
      text: "Another message from day 2",
      createdAt: "2025-06-12T10:02:15Z",
    },
    {
      id: "m4",
      authorId: "u3",
      text: "Message from day 3",
      createdAt: "2025-06-13T09:02:39Z",
    },
  ],
};

export const unsorted_messages_input: Input = {
  currentUserId: "u1",
  readAt: "2025-06-12T09:10:00Z",
  messages: [
    {
      id: "m3",
      authorId: "u1",
      text: "yep",
      createdAt: "2025-06-12T09:12:00Z",
    },
    { id: "m1", authorId: "u2", text: "hi", createdAt: "2025-06-12T09:00:00Z" },
    {
      id: "m4",
      authorId: "u2",
      text: "cool",
      createdAt: "2025-06-13T07:00:00Z",
    },
    {
      id: "m2",
      authorId: "u2",
      text: "you there?",
      createdAt: "2025-06-12T09:01:15Z",
    },
  ],
};

export const grouping_edge_case_input: Input = {
  currentUserId: "u1",
  messages: [
    {
      id: "m1",
      authorId: "u2",
      text: "First",
      createdAt: "2025-06-12T09:00:00Z",
    },
    {
      id: "m2",
      authorId: "u2",
      text: "Second",
      createdAt: "2025-06-12T09:01:59Z",
    },
    {
      id: "m3",
      authorId: "u2",
      text: "Third",
      createdAt: "2025-06-12T09:05:00Z",
    },
    {
      id: "m4",
      authorId: "u2",
      text: "Fourth",
      createdAt: "2025-06-12T09:07:00Z",
    },
  ],
};

export const no_unread_messages_input: Input = {
  currentUserId: "u1",
  readAt: "2025-06-14T00:00:00Z",
  messages: [
    { id: "m1", authorId: "u2", text: "hi", createdAt: "2025-06-12T09:00:00Z" },
    { id: "m2", authorId: "u1", text: "hey", createdAt: "2025-06-12T09:01:00Z" },
  ],
};
