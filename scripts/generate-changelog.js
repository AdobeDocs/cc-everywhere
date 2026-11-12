const fs = require("node:fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const SETTINGS_FILE = path.join(ROOT_DIR, "src", "pages", "changelog-settings.yml");
const DATA_FILE = path.join(ROOT_DIR, "src", "pages", "changelog-data.yml");
const OUTPUT_FILE = path.join(ROOT_DIR, "src", "pages", "changelog.json");

const DOUBLE_QUOTED_ESCAPES = {
  "\\": "\\",
  '"': '"',
  "/": "/",
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "\t",
};

/**
 * Walk characters outside single/double quotes and invoke `onUnquotedChar`.
 * Stops early if `onUnquotedChar` returns a defined value.
 */
function scanUnquotedText(text, onUnquotedChar) {
  let isInDoubleQuotes = false;
  let isInSingleQuotes = false;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];

    if (isInDoubleQuotes) {
      if (character === "\\" && index + 1 < text.length) {
        index += 1;
      } else if (character === '"') {
        isInDoubleQuotes = false;
      }
      continue;
    }

    if (isInSingleQuotes) {
      if (character === "'" && text[index + 1] === "'") {
        index += 1;
      } else if (character === "'") {
        isInSingleQuotes = false;
      }
      continue;
    }

    if (character === '"') {
      isInDoubleQuotes = true;
      continue;
    }

    if (character === "'") {
      isInSingleQuotes = true;
      continue;
    }

    if (character === "]" || character === "}") {
      if (character === "]") bracketDepth -= 1;
      else braceDepth -= 1;
    }

    const isTopLevel = bracketDepth === 0 && braceDepth === 0;
    const result = onUnquotedChar(character, index, isTopLevel);
    if (result !== undefined) {
      return result;
    }

    if (character === "[") bracketDepth += 1;
    else if (character === "{") braceDepth += 1;
  }

  return undefined;
}

function stripComment(line) {
  const commentIndex = scanUnquotedText(line, (character, index) => {
    const isCommentStart = index === 0 || /\s/.test(line[index - 1]);
    if (character === "#" && isCommentStart) {
      return index;
    }
  });

  const withoutComment = commentIndex === undefined ? line : line.slice(0, commentIndex);
  return withoutComment.trimEnd();
}

function unescapeDoubleQuoted(quotedText) {
  return quotedText.replace(
    /\\(\\|"|\/|b|f|n|r|t|u([0-9a-fA-F]{4}))/g,
    (fullMatch, escapeCode, hexCode) => {
      if (escapeCode.startsWith("u")) {
        return String.fromCharCode(parseInt(hexCode, 16));
      }
      return DOUBLE_QUOTED_ESCAPES[escapeCode] ?? fullMatch;
    }
  );
}

function splitTopLevel(content, delimiter = ",") {
  const parts = [];
  let segmentStart = 0;

  scanUnquotedText(content, (character, index, isTopLevel) => {
    if (character === delimiter && isTopLevel) {
      parts.push(content.slice(segmentStart, index).trim());
      segmentStart = index + 1;
    }
  });

  const trailingSegment = content.slice(segmentStart).trim();
  if (trailingSegment.length > 0) {
    parts.push(trailingSegment);
  }

  return parts;
}

function splitKeyValue(text) {
  const colonIndex = scanUnquotedText(text, (character, index, isTopLevel) => {
    const hasTrailingWhitespace = index + 1 === text.length || /\s/.test(text[index + 1]);
    if (character === ":" && isTopLevel && hasTrailingWhitespace) {
      return index;
    }
  });

  if (colonIndex === undefined) return null;

  const rawKey = text.slice(0, colonIndex).trim();
  const rawValue = text.slice(colonIndex + 1).trim();

  return {
    key: String(parseScalar(rawKey)),
    rawValue,
  };
}

function parseScalar(rawValue) {
  const trimmedValue = rawValue.trim();
  if (!trimmedValue || trimmedValue === "null" || trimmedValue === "~") return null;

  if (trimmedValue.startsWith('"') && trimmedValue.endsWith('"') && trimmedValue.length >= 2) {
    return unescapeDoubleQuoted(trimmedValue.slice(1, -1));
  }

  if (trimmedValue.startsWith("'") && trimmedValue.endsWith("'") && trimmedValue.length >= 2) {
    return trimmedValue.slice(1, -1).replace(/''/g, "'");
  }

  if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
    const innerContent = trimmedValue.slice(1, -1).trim();
    return innerContent ? splitTopLevel(innerContent).map(parseScalar) : [];
  }

  if (trimmedValue.startsWith("{") && trimmedValue.endsWith("}")) {
    const innerContent = trimmedValue.slice(1, -1).trim();
    if (!innerContent) return {};

    const flowMapping = {};
    for (const entry of splitTopLevel(innerContent)) {
      const keyValue = splitKeyValue(entry);
      if (keyValue) {
        flowMapping[keyValue.key] = parseScalar(keyValue.rawValue);
      }
    }
    return flowMapping;
  }

  if (trimmedValue === "true") return true;
  if (trimmedValue === "false") return false;
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(trimmedValue)) return Number(trimmedValue);

  return trimmedValue;
}

