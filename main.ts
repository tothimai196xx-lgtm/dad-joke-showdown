import { mkdirSync, writeFileSync } from "node:fs";

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
