const fs = require("node:fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const SETTINGS_FILE = path.join(ROOT_DIR, "src", "pages", "changelog-settings.yml");
const DATA_FILE = path.join(ROOT_DIR, "src", "pages", "changelog-data.yml");
const OUTPUT_FILE = path.join(ROOT_DIR, "src", "pages", "changelog.json");

/**
 * Strip YAML comments (`# ...`) outside of single/double quotes.
 * In YAML, an inline comment requires `#` at start of text or preceded by whitespace.
 */
function stripComment(line) {
  let inSingle = false;
  let inDouble = false;

  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];

    if (inDouble) {
      if (ch === "\\" && i + 1 < line.length) {
        i += 1;
      } else if (ch === '"') {
        inDouble = false;
      }
      continue;
    }

    if (inSingle) {
      if (ch === "'" && line[i + 1] === "'") {
        i += 1;
      } else if (ch === "'") {
        inSingle = false;
      }
      continue;
    }

    if (ch === '"') {
      inDouble = true;
    } else if (ch === "'") {
      inSingle = true;
    } else if (ch === "#" && (i === 0 || /\s/.test(line[i - 1]))) {
      return line.slice(0, i).trimEnd();
    }
  }

  return line.trimEnd();
}

function unescapeDoubleQuoted(str) {
  return str.replace(
    /\\(\\|"|\/|b|f|n|r|t|u([0-9a-fA-F]{4}))/g,
    (_, esc, hex) => {
      switch (esc[0]) {
        case "\\":
          return "\\";
        case '"':
          return '"';
        case "/":
          return "/";
        case "b":
          return "\b";
        case "f":
          return "\f";
        case "n":
          return "\n";
        case "r":
          return "\r";
        case "t":
          return "\t";
        case "u":
          return String.fromCharCode(parseInt(hex, 16));
        default:
          return esc;
      }
    }
  );
}

/**
 * Split a comma-separated flow sequence/map body respecting nested brackets and quotes.
 */
function splitTopLevel(content, delimiter = ",") {
  const parts = [];
  let current = "";
  let inSingle = false;
  let inDouble = false;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < content.length; i += 1) {
    const ch = content[i];

    if (inDouble) {
      current += ch;
      if (ch === "\\" && i + 1 < content.length) {
        current += content[i + 1];
        i += 1;
      } else if (ch === '"') {
        inDouble = false;
      }
      continue;
    }

    if (inSingle) {
      current += ch;
      if (ch === "'" && content[i + 1] === "'") {
        current += "'";
        i += 1;
      } else if (ch === "'") {
        inSingle = false;
      }
      continue;
    }

    if (ch === '"') {
      inDouble = true;
      current += ch;
    } else if (ch === "'") {
      inSingle = true;
      current += ch;
    } else if (ch === "[") {
      bracketDepth += 1;
      current += ch;
    } else if (ch === "]") {
      bracketDepth -= 1;
      current += ch;
    } else if (ch === "{") {
      braceDepth += 1;
      current += ch;
    } else if (ch === "}") {
      braceDepth -= 1;
      current += ch;
    } else if (ch === delimiter && bracketDepth === 0 && braceDepth === 0) {
      parts.push(current.trim());
      current = "";
    } else {
      current += ch;
    }
  }

  if (current.trim().length > 0) {
    parts.push(current.trim());
  }

  return parts;
}

function splitKeyValue(text) {
  let inSingle = false;
  let inDouble = false;
  let bracketDepth = 0;
  let braceDepth = 0;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (inDouble) {
      if (ch === "\\" && i + 1 < text.length) {
        i += 1;
      } else if (ch === '"') {
        inDouble = false;
      }
      continue;
    }

    if (inSingle) {
      if (ch === "'" && text[i + 1] === "'") {
        i += 1;
      } else if (ch === "'") {
        inSingle = false;
      }
      continue;
    }

    if (ch === '"') {
      inDouble = true;
    } else if (ch === "'") {
      inSingle = true;
    } else if (ch === "[") {
      bracketDepth += 1;
    } else if (ch === "]") {
      bracketDepth -= 1;
    } else if (ch === "{") {
      braceDepth += 1;
    } else if (ch === "}") {
      braceDepth -= 1;
    } else if (
      ch === ":" &&
      bracketDepth === 0 &&
      braceDepth === 0 &&
      (i + 1 === text.length || /\s/.test(text[i + 1]))
    ) {
      const rawKey = text.slice(0, i).trim();
      const rawValue = text.slice(i + 1).trim();
      return {
        key: String(parseScalar(rawKey)),
        rawValue,
      };
    }
  }

  return null;
}

