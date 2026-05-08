import { execSync } from "node:child_process";

execSync("git config core.hooksPath .githooks");
execSync("chmod +x .githooks/commit-msg");

execSync("chmod +x scripts/commit.js");

console.log("Git hooks installed from .githooks");
console.log(`Active hooksPath: ${execSync("git config --get core.hooksPath")}`);
