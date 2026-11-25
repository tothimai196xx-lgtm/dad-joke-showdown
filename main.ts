import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, told out loud: "step up" does double duty — climbing the
// stool to reach the jar, and rising to the occasion — so the pun lands on
// the first read and the punchline arrives at the very last words.
const text = `My son asked why I keep a step stool in the kitchen. I told him the cookie jar lives on the top shelf, the kids are still short, and in this family, son, if you want a cookie, you have to step up.`;

const length = [...text].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 Unicode code points, got ${length}`);
}

if (text.includes("\n")) {
  throw new Error("entry must be a single line with no newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
