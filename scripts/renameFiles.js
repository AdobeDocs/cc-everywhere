const path = require("path");
const fs = require("node:fs");
const pathPrefixFromGatsbyConfig = "/express/embed-sdk/docs/";
const {
  readRedirectionsFile,
  writeRedirectionsFile,
  getRedirectionsFilePath,
  getDeployableFiles,
  getMarkdownFiles,
  getFindPatternForMarkdownFiles,
  getReplacePatternForMarkdownFiles,
  removeFileExtension,
  replaceLinksInFile,
} = require("./scriptUtils.js");

const ROOT_DIR = path.resolve(__dirname, "..");

function toKebabCase(str) {
  const isScreamingSnakeCase = new RegExp(/^[A-Z0-9_]*$/).test(str);
  str = isScreamingSnakeCase ? str.toLowerCase() : str;
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
}

function toEdsCase(str) {
  const isValid = Boolean(/^([a-z0-9-]*)$/.test(str));
  return isValid ? str : toKebabCase(str);
}

function toUrl(str) {
  let url = removeFileExtension(str);

  // replace '/index' with trailing slash
  if (url.endsWith("/index")) {
    const index = url.lastIndexOf("index");
    url = url.substring(0, index);
  }

  return url;
}

function removeTrailingSlash(str) {
  if (str.endsWith("/")) {
    const index = str.length - 1;
    str = str.substring(0, index);
  }
  return str;
}

function getPathPrefixFromConfig() {
  const CONFIG_PATH = path.join(ROOT_DIR, "src", "pages", "config.md");
  if (!fs.existsSync(CONFIG_PATH)) {
    return null;
  }

  const data = fs.readFileSync(CONFIG_PATH).toString();
  if (!data) {
    return null;
  }

  const lines = data.split("\n");

  // find the pathPrefix key
  const keyIndex = lines.findIndex((line) =>
    new RegExp(/\s*-\s*pathPrefix:/).test(line)
  );
  if (keyIndex < 0) {
    return null;
  }

  // find the pathPrefix value
  const line = lines
    .slice(keyIndex + 1)
    ?.find((line) => new RegExp(/\s*-/).test(line));
  if (!line) {
    null;
  }

  // extract pathPrefix
  const pathPrefixLine = line.match(new RegExp(/(\s*-\s*)(\S*)(\s*)/));
  if (!pathPrefixLine) {
    return null;
  }
  return pathPrefixLine[2];
}

function toEdsPath(file) {
  const renamedFileWithoutExt = removeFileExtension(file)
    .split(path.sep)
    .map((token) => toEdsCase(token))
    .join(path.sep);
  const ext = path.extname(file);
  return `${renamedFileWithoutExt}${ext}`;
}

function getFileMap(files) {
  const map = new Map();
  files.forEach((from) => {
    const to = toEdsPath(from);
    if (to !== from) {
      map.set(from, to);
    }
  });
  return map;
}

function getLinkMap(fileMap, relativeToDir) {
  const linkMap = new Map();
  fileMap.forEach((toFile, fromFile) => {
    let fromRelFile = path.relative(relativeToDir, fromFile);
    fromRelFile = fromRelFile.replaceAll(path.sep, "/");

    let toRelFile = path.relative(relativeToDir, toFile);
    toRelFile = toRelFile.replaceAll(path.sep, "/");

    linkMap.set(fromRelFile, toRelFile);
  });
  return linkMap;
}

function renameLinksInGatsbyConfigFile(fileMap, file) {
  const dir = path.join("src", "pages");
  replaceLinksInFile({
    file,
    linkMap: getLinkMap(fileMap, dir),
    getFindPattern: (from) =>
      `(['"]?path['"]?\\s*:\\s*['"])(/|./)?(${from})(#[^'"]*)?(['"])`,
    getReplacePattern: (to) => `$1$2${to}$4$5`,
  });
}

function renameLinksInMarkdownFile(fileMap, file) {
  // Use original file path to calculate dir, preserving old logic
  const dir = path.dirname(file);
  replaceLinksInFile({
    file,
    linkMap: getLinkMap(fileMap, dir),
    getFindPattern: getFindPatternForMarkdownFiles,
    getReplacePattern: getReplacePatternForMarkdownFiles,
  });
}

