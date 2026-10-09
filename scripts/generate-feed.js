const path = require("path");
const fs = require("node:fs");

// Define root directory relative to this script (scripts/generate-feed.js -> ../)
const ROOT_DIR = path.resolve(__dirname, "..");

const SITE_BASE = "https://developer.adobe.com/express/embed-sdk/docs";
const CHANGELOG_PATH = "guides/changelog";
const CHANGELOG_URL = `${SITE_BASE}/${CHANGELOG_PATH}/`;
const FEED_URL = `${SITE_BASE}/feed.xml`;
const CHANGELOG_FILE = path.join(
  ROOT_DIR,
  "src",
  "pages",
  "guides",
  "changelog",
  "index.md"
);
const FEED_FILE = path.join(ROOT_DIR, "src", "pages", "feed.xml");

// Matches "## [v4.57.22] 2026-10-08", "## [4.54.18] 2026-09-02", "## [4.16.11] - 2024-11-18", and bare "## 2025-11-14"
const HEADING_RE = /^## (?:\[\s*v?([\d.]+)\s*\]\s*-?\s*)?(\d{4}-\d{2}-\d{2})\s*$/i;

function stripFrontmatter(markdown) {
  return markdown.replace(/^---\n[\s\S]*?\n---\n/, "");
}

function normalizeLineEndings(markdown) {
  return markdown.replace(/\r\n/g, "\n");
}

function parseReleases(markdown) {
  const lines = stripFrontmatter(normalizeLineEndings(markdown)).split("\n");
  const releases = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(HEADING_RE);
    if (match) {
      if (current) releases.push(current);
      const [, rawVersion, date] = match;
      const version = rawVersion ? rawVersion.replace(/^v/i, "").trim() : null;
      current = { version, date, bodyLines: [] };
    } else if (current) {
      current.bodyLines.push(line);
    }
  }
  if (current) releases.push(current);

  return releases;
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveRelativeLink(href) {
  if (/^https?:\/\//.test(href) || href.startsWith("#")) return href;
  // Relative markdown links in the changelog are relative to guides/changelog/,
  // e.g. "../../v4/shared/.../foo.md" or "../concepts/bar.md".
  const resolved = path
    .posix.normalize(path.posix.join(CHANGELOG_PATH, href))
    .replace(/\.md(#.*)?$/, (m, hash) => hash || "/");
  return `${SITE_BASE}/${resolved}`;
}

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatInline(text) {
  // 1. Inline code: `code` -> <code>code</code>
  let formatted = text.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeXml(code)}</code>`);

  // 2. Links: [text](href) -> <a href="...">text</a>
  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText, href) => `<a href="${escapeXml(resolveRelativeLink(href))}">${linkText}</a>`
  );

  // 3. Bold: **text** or __text__ -> <strong>text</strong>
  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, (_, boldText) => `<strong>${boldText}</strong>`);
  formatted = formatted.replace(/__([^_]+)__/g, (_, boldText) => `<strong>${boldText}</strong>`);

  return formatted;
}

function bodyToHtml(bodyLines) {
  const body = bodyLines.join("\n").trim();
  if (!body) return "";

  const html = body
    .split("\n")
    .map((line) => {
      const heading = line.match(/^###\s+(.*)$/);
      if (heading) return `<h3>${formatInline(heading[1])}</h3>`;
      const bullet = line.match(/^\s*-\s+(.*)$/);
      if (bullet) return `<li>${formatInline(bullet[1])}</li>`;
      if (!line.trim()) return "";
      return `<p>${formatInline(line)}</p>`;
    })
    .join("\n");

  // Wrap consecutive <li> lines in <ul>
  return html.replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul>\n${match}</ul>\n`);
}

function toRfc822(dateStr) {
  const date = new Date(`${dateStr}T00:00:00Z`);
  return date.toUTCString();
}

function buildItem(release) {
  const title = release.version ? `v${release.version}` : release.date;
  const headingText = release.version
    ? `${release.version} ${release.date}`
    : release.date;
  const anchor = slugify(headingText);
  const guid = release.version
    ? `${release.version}-${release.date}`
    : release.date;
  const link = `${CHANGELOG_URL}#${anchor}`;
  const description = bodyToHtml(release.bodyLines);

  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>
      <pubDate>${toRfc822(release.date)}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
}

function buildFeed(releases) {
  const sorted = [...releases].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const items = sorted.map(buildItem).join("\n");
  const lastBuildDate = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Adobe Express Embed SDK Changelog</title>
    <link>${CHANGELOG_URL}</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>Release notes for the Adobe Express Embed SDK.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

function main() {
  const markdown = fs.readFileSync(CHANGELOG_FILE, "utf8");
  const releases = parseReleases(markdown);
  const feed = buildFeed(releases);
  fs.writeFileSync(FEED_FILE, feed, "utf-8");
  console.log(`Wrote ${releases.length} releases to ${path.relative(ROOT_DIR, FEED_FILE)}`);
}

main();
