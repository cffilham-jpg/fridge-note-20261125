import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), "I logged your 3 a.m. cheese visit.\n");