function isBlockScalarIndicator(rawValue) {
  return rawValue === "|" || rawValue === ">" || /^[|>][+-]$/.test(rawValue);
}

function foldBlockLines(lines) {
  const paragraphs = [];
  let currentParagraph = [];

  for (const line of lines) {
    if (line === "") {
      if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph.join(" "));
        currentParagraph = [];
      } else {
        paragraphs.push("");
      }
    } else {
      currentParagraph.push(line);
    }
  }

  if (currentParagraph.length > 0) {
    paragraphs.push(currentParagraph.join(" "));
  }

  return paragraphs.join("\n");
}

function parseBlockScalar(rawLines, startLineIndex, parentIndent, indicator) {
  const blockStyle = indicator[0];
  const chompingIndicator = indicator.slice(1);
  const collectedLines = [];
  let blockIndent = null;
  let lineIndex = startLineIndex;

  while (lineIndex < rawLines.length) {
    const line = rawLines[lineIndex];
    if (line.trim() === "") {
      collectedLines.push("");
      lineIndex += 1;
      continue;
    }

    const indent = line.search(/\S/);
    if (blockIndent === null) {
      if (indent <= parentIndent) break;
      blockIndent = indent;
    } else if (indent < blockIndent) {
      break;
    }

    collectedLines.push(line.slice(blockIndent));
    lineIndex += 1;
  }

  while (
    collectedLines.length > 0 &&
    collectedLines[collectedLines.length - 1] === "" &&
    chompingIndicator !== "+"
  ) {
    collectedLines.pop();
  }

  let blockText = blockStyle === ">" ? foldBlockLines(collectedLines) : collectedLines.join("\n");
  if (chompingIndicator !== "-" && blockText.length > 0) {
    blockText += "\n";
  }

  return { value: blockText, nextLineIndex: lineIndex };
}

function tokenizeLines(yamlContent) {
  const rawLines = yamlContent.replace(/\r\n/g, "\n").split("\n");
  const tokens = [];

  for (let lineIndex = 0; lineIndex < rawLines.length; lineIndex += 1) {
    const cleanedLine = stripComment(rawLines[lineIndex]);
    if (!cleanedLine.trim()) continue;

    tokens.push({
      indent: cleanedLine.search(/\S/),
      text: cleanedLine.trim(),
      rawLineIndex: lineIndex,
    });
  }

  return { rawLines, tokens };
}

function isSequenceItem(text) {
  return text === "-" || text.startsWith("- ");
}

function resolveFieldValue(context, tokenIndex, rawValue, containerIndent) {
  const { tokens, rawLines } = context;
  const currentToken = tokens[tokenIndex];

  if (isBlockScalarIndicator(rawValue)) {
    const block = parseBlockScalar(
      rawLines,
      currentToken.rawLineIndex + 1,
      currentToken.indent,
      rawValue
    );

    let nextTokenIndex = tokenIndex + 1;
    while (nextTokenIndex < tokens.length && tokens[nextTokenIndex].rawLineIndex < block.nextLineIndex) {
      nextTokenIndex += 1;
    }
    return { value: block.value, nextIndex: nextTokenIndex };
  }

  if (rawValue === "") {
    const nextToken = tokens[tokenIndex + 1];
    const hasNestedBlock =
      nextToken &&
      (nextToken.indent > containerIndent ||
        (nextToken.indent === containerIndent && isSequenceItem(nextToken.text)));

    if (!hasNestedBlock) {
      return { value: null, nextIndex: tokenIndex + 1 };
    }
    return parseNode(context, tokenIndex + 1, nextToken.indent);
  }

  return { value: parseScalar(rawValue), nextIndex: tokenIndex + 1 };
}

