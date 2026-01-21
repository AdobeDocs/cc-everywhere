const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const CONFIG_PATH = path.join(__dirname, "../src/pages/config.md");
const GENERATE_SCRIPT = path.join(__dirname, "generate-sidebar.js");
const HEADER_MARKER = "    - [API References](v4/index.md) header";

try {
  // 1. Create a backup
  if (fs.existsSync(CONFIG_PATH)) {
    fs.copyFileSync(CONFIG_PATH, `${CONFIG_PATH}.bak`);
    console.log(`Backup created at ${CONFIG_PATH}.bak`);
  } else {
    console.error(`Error: Config file not found at ${CONFIG_PATH}`);
    process.exit(1);
  }

  // 2. Read existing config
  const configContent = fs.readFileSync(CONFIG_PATH, "utf8");
  const lines = configContent.split("\n");

  // 3. Find the marker
  const markerIndex = lines.findIndex(
    (line) => line.trim() === HEADER_MARKER.trim()
  );

  if (markerIndex === -1) {
    console.error(
      `Error: Could not find marker "${HEADER_MARKER}" in config.md`
    );
    process.exit(1);
  }

  // 4. Generate new content
  console.log("Generating new sidebar content...");
  // We execute the generation script to get the string output
  const newSidebarContent = execSync(`node ${GENERATE_SCRIPT}`, {
    encoding: "utf8",
  });

  // 5. Combine: Keep everything BEFORE the marker, then append new content
  // Note: The generate-sidebar.js script output starts with the header line,
  // so we splice at the marker index, removing the old header and everything after it.

  // We trim the output to avoid accumulating newlines at the end of file over multiple runs
  const cleanNewContent = newSidebarContent.trimEnd();

  const topPart = lines.slice(0, markerIndex).join("\n");

  // Combine content
  const finalContent = topPart + "\n" + cleanNewContent + "\n";

  // 6. Write back
  fs.writeFileSync(CONFIG_PATH, finalContent);
  console.log(`Successfully updated ${CONFIG_PATH}`);
} catch (error) {
  console.error("Update failed:", error.message);
  process.exit(1);
}
