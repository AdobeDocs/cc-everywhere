const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Default source path assumes sibling directory structure
// Can be overridden by passing a path as an argument
const DEFAULT_SOURCE_REPO = path.resolve(
  __dirname,
  "../../project-marvel_cc-everywhere"
);
const SOURCE_REPO = process.argv[2]
  ? path.resolve(process.argv[2])
  : DEFAULT_SOURCE_REPO;

const DOCS_SOURCE_DIR = path.join(SOURCE_REPO, "devex/typedoc-devex");
const SIDEBAR_SOURCE_FILE = path.join(
  SOURCE_REPO,
  "devex/api-refs-sidebar.json"
);

const DEST_PAGES_DIR = path.join(__dirname, "../src/pages/v4");
const DEST_SIDEBAR_FILE = path.join(__dirname, "api-refs-sidebar.json");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Warning: Source directory not found: ${src}`);
    return;
  }

  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log(`Using source repository: ${SOURCE_REPO}`);

  if (!fs.existsSync(SOURCE_REPO)) {
    console.error(`Error: Source repository not found at ${SOURCE_REPO}`);
    console.error(
      "Please provide the correct path as an argument or check your directory structure."
    );
    process.exit(1);
  }

  // 1. Copy Documentation (sdk and shared folders)
  const foldersToCopy = ["sdk", "shared"];

  console.log("Copying documentation files...");
  foldersToCopy.forEach((folder) => {
    const src = path.join(DOCS_SOURCE_DIR, folder);
    const dest = path.join(DEST_PAGES_DIR, folder);

    if (fs.existsSync(dest)) {
      fs.rmSync(dest, { recursive: true, force: true });
    }

    copyDir(src, dest);
    console.log(`  - Copied ${folder} to ${dest}`);
  });

  // 2. Copy Sidebar JSON
  console.log("Copying sidebar JSON...");
  if (fs.existsSync(SIDEBAR_SOURCE_FILE)) {
    fs.copyFileSync(SIDEBAR_SOURCE_FILE, DEST_SIDEBAR_FILE);
    console.log(`  - Copied api-refs-sidebar.json to ${DEST_SIDEBAR_FILE}`);
  } else {
    console.error(`Error: Sidebar file not found at ${SIDEBAR_SOURCE_FILE}`);
    process.exit(1);
  }

  console.log(
    "\nSuccess! Documentation imported. Run 'npm run devex:eds-sanitize' and 'npm run devex:generate-sidebar' to complete the process."
  );
} catch (error) {
  console.error("Import failed:", error.message);
  process.exit(1);
}