function parseSequence(context, startIndex, sequenceIndent) {
  const { tokens } = context;
  const items = [];
  let tokenIndex = startIndex;

  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    if (token.indent !== sequenceIndent || !isSequenceItem(token.text)) break;

    const itemContent = token.text.slice(1).trim();

    if (!itemContent) {
      const nextToken = tokens[tokenIndex + 1];
      if (!nextToken || nextToken.indent <= sequenceIndent) {
        items.push(null);
        tokenIndex += 1;
      } else {
        const nested = parseNode(context, tokenIndex + 1, nextToken.indent);
        items.push(nested.value);
        tokenIndex = nested.nextIndex;
      }
      continue;
    }

    const keyValue = splitKeyValue(itemContent);
    if (keyValue) {
      const itemIndent = token.indent + 2;
      const itemMapping = {};

      const resolved = resolveFieldValue(context, tokenIndex, keyValue.rawValue, itemIndent);
      itemMapping[keyValue.key] = resolved.value;
      tokenIndex = resolved.nextIndex;

      if (
        tokenIndex < tokens.length &&
        tokens[tokenIndex].indent >= itemIndent &&
        !isSequenceItem(tokens[tokenIndex].text)
      ) {
        const remainingFields = parseMapping(
          context,
          tokenIndex,
          tokens[tokenIndex].indent,
          itemMapping
        );
        tokenIndex = remainingFields.nextIndex;
      }

      items.push(itemMapping);
      continue;
    }

    items.push(parseScalar(itemContent));
    tokenIndex += 1;
  }

  return { value: items, nextIndex: tokenIndex };
}

function parseMapping(context, startIndex, mappingIndent, targetMapping = {}) {
  const { tokens } = context;
  let tokenIndex = startIndex;

  while (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    if (token.indent !== mappingIndent || isSequenceItem(token.text)) break;

    const keyValue = splitKeyValue(token.text);
    if (!keyValue) {
      throw new Error(`Invalid YAML mapping at line ${token.rawLineIndex + 1}: "${token.text}"`);
    }

    const resolved = resolveFieldValue(context, tokenIndex, keyValue.rawValue, mappingIndent);
    targetMapping[keyValue.key] = resolved.value;
    tokenIndex = resolved.nextIndex;
  }

  return { value: targetMapping, nextIndex: tokenIndex };
}

function parseNode(context, startIndex, indent) {
  const token = context.tokens[startIndex];
  if (isSequenceItem(token.text)) {
    return parseSequence(context, startIndex, indent);
  }
  return parseMapping(context, startIndex, indent);
}

function parseYaml(yamlContent) {
  const context = tokenizeLines(yamlContent);
  if (context.tokens.length === 0) return {};
  return parseNode(context, 0, context.tokens[0].indent).value;
}

function stripMarkdownExtension(url) {
  // Keep external URLs (e.g., GitHub README.md links) and anchor-only links untouched
  if (/^https?:\/\//i.test(url) || url.startsWith("#")) {
    return url;
  }

  return url.replace(/(?:^|\/)index\.md(?=[?#]|$)|\.md(?=[?#]|$)/i, (matchedSegment) => {
    if (matchedSegment.toLowerCase().endsWith("index.md")) {
      return matchedSegment.startsWith("/") ? "/" : "./";
    }
    return "";
  });
}

function normalizeLinksInText(text) {
  const updatedText = text.replace(
    /(\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g,
    (_, linkPrefix, url, linkSuffix) => `${linkPrefix}${stripMarkdownExtension(url)}${linkSuffix}`
  );

  if (/^[^\s]+\.md(?:[?#].*)?$/i.test(updatedText)) {
    return stripMarkdownExtension(updatedText);
  }

  return updatedText;
}

function normalizeLinksDeep(node) {
  if (typeof node === "string") return normalizeLinksInText(node);
  if (Array.isArray(node)) return node.map(normalizeLinksDeep);

  if (node && typeof node === "object") {
    const normalizedObject = {};
    for (const [propertyKey, propertyValue] of Object.entries(node)) {
      normalizedObject[propertyKey] = normalizeLinksDeep(propertyValue);
    }
    return normalizedObject;
  }

  return node;
}

function buildChangelogSheet(settings, data) {
  return {
    total: 1,
    offset: 0,
    limit: 1,
    data: [
      {
        settings: normalizeLinksDeep(settings),
        data: normalizeLinksDeep(data),
      },
    ],
    ":type": "sheet",
  };
}

function main() {
  const settingsYaml = fs.readFileSync(SETTINGS_FILE, "utf8");
  const dataYaml = fs.readFileSync(DATA_FILE, "utf8");

  const settings = parseYaml(settingsYaml);
  const data = parseYaml(dataYaml);

  if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
    throw new Error(`Expected object root in ${path.relative(ROOT_DIR, SETTINGS_FILE)}`);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`Expected object root in ${path.relative(ROOT_DIR, DATA_FILE)}`);
  }

  const changelogSheet = buildChangelogSheet(settings, data);
  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(changelogSheet, null, 2)}\n`, "utf8");

  const releaseCount = Array.isArray(data.releases) ? data.releases.length : 0;
  console.log(`Generated ${path.relative(ROOT_DIR, OUTPUT_FILE)} with ${releaseCount} releases.`);
}

main();