function renameLinksInRedirectsFile(fileMap, pathPrefix) {
  const file = getRedirectionsFilePath();
  const dir = path.dirname(file);
  // Ensure we pass a path relative to root if dir is absolute
  const relativeDir = path.relative(ROOT_DIR, dir) || '.';
  
  const linkMap = getLinkMap(fileMap, relativeDir);

  // rename redirects for correct paths
  replaceLinksInFile({
    file,
    linkMap,
    getFindPattern: (from) =>
      `(['"]?)(Source|Destination)(['"]?\\s*:\\s*['"])(${pathPrefix}${toUrl(
        from
      )})(#[^'"]*)?(['"])`,
    getReplacePattern: (to) => `$1$2$3${pathPrefix}${toUrl(to)}$5$6`,
  });

  // rename redirects for paths that don't end in a trailing slash but should
  replaceLinksInFile({
    file,
    linkMap,
    getFindPattern: (from) =>
      `(['"]?)(Source)(['"]?\\s*:\\s*['"])(${pathPrefix}${removeTrailingSlash(
        toUrl(from)
      )})(#[^'"]*)?(['"])`,
    getReplacePattern: (to) =>
      `$1$2$3${pathPrefix}${removeTrailingSlash(toUrl(to))}$5$6`,
  });
  replaceLinksInFile({
    file,
    linkMap,
    getFindPattern: (from) =>
      `(['"]?)(Source)(['"]?\\s*:\\s*['"])(${pathPrefix}${removeTrailingSlash(
        toUrl(from)
      )}/index)(#[^'"]*)?(['"])`,
    getReplacePattern: (to) =>
      `$1$2$3${pathPrefix}${removeTrailingSlash(toUrl(to))}/index$5$6`,
  });

  // rename redirects for paths that end in a trailing slash but shouldn't
  replaceLinksInFile({
    file,
    linkMap,
    getFindPattern: (from) =>
      `(['"]?)(Source)(['"]?\\s*:\\s*['"])(${pathPrefix}${toUrl(
        from
      )}/)(#[^'"]*)?(['"])`,
    getReplacePattern: (to) => `$1$2$3${pathPrefix}${toUrl(to)}/$5$6`,
  });
}

function appendRedirects(fileMap, pathPrefix) {
  const file = getRedirectionsFilePath();
  const dir = path.dirname(file);
  const relativeDir = path.relative(ROOT_DIR, dir) || '.';
  const linkMap = getLinkMap(fileMap, relativeDir);
  const newData = [];
  linkMap.forEach((to, from) => {
    newData.push({
      Source: `${pathPrefix}${toUrl(from)}`,
      Destination: `${pathPrefix}${toUrl(to)}`,
    });
  });
  const currData = readRedirectionsFile();
  const data = [...currData, ...newData];
  writeRedirectionsFile(data);
}

function deleteEmptyDirectoryUpwards(startDir, stopDir) {
  // Ensure startDir is absolute or relative to cwd correctly
  // getFileMap uses relative paths, so path.dirname(from) is relative
  const absStart = path.isAbsolute(startDir) ? startDir : path.resolve(ROOT_DIR, startDir);
  const absStop = path.isAbsolute(stopDir) ? stopDir : path.resolve(ROOT_DIR, stopDir);
  
  if (!fs.existsSync(absStart)) return;

  const isEmpty = fs.readdirSync(absStart).length === 0;
  if (isEmpty && absStart !== absStop) {
    fs.rmdirSync(absStart);
    deleteEmptyDirectoryUpwards(path.dirname(absStart), absStop);
  }
}

function renameFiles(map) {
  // create new dirs
  map.forEach((to, _) => {
    const toDir = path.dirname(to);
    const absToDir = path.resolve(ROOT_DIR, toDir);
    if (!fs.existsSync(absToDir)) {
      fs.mkdirSync(absToDir, { recursive: true });
    }
  });

  // rename
  map.forEach((to, from) => {
    const absFrom = path.resolve(ROOT_DIR, from);
    const absTo = path.resolve(ROOT_DIR, to);
    if (fs.existsSync(absFrom)) {
        fs.renameSync(absFrom, absTo);
    }
  });

  // delete old dirs
  map.forEach((_, from) => {
    const fromDir = path.dirname(from);
    deleteEmptyDirectoryUpwards(fromDir, ROOT_DIR);
  });
}

try {
  const files = getDeployableFiles("src/pages/v4");
  const fileMap = getFileMap(files);

  const mdFiles = getMarkdownFiles();
  mdFiles.forEach((mdFile) => {
    renameLinksInMarkdownFile(fileMap, mdFile);
  });

  const redirectsFile = getRedirectionsFilePath();
  const pathPrefix = getPathPrefixFromConfig() ?? pathPrefixFromGatsbyConfig;
  if (fs.existsSync(redirectsFile)) {
    renameLinksInRedirectsFile(fileMap, pathPrefix);
    appendRedirects(fileMap, pathPrefix);
  }

  // Adjusted to point to scripts/api-refs-sidebar.json
  const gatsbyConfigFiles = ["scripts/api-refs-sidebar.json"];
  gatsbyConfigFiles.forEach((file) => {
    // Resolve relative to ROOT_DIR
    const absFile = path.resolve(ROOT_DIR, file);
    if (fs.existsSync(absFile)) {
      renameLinksInGatsbyConfigFile(fileMap, file);
    }
  });

  renameFiles(fileMap);
} catch (err) {
  console.error(err);
}
