console.log("hellow. You're in for a treat!");

try {
  // Add any new or modified types
  execSync("git add -A", { stdio: "inherit" });
  console.log("Files staged!");
} catch (error) {
  console.error("Error in pre-commit hook:", error.message);
  process.exit(1);
}
