const path = require("path");
const fs = require("node:fs");

const ROOT_DIR = path.resolve(__dirname, "..");

const SITE_BASE = "https://developer.adobe.com/express/embed-sdk/docs";
const CHANGELOG_PATH = "guides/changelog";
const CHANGELOG_URL = `${SITE_BASE}/${CHANGELOG_PATH}/`;
const FEED_URL = `${SITE_BASE}/feed.xml`;
const CHANGELOG_JSON_FILE = path.join(ROOT_DIR, "src", "pages", "changelog.json");
const FEED_FILE = path.join(ROOT_DIR, "src", "pages", "feed.xml");

const TYPE_HEADINGS = {
  breaking: "Breaking Changes",
  removed: "Removed",
  deprecated: "Deprecated",
  new: "Added",
  improved: "Improved",
  fixed: "Fixed",
  docs: "Documentation",
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveRelativeLink(href) {
  if (/^https?:\/\//i.test(href) || href.startsWith("#")) {
    return href;
  }

  const normalizedHref = href.replace(
    /(?:^|\/)index\.md(?=[?#]|$)|\.md(?=[?#]|$)/i,
    (matchedSegment) => (matchedSegment.startsWith("/") ? "/" : "")
  );

  if (normalizedHref.startsWith("/")) {
    return `${SITE_BASE}${normalizedHref}`;
  }

  // Relative links in changelog.json are relative to guides/changelog/
  const resolvedPath = path.posix.normalize(path.posix.join(CHANGELOG_PATH, normalizedHref));
  return `${SITE_BASE}/${resolvedPath}`;
}

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatInline(text) {
  let formatted = text.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeXml(code)}</code>`);

  formatted = formatted.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, linkText, href) => `<a href="${escapeXml(resolveRelativeLink(href))}">${linkText}</a>`
  );

  formatted = formatted.replace(/\*\*([^*]+)\*\*/g, (_, boldText) => `<strong>${boldText}</strong>`);
  formatted = formatted.replace(/__([^_]+)__/g, (_, boldText) => `<strong>${boldText}</strong>`);

  return formatted;
}

function formatTypeHeading(rawType) {
  const parts = String(rawType || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) return "Updates";

  return parts
    .map((part) => {
      const mapped = TYPE_HEADINGS[part.toLowerCase()];
      if (mapped) return mapped;
      return part.replace(/\b\w+/g, (word) =>
        word.toLowerCase() === "api"
          ? "API"
          : word.charAt(0).toUpperCase() + word.slice(1)
      );
    })
    .join(", ");
}

function formatChangeItem(change) {
  let html = formatInline(change.text || "");
  if (change.action) {
    html += ` <strong>Action:</strong> ${formatInline(change.action)}`;
  }
  if (change.open) {
    html += " <em>(Still open)</em>";
  }
  return `<li>${html}</li>`;
}

function buildChangesHtml(changes) {
  const groupedChanges = new Map();

  for (const change of changes) {
    const heading = formatTypeHeading(change.type);
    if (!groupedChanges.has(heading)) {
      groupedChanges.set(heading, []);
    }
    groupedChanges.get(heading).push(change);
  }

  const sections = [];
  for (const [heading, items] of groupedChanges.entries()) {
    const listItems = items.map(formatChangeItem).join("\n");
    sections.push(`<h3>${escapeXml(heading)}</h3>\n\n<ul>\n${listItems}\n</ul>`);
  }

  return `${sections.join("\n\n")}\n`;
}

function buildDescriptionHtml(release, kinds = {}) {
  const blocks = [];

  if (release.title) {
    blocks.push(`<p><strong>${escapeXml(release.title)}</strong></p>`);
  }

  if (Array.isArray(release.changes) && release.changes.length > 0) {
    blocks.push(buildChangesHtml(release.changes).trimEnd());
  } else if (release.summary) {
    if (release.breaking) {
      blocks.push("<h3>Breaking Changes</h3>");
    }
    blocks.push(`<p>${formatInline(release.summary)}</p>`);
  } else {
    const kindLabel = kinds[release.kind] || "Maintenance";
    blocks.push(`<p>${escapeXml(kindLabel)} release.</p>`);
  }

  return blocks.join("\n");
}

function toRfc822(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toUTCString();
}

function buildItem(release, kinds) {
  const title = release.version ? `v${release.version}` : release.date;
  const headingText = release.version
    ? `${release.version} ${release.date}`
    : release.date;
  const anchor = slugify(headingText);
  const guid = release.version
    ? `${release.version}-${release.date}`
    : release.date;
  const link = `${CHANGELOG_URL}#${anchor}`;
  const description = buildDescriptionHtml(release, kinds);

  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="false">${escapeXml(guid)}</guid>
      <pubDate>${toRfc822(release.date)}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
}

function buildFeed(releases, settings = {}) {
  const sortedReleases = [...releases].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const kinds = settings.kinds || {};
  const description =
    settings.page?.description || "Release notes for the Adobe Express Embed SDK.";
  const items = sortedReleases.map((release) => buildItem(release, kinds)).join("\n");
  const lastBuildDate = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Adobe Express Embed SDK Changelog</title>
    <link>${CHANGELOG_URL}</link>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(description)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

function loadChangelogJson(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf8");
  const parsed = JSON.parse(rawContent);
  const sheetRow = parsed?.data?.[0];

  if (!sheetRow || !Array.isArray(sheetRow.data?.releases)) {
    throw new Error(`Invalid changelog sheet structure in ${path.relative(ROOT_DIR, filePath)}`);
  }

  return {
    settings: sheetRow.settings || {},
    releases: sheetRow.data.releases,
  };
}

function main() {
  const { settings, releases } = loadChangelogJson(CHANGELOG_JSON_FILE);
  const feedXml = buildFeed(releases, settings);
  fs.writeFileSync(FEED_FILE, feedXml, "utf8");
  console.log(`Wrote ${releases.length} releases to ${path.relative(ROOT_DIR, FEED_FILE)}`);
}

main();
