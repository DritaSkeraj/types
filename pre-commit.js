console.log("hellow. Youre in for a treat!");

const { execSync } = require("child_process");
const path = require("path");

console.log("=>", process.debugPort);

const SHARED_TYPES_DIR = path.resolve(__dirname, "../types");
try {
  //   // Change to the shared types directory
  process.chdir(SHARED_TYPES_DIR);
  console.log("=>", process.debugPort);
  // Add any new or modified types
  execSync("git add -A", { stdio: "inherit" });
  console.log("Files staged!");
} catch (error) {
  console.error("Error in pre-commit hook:", error.message);
  process.exit(1);
}