function parseScalar(raw) {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "null" || trimmed === "~") return null;

  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
    return unescapeDoubleQuoted(trimmed.slice(1, -1));
  }

  if (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length >= 2) {
    return trimmed.slice(1, -1).replace(/''/g, "'");
  }

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    return splitTopLevel(inner).map(parseScalar);
  }

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return {};
    const obj = {};
    for (const entry of splitTopLevel(inner)) {
      const kv = splitKeyValue(entry);
      if (kv) {
        obj[kv.key] = parseScalar(kv.rawValue);
      }
    }
    return obj;
  }

  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^-?(?:0|[1-9]\d*)(?:\.\d+)?$/.test(trimmed)) return Number(trimmed);

  return trimmed;
}

function parseBlockScalar(lines, startIndex, parentIndent, indicator) {
  const style = indicator[0]; // '|' or '>'
  const chomp = indicator.slice(1); // '', '-', or '+'
  const collected = [];
  let blockIndent = null;
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];
    if (line.trim() === "") {
      collected.push("");
      index += 1;
      continue;
    }

    const indent = line.search(/\S/);
    if (blockIndent === null) {
      if (indent <= parentIndent) break;
      blockIndent = indent;
    } else if (indent < blockIndent) {
      break;
    }

    collected.push(line.slice(blockIndent));
    index += 1;
  }

  while (collected.length > 0 && collected[collected.length - 1] === "" && chomp !== "+") {
    collected.pop();
  }

  let text;
  if (style === ">") {
    const paragraphs = [];
    let current = [];
    for (const line of collected) {
      if (line === "") {
        if (current.length > 0) {
          paragraphs.push(current.join(" "));
          current = [];
        } else {
          paragraphs.push("");
        }
      } else {
        current.push(line);
      }
    }
    if (current.length > 0) paragraphs.push(current.join(" "));
    text = paragraphs.join("\n");
  } else {
    text = collected.join("\n");
  }

  if (chomp !== "-" && text.length > 0) {
    text += "\n";
  }

  return { value: text, nextIndex: index };
}

function tokenizeLines(yamlContent) {
  const rawLines = yamlContent.replace(/\r\n/g, "\n").split("\n");
  const tokens = [];

  for (let i = 0; i < rawLines.length; i += 1) {
    const cleaned = stripComment(rawLines[i]);
    if (!cleaned.trim()) continue;
    const indent = cleaned.search(/\S/);
    tokens.push({
      indent,
      text: cleaned.trim(),
      rawIndex: i,
    });
  }

  return { rawLines, tokens };
}

function isSequenceItem(text) {
  return text === "-" || text.startsWith("- ");
}

