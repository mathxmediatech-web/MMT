import { existsSync, rmSync } from "node:fs";
import path from "node:path";

const targetDir = process.argv[2] || ".next";
const resolvedDir = path.join(process.cwd(), targetDir);

if (existsSync(resolvedDir)) {
  rmSync(resolvedDir, { recursive: true, force: true });
  console.log(`Cleared ${targetDir} before startup.`);
} else {
  console.log(`${targetDir} not present; nothing to clear.`);
}
