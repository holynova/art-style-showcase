import { cpSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const entry of ["index.html", "style.css", "data.js", "images", "chatgpt_images"]) {
  cpSync(resolve(root, entry), resolve(dist, entry), { recursive: true });
}

console.log(`Built static site in ${dist}`);
