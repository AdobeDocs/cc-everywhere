const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT_DIR, 'src', 'pages', 'changelog-data.yml');
const TEST2_MD_FILE = path.join(ROOT_DIR, 'src', 'pages', 'guides', 'changelog', 'test2.md');

// Load parseYaml from generate-changelog.js
const genChangelogJs = fs.readFileSync(path.join(ROOT_DIR, 'scripts', 'generate-changelog.js'), 'utf8');
const fnCode = genChangelogJs.slice(
  genChangelogJs.indexOf('const DOUBLE_QUOTED_ESCAPES'),
  genChangelogJs.indexOf('function buildChangelogSheet')
);
eval(fnCode);

const data = parseYaml(fs.readFileSync(DATA_FILE, 'utf8'));

function formatSingleChange(change) {
  const parts = [];

  const hasType = Boolean(change.type);
  const hasModules = Boolean(change.modules && change.modules.length > 0);

  let prefix = '';
  if (hasType && hasModules) {
    prefix = `**[${change.type} | ${change.modules.join(', ')}]** `;
  } else if (hasType) {
    prefix = `**[${change.type}]** `;
  } else if (hasModules) {
    prefix = `**[${change.modules.join(', ')}]** `;
  }

  // Main change text - indent continuation lines so sub-lists stay nested inside the list item
  const text = (change.text || '').trim();
  const textLines = text.split('\n');
  const firstLine = textLines[0];
  const restLines = textLines.slice(1).map((l) => (l.trim() ? `  ${l}` : ''));

  let mainItem = `- ${prefix}${firstLine}`;
  if (restLines.length > 0) {
    mainItem += `\n${restLines.join('\n')}`;
  }
  parts.push(mainItem);

  if (change.code) {
    const lang = change.language || 'js';
    const indentedCode = change.code.trim().split('\n').map((l) => `  ${l}`).join('\n');
    parts.push(`  \`\`\`${lang}\n${indentedCode}\n  \`\`\``);
  }

  if (change.action) {
    parts.push(`  **What to do:** ${change.action.trim()}`);
  }

  if (change.open) {
    parts.push(`  *(Still open)*`);
  }

  return parts.join('\n\n');
}

function formatChangesSlot(rel) {
  const changeItems = [];

  if (rel.changes && rel.changes.length > 0) {
    for (const change of rel.changes) {
      changeItems.push(formatSingleChange(change));
    }
  } else if (rel.summary) {
    const prefix = rel.breaking ? '**[breaking]** ' : '';
    changeItems.push(`- ${prefix}${rel.summary.trim()}`);
  } else {
    changeItems.push(`- Maintenance release: general improvements and bug fixes.`);
  }

  // Pure Markdown unordered list - no <div>, no tables
  return changeItems.join('\n\n');
}

function generateTest2Md(data) {
  const lines = [
    '---',
    'keywords:',
    '  - Breaking changes',
    '  - Added',
    '  - Enhancements',
    "  - What's new",
    '  - Known Issues',
    '  - Embed SDK changelog',
    '  - Changelog',
    'title: Changelog',
    'description: All notable changes are documented in this page.',
    'contributors:',
    '  - https://github.com/nimithajalal',
    '  - https://github.com/undavide',
    '---',
    '',
    '# Changelog',
    '',
    'Release notes for the Adobe Express Embed SDK, with the newest release first.<br><br><a href="https://raw.githubusercontent.com/AdobeDocs/cc-everywhere/refs/heads/main/src/pages/feed.xml" style="display: inline-flex; align-items: center; gap: 6px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><circle cx="6.18" cy="17.82" r="2.18" fill="#eb1000"/><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" fill="#eb1000"/></svg><span>Subscribe via RSS</span></a>',
    '',
    `<Changelog slots="version, date, kind, changes" repeat="${data.releases.length}" />`,
    '',
  ];

  for (const rel of data.releases) {
    const version = rel.version || '';
    const date = rel.date || '';
    const kind = rel.kind || (version ? 'sdk' : 'docs');
    const versionLabel = version
      ? (version.startsWith('v') ? version : `v${version}`)
      : (rel.title || 'Documentation Update');

    // Slot 1: version
    lines.push(`#### ${versionLabel}`);
    lines.push('');

    // Slot 2: date
    lines.push(`##### ${date}`);
    lines.push('');

    // Slot 3: kind
    lines.push(`###### ${kind}`);
    lines.push('');

    // Slot 4: changes (pure markdown unordered list)
    lines.push(formatChangesSlot(rel));
    lines.push('');
  }

  return lines.join('\n');
}

const mdOutput = generateTest2Md(data);
fs.writeFileSync(TEST2_MD_FILE, mdOutput, 'utf8');
console.log(`Generated ${path.relative(ROOT_DIR, TEST2_MD_FILE)} with ${mdOutput.length} bytes (single component, pure Markdown list, no divs).`);
