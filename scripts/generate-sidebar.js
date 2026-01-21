const fs = require("fs");
const path = require("path");

const SIDEBAR_JSON_PATH = path.join(__dirname, "api-refs-sidebar.json");
const INDENT_SIZE = 4;
const INITIAL_DEPTH = 2; // Starts at 2 levels deep (8 spaces) to match config.md structure under "API References"

function cleanPath(p) {
  if (!p) return "";
  return p.startsWith("/") ? p.substring(1) : p;
}

function generateMarkdown(items, depth) {
  let output = "";
  const indent = " ".repeat(depth * INDENT_SIZE);

  items.forEach((item) => {
    const title = item.title;
    const url = cleanPath(item.path);

    // Construct the markdown line
    let line = `${indent}- `;
    if (url) {
      line += `[${title}](${url}) `;
    } else {
      line += title;
    }
    output += line + "\n";

    if (item.pages && item.pages.length > 0) {
      output += generateMarkdown(item.pages, depth + 1);
    }
  });

  return output;
}

try {
  if (!fs.existsSync(SIDEBAR_JSON_PATH)) {
    console.error(`Error: File not found at ${SIDEBAR_JSON_PATH}`);
    process.exit(1);
  }

  const content = fs.readFileSync(SIDEBAR_JSON_PATH, "utf8");
  const json = JSON.parse(content);

  console.log("    - [API References](v4/index.md) header");
  const markdown = generateMarkdown(json, INITIAL_DEPTH);
  console.log(markdown);
} catch (error) {
  console.error("Error processing file:", error.message);
  process.exit(1);
}
