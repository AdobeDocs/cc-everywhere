const path = require("path");
const fs = require("node:fs");
const { globSync } = require("glob");

// Define root directory relative to this script (scripts/scriptUtils.js -> ../)
const ROOT_DIR = path.resolve(__dirname, "..");

function getRedirectionsFilePath() {
  const redirectionsFilePath = path.join(
    ROOT_DIR,
    "src",
    "pages",
    "redirects.json"
  );
  return path.resolve(redirectionsFilePath);
}

function readRedirectionsFile() {
  const redirectionsFilePath = getRedirectionsFilePath();
  return JSON.parse(fs.readFileSync(redirectionsFilePath)).data;
}

function writeRedirectionsFile(data) {
  let redirectionsData = {
    total: data.length,
    offset: 0,
    limit: data.length,
    data: data,
    ":type": "sheet",
  };

  let redirectionsFilePath = getRedirectionsFilePath();
  fs.writeFileSync(redirectionsFilePath, JSON.stringify(redirectionsData));
}

function getFiles(fileExtensions, subDir = "src/pages") {
  const fileExtensionsPattern = fileExtensions.join("|");
  // Use path.join to construct pattern from ROOT_DIR
  // globSync returns absolute paths or relative to cwd? 
  // globSync(pattern) returns paths relative to cwd if pattern is relative.
  // We use absolute path for pattern to be safe, then make relative to ROOT_DIR.
  const pattern = path.join(ROOT_DIR, subDir) + `/**/*+(${fileExtensionsPattern})`;
  // Note: glob patterns need forward slashes on Windows, but we are on Mac.
  // Replacing backslashes is safer anyway.
  const normalizedPattern = pattern.replaceAll(path.sep, '/');
  
  return globSync(normalizedPattern).map(
    (f) => path.relative(ROOT_DIR, f)
  );
}

function getDeployableFiles(subDir = "src/pages") {
  // files types deployed to EDS in process-mds.sh
  return getFiles([".md", ".json"], subDir);
}

function getMarkdownFiles(subDir = "src/pages") {
  return getFiles([".md"], subDir);
}

function removeFileExtension(file) {
  const base = path.basename(file);
  const ext = path.extname(file);
  const end = file.length - base.length;
  const baseWithoutExt = base.substring(0, base.length - ext.length);
  return `${file.substring(0, end)}${baseWithoutExt}`;
}

const getFindPatternForMarkdownFiles = (from) =>
  `(\\[[^\\]]*]\\()(/|./)?(${from})(#[^\\()]*)?(\\))`;
const getReplacePatternForMarkdownFiles = (to) => `$1$2${to}$4$5`;

function replaceLinksInFile({
  file,
  linkMap,
  getFindPattern,
  getReplacePattern,
}) {
  // If file path is relative, resolve it against ROOT_DIR
  const absPath = path.isAbsolute(file) ? file : path.resolve(ROOT_DIR, file);
  
  let data = fs.readFileSync(absPath, "utf8");
  linkMap.forEach((to, from) => {
    const find = getFindPattern(from);
    const replace = getReplacePattern(to);
    data = data.replaceAll(new RegExp(find, "gm"), replace);
  });
  fs.writeFileSync(absPath, data, "utf-8");
}

module.exports = {
  getRedirectionsFilePath,
  readRedirectionsFile,
  writeRedirectionsFile,
  getDeployableFiles,
  getMarkdownFiles,
  getFindPatternForMarkdownFiles,
  getReplacePatternForMarkdownFiles,
  removeFileExtension,
  replaceLinksInFile,
};
