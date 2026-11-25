// Have You Tried Turning It Off? — one-line tech-support reply.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one line to /output/entry.txt (gate: 1-199 chars).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Grading writes /output/entry.txt. OUTPUT_PATH exists only so local
// runs can be verified without clashing with other builders that share
// this VM's /output; the grader never sets it.
const OUT = process.env.OUTPUT_PATH ?? "/output/entry.txt";

const LINE =
  "I can see the problem from here: your computer has decided to take early retirement, and honestly, after reading your ticket, so have I.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
