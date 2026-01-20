# Scripts & Automation Workflow

This directory contains Node.js scripts used to automate the synchronization and preparation of API documentation from the `project-marvel_cc-everywhere` repository to this repository (`AdobeDocs_cc-everywhere`).

The workflow is designed to:
1.  **Import** documentation assets and JSON data.
2.  **Sanitize** files to be compatible with Edge Delivery Services (EDS) standards (lowercase, kebab-case filenames).
3.  **Generate** the sidebar navigation structure in `src/pages/config.md`.

## Workflow Overview

The entire process can be run using a single npm script defined in the root `package.json`:

```bash
npm run devex:build-api-reference
```

This master script runs three sub-tasks in sequence:

1.  `npm run devex:sync-docs`
2.  `npm run devex:eds-sanitize`
3.  `npm run devex:generate-sidebar`

---

## Detailed Script Descriptions

### 1. Synchronization (`devex:sync-docs`)
**Script:** `scripts/import-docs.js`

*   **Function:** Copies the generated TypeDoc output (Markdown files) and the `api-refs-sidebar.json` file from the source repository.
*   **Source:**
    *   **Default:** Assumes the source repo is named `project-marvel_cc-everywhere` and located in the same parent directory (sibling to this repo).
    *   **Custom Path:** If your source repo is located elsewhere or named differently, you can provide the path as an argument:
        ```bash
        npm run devex:sync-docs -- /path/to/your/custom-repo-folder
        ```
        The script treats the provided path as the repository root and expects to find `devex/build/api-references` inside it.
*   **Destination:** 
    *   Docs: `src/pages/v4/sdk` and `src/pages/v4/shared`
    *   Sidebar JSON: `scripts/api-refs-sidebar.json`
*   **Source Paths in Repo:**
    *   Docs: `devex/build/api-references/`
    *   Sidebar: `devex/build/api-refs-sidebar.json`
*   **Logic:** Cleans the destination directories before copying to ensure a fresh state.

### 2. Sanitization (`devex:eds-sanitize`)
**Scripts:** `scripts/renameFiles.js` & `scripts/normalizeLinks.js`

*   **Function:** Prepares the imported files for the EDS environment.
*   **`renameFiles.js`**:
    *   Renames all files and directories in `src/pages/v4` to **kebab-case** (lowercase with hyphens), which is required for EDS URLs.
    *   Updates internal links within Markdown files to reflect these name changes.
    *   Updates paths in `scripts/api-refs-sidebar.json` to match the new filenames.
    *   *Note:* Uses `scripts/scriptUtils.js` for shared logic.
*   **`normalizeLinks.js`**:
    *   Ensures all internal links explicitly include the `.md` extension or point to `index.md` where appropriate (e.g., `[Link](folder/)` -> `[Link](folder/index.md)`).

### 3. Sidebar Generation (`devex:generate-sidebar`)
**Script:** `scripts/update-config.js`

*   **Function:** Updates the main site navigation file (`src/pages/config.md`) with the new API reference structure.
*   **Dependencies:** Uses `scripts/generate-sidebar.js` to parse `scripts/api-refs-sidebar.json` and convert it into a Markdown list format.
*   **Logic:**
    *   Reads `scripts/api-refs-sidebar.json`.
    *   Generates the Markdown list hierarchy.
    *   Backs up `src/pages/config.md` to `src/pages/config.md.bak`.
    *   Replaces the section starting from `API References` in `config.md` with the newly generated content.

## Helper Files

*   **`scripts/scriptUtils.js`**: Contains utility functions for file traversing, link replacing, and path manipulation used by the sanitization scripts.
*   **`scripts/api-refs-sidebar.json`**: The source of truth for the API sidebar structure, copied from the upstream repo and modified in-place during sanitization.

## Prerequisites

*   The `project-marvel_cc-everywhere` repository should be cloned as a sibling to this repository.
*   You must have run the documentation generation script in the source repo first (e.g., `npm run typedoc:devex` in `project-marvel_cc-everywhere`).
