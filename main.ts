import { mkdirSync, writeFileSync } from "node:fs";

// One painfully honest out-of-office auto-reply: a single sentence,
// 1-200 characters, honest about the inbox and still polite enough
// to survive being forwarded to a manager.
const ENTRY =
  "I'm out of the office until Monday, and your email joins 214 unread messages I will skim, sigh at, and answer only if it survives my return.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (!/\S/.test(ENTRY)) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