function parseSequence(context, startIndex, seqIndent) {
  const { tokens, rawLines } = context;
  const items = [];
  let index = startIndex;

  while (index < tokens.length) {
    const token = tokens[index];
    if (token.indent < seqIndent) break;
    if (token.indent > seqIndent || !isSequenceItem(token.text)) break;

    const afterDash = token.text.slice(1).trim();

    if (!afterDash) {
      // Nested block directly below '-'
      const next = tokens[index + 1];
      if (!next || next.indent <= seqIndent) {
        items.push(null);
        index += 1;
      } else {
        const parsed = parseNode(context, index + 1, next.indent);
        items.push(parsed.value);
        index = parsed.nextIndex;
      }
      continue;
    }

    const kv = splitKeyValue(afterDash);
    if (kv) {
      // Inline mapping item starting on the '-' line; subsequent lines at itemIndent belong to this map
      const itemIndent = token.indent + 2;
      const obj = {};

      if (kv.rawValue === "|" || kv.rawValue === ">" || /^[|>][+-]$/.test(kv.rawValue)) {
        const block = parseBlockScalar(rawLines, token.rawIndex + 1, token.indent, kv.rawValue);
        obj[kv.key] = block.value;
        index += 1;
        while (index < tokens.length && tokens[index].rawIndex < block.nextIndex) {
          index += 1;
        }
      } else if (kv.rawValue === "") {
        const next = tokens[index + 1];
        if (!next || next.indent <= itemIndent) {
          obj[kv.key] = null;
          index += 1;
        } else {
          const nested = parseNode(context, index + 1, next.indent);
          obj[kv.key] = nested.value;
          index = nested.nextIndex;
        }
      } else {
        obj[kv.key] = parseScalar(kv.rawValue);
        index += 1;
      }

      if (index < tokens.length && tokens[index].indent >= itemIndent && !isSequenceItem(tokens[index].text)) {
        const rest = parseMapping(context, index, tokens[index].indent, obj);
        index = rest.nextIndex;
      }

      items.push(obj);
      continue;
    }

    items.push(parseScalar(afterDash));
    index += 1;
  }

  return { value: items, nextIndex: index };
}

function parseMapping(context, startIndex, mapIndent, target = {}) {
  const { tokens, rawLines } = context;
  let index = startIndex;

  while (index < tokens.length) {
    const token = tokens[index];
    if (token.indent < mapIndent) break;
    if (token.indent > mapIndent || isSequenceItem(token.text)) break;

    const kv = splitKeyValue(token.text);
    if (!kv) {
      throw new Error(`Invalid YAML mapping at line ${token.rawIndex + 1}: "${token.text}"`);
    }

    if (kv.rawValue === "|" || kv.rawValue === ">" || /^[|>][+-]$/.test(kv.rawValue)) {
      const block = parseBlockScalar(rawLines, token.rawIndex + 1, mapIndent, kv.rawValue);
      target[kv.key] = block.value;
      index += 1;
      while (index < tokens.length && tokens[index].rawIndex < block.nextIndex) {
        index += 1;
      }
      continue;
    }

    if (kv.rawValue === "") {
      const next = tokens[index + 1];
      if (!next || next.indent < mapIndent || (next.indent === mapIndent && !isSequenceItem(next.text))) {
        target[kv.key] = null;
        index += 1;
      } else {
        const nested = parseNode(context, index + 1, next.indent);
        target[kv.key] = nested.value;
        index = nested.nextIndex;
      }
      continue;
    }

    target[kv.key] = parseScalar(kv.rawValue);
    index += 1;
  }

  return { value: target, nextIndex: index };
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

function stripMdExtension(url) {
  if (/^https?:\/\//i.test(url)) {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== "developer.adobe.com") return url;
    } catch {
      return url;
    }
  }
  return url.replace(/(?:^|\/)index\.md(?=[?#]|$)|\.md(?=[?#]|$)/i, (match) => {
    if (match.toLowerCase().endsWith("index.md")) {
      return match.startsWith("/") ? "/" : "./";
    }
    return "";
  });
}

function normalizeStringLinks(value) {
  const updated = value.replace(
    /(\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g,
    (_, prefix, url, suffix) => `${prefix}${stripMdExtension(url)}${suffix}`
  );
  if (/^[^\s]+\.md(?:[?#].*)?$/i.test(updated)) {
    return stripMdExtension(updated);
  }
  return updated;
}

function normalizeLinksDeep(node) {
  if (typeof node === "string") return normalizeStringLinks(node);
  if (Array.isArray(node)) return node.map(normalizeLinksDeep);
  if (node && typeof node === "object") {
    const out = {};
    for (const [key, val] of Object.entries(node)) {
      out[key] = normalizeLinksDeep(val);
    }
    return out;
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

  const sheet = buildChangelogSheet(settings, data);
  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(sheet, null, 2)}\n`, "utf8");

  const releaseCount = Array.isArray(data.releases) ? data.releases.length : 0;
  console.log(
    `Generated ${path.relative(ROOT_DIR, OUTPUT_FILE)} with ${releaseCount} releases.`
  );
}

main();
