import { mkdirSync, writeFileSync } from "node:fs";

// v24.11 — release note for the brain's 3am replay bug.
// Fix stated as shipped, in terse changelog voice: one fix, one known issue.
const line =
  "v24.11 — Fixed: brain no longer replays embarrassing moments from 2009 at 3am. Known issue: the mute button is still in beta.";

if (line.length < 1 || line.length > 160 || !line.trim()) {
  throw new Error(`entry must be 1-160 non-whitespace chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
