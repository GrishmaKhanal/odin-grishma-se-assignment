# 📝 Frontend Assignment: Chat Timeline Grouper

## Goal
Build a **chat timeline component** in **React (or any frontend framework you prefer)**.  
The component should render a list of chat messages with smart **grouping and dividers**.  

This is a **logic-focused** task. No backend, no APIs, no styling frameworks required — correctness is the key.  

---

## Requirements

You are given an input like this:

```ts
type Message = {
  id: string;
  authorId: string;       // "u1", "u2", etc.
  text: string;
  createdAt: string;      // ISO timestamp
};

type Input = {
  messages: Message[];    // unsorted or sorted; you must handle both
  currentUserId: string;  // e.g. "u1"
  readAt?: string;        // ISO timestamp when current user last read; optional
};
```
## Example Input
```ts
{
  "currentUserId": "u1",
  "readAt": "2025-06-12T09:10:00Z",
  "messages": [
    {"id":"m1","authorId":"u2","text":"hi","createdAt":"2025-06-12T09:00:00Z"},
    {"id":"m2","authorId":"u2","text":"you there?","createdAt":"2025-06-12T09:01:15Z"},
    {"id":"m3","authorId":"u1","text":"yep","createdAt":"2025-06-12T09:12:00Z"},
    {"id":"m4","authorId":"u2","text":"cool","createdAt":"2025-06-13T07:00:00Z"}
  ]
}
```

## Rendering Rules
- Sort messages by `createdAt` ascending (use `id` as tie-breaker if needed).  
- Group consecutive messages by the same author within **2 minutes** into one **bubble**.  
  > (Bubble = render them together, e.g. without repeating author info. No special styling required.)  
- Insert a **day separator** like `— Jun 12, 2025 —` whenever the day changes.  
- Insert an **“Unread” divider** before the first message strictly after `readAt` (if provided).  
- Render messages from `currentUserId` differently (e.g., right-aligned).  

## Expected Rendering for Example Input
*(This is a logical description, not an exact UI requirement.)*  

- Day separator: `— Jun 12, 2025 —`  
- Grouped bubble (u2: *hi*, *you there?*)  
- **Unread divider** (before “yep”)  
- Grouped bubble (u1: *yep*)  
- Day separator: `— Jun 13, 2025 —`  
- Grouped bubble (u2: *cool*)  


## Submission Instructions

Push your code to a GitHub repository.

Share the link to your GitHub repo with us.
