console.log("hellow. You're in for a treat!");
const { execSync } = require("child_process");

try {
  // Add any new or modified types
  execSync("git add -A", { stdio: "inherit" });
  console.log("Files staged!");
} catch (error) {
  console.error("Error in pre-commit hook:", error.message);
  process.exit(1);
}
