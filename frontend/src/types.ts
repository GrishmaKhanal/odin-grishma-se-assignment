// provided types
export type Message = {
  id: string;
  authorId: string; // "u1", "u2", etc.
  text: string;
  createdAt: string; // ISO timestamp
};

export type Input = {
  messages: Message[]; // unsorted or sorted; you must handle both
  currentUserId: string; // e.g. "u1"
  readAt?: string; // ISO timestamp when current user last read; optional
};

// custom message type
export type CustomMessage = {
  id: string;
  authorId: string;
  text: string;
  createdAt: string;
  isUnread: boolean;
  isDayChange: boolean;
};
