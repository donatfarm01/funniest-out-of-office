// The Funniest Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply (a single line) to /output/entry.txt,
// where the judge reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm off until Monday. This auto-reply is covering my inbox — faster than me, cheaper than me, and so far nobody has noticed I'm gone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
