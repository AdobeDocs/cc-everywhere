const fs = require("node:fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const INPUT_MD_FILE = path.join(ROOT_DIR, "src", "pages", "guides", "changelog", "index.md");
const OUTPUT_DATA_FILE = path.join(ROOT_DIR, "src", "pages", "changelog-data.yml");

/**
 * Parses markdown changelog into structured release objects:
 * each release has version, date, and changes array containing only text.
 */
function parseChangelogMarkdown(content) {
  const lines = content.split(/\r?\n/);
  const releases = [];
  let currentRelease = null;
  let currentChangeLines = null;
  let inCodeBlock = false;

  function flushChange() {
    if (currentRelease && currentChangeLines && currentChangeLines.length > 0) {
      while (currentChangeLines.length > 0 && currentChangeLines[currentChangeLines.length - 1].trim() === "") {
        currentChangeLines.pop();
      }
      if (currentChangeLines.length > 0) {
        const text = currentChangeLines.join("\n");
        currentRelease.changes.push({ text });
      }
      currentChangeLines = null;
    }
  }

  function flushRelease() {
    flushChange();
    if (currentRelease) {
      releases.push(currentRelease);
      currentRelease = null;
    }
  }

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const rawLine = lines[lineIndex];
    const trimmed = rawLine.trim();

    // Check for fenced code blocks
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      if (currentChangeLines) {
        currentChangeLines.push(rawLine);
      }
      continue;
    }

    if (inCodeBlock) {
      if (currentChangeLines) {
        currentChangeLines.push(rawLine);
      }
      continue;
    }

    // Release headers: ## [v4.58.15] 2026-10-21, ## [4.2.29] - 2024-03-14, or ## 2025-11-14
    const releaseHeaderMatch = rawLine.match(/^##\s+(?:\[v?([^\]]+)\]\s*-?\s*)?(\d{4}-\d{2}-\d{2})/i);
    if (releaseHeaderMatch) {
      flushRelease();
      const version = releaseHeaderMatch[1] ? releaseHeaderMatch[1].trim().replace(/^v/i, "") : undefined;
      const date = releaseHeaderMatch[2];
      currentRelease = {
        ...(version ? { version } : {}),
        date,
        changes: [],
      };
      continue;
    }

    if (!currentRelease) {
      continue;
    }

    // Skip section headers like ### Added, #### Enhancements
    if (/^#{3,}\s+/.test(trimmed)) {
      flushChange();
      continue;
    }

    // Top-level list item (- item, * item, 1. item)
    const isTopBullet = /^[-*]\s+/.test(rawLine);
    const isTopNumbered = /^\d+\.\s+/.test(rawLine);

    if (isTopBullet || isTopNumbered) {
      flushChange();
      const contentAfterMarker = rawLine.replace(/^[-*]\s+|\d+\.\s+/, "");
      currentChangeLines = [contentAfterMarker];
      continue;
    }

    // Continuation lines for active change item
    if (currentChangeLines) {
      if (trimmed === "") {
        let isContinuation = false;
        for (let nextIndex = lineIndex + 1; nextIndex < lines.length; nextIndex += 1) {
          const nextTrimmed = lines[nextIndex].trim();
          if (nextTrimmed === "") continue;
          if (nextTrimmed.startsWith("#")) break;
          if (/^[-*]\s+/.test(lines[nextIndex]) || /^\d+\.\s+/.test(lines[nextIndex])) break;
          isContinuation = true;
          break;
        }
        if (isContinuation) {
          currentChangeLines.push("");
        } else {
          flushChange();
        }
        continue;
      }

      // Indented line (sub-bullets, indented text, code)
      if (/^(\s{2,}|\t)/.test(rawLine)) {
        currentChangeLines.push(rawLine);
        continue;
      }

      currentChangeLines.push(rawLine);
      continue;
    }

    // Standalone prose paragraph (e.g. "General improvements and bug fixes.")
    if (trimmed.length > 0 && !trimmed.startsWith("#") && !trimmed.startsWith("<!--")) {
      flushChange();
      currentChangeLines = [trimmed];
    }
  }

  flushRelease();
  return releases;
}

/**
 * Formats a text scalar for YAML output.
 * Uses block scalar `|` for multiline text; double-quoted JSON string for single lines.
 */
function formatYamlScalar(text, indentSpaces = 8) {
  const indent = " ".repeat(indentSpaces);
  if (text.includes("\n")) {
    const indentedLines = text
      .split("\n")
      .map((line) => (line.trim().length > 0 ? `${indent}  ${line}` : ""))
      .join("\n");
    return `|\n${indentedLines}`;
  }
  return JSON.stringify(text);
}

/**
 * Serializes releases to YAML string with version, date, and changes (text only).
 */
function serializeReleasesToYaml(releases) {
  const yamlLines = [
    "# changelog-data.yml",
    "# Generated from src/pages/guides/changelog/index.md",
    "",
    "releases:",
  ];

  for (const release of releases) {
    yamlLines.push("");
    const versionLine = release.version ? `  - version: ${release.version}` : "  -";
    yamlLines.push(versionLine);
    yamlLines.push(`    date: ${release.date}`);
    if (release.changes.length === 0) {
      yamlLines.push("    changes: []");
      continue;
    }

    yamlLines.push("    changes:");
    for (const change of release.changes) {
      yamlLines.push(`      - text: ${formatYamlScalar(change.text, 8)}`);
    }
  }

  yamlLines.push("");
  return yamlLines.join("\n");
}

function main() {
  if (!fs.existsSync(INPUT_MD_FILE)) {
    throw new Error(`Input file not found: ${INPUT_MD_FILE}`);
  }

  console.log(`Reading ${path.relative(ROOT_DIR, INPUT_MD_FILE)}...`);
  const markdownContent = fs.readFileSync(INPUT_MD_FILE, "utf8");
  const releases = parseChangelogMarkdown(markdownContent);

  const yamlOutput = serializeReleasesToYaml(releases);
  fs.writeFileSync(OUTPUT_DATA_FILE, yamlOutput, "utf8");

  const totalChanges = releases.reduce((sum, r) => sum + r.changes.length, 0);
  console.log(
    `Successfully generated ${path.relative(ROOT_DIR, OUTPUT_DATA_FILE)} with ${releases.length} releases and ${totalChanges} changes.`
  );
}

main();
