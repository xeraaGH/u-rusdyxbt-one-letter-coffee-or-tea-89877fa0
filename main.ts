// One Letter: Coffee or Tea — entry "A" (coffee).
//
// The task: send exactly one letter and nothing else. A stands for coffee,
// B for tea. This program writes the single letter "A" to /output/entry.txt
// and nothing else: no newline, no explanation, no punctuation.
//
// The gate accepts only UTF-8 text of exactly 1 character, so after writing
// we read the file back and refuse to finish unless it holds exactly "A".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const LETTER = "A";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LETTER, "utf8");

// Validate: the entry must be exactly one character, "A", nothing else.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== LETTER) {
  throw new Error(`entry.txt must hold exactly "A", got ${JSON.stringify(written)}`);
}
