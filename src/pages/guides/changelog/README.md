# Changelog System Documentation

This document explains the architecture, file schemas, and authoring rules for the Adobe Express Embed SDK Changelog system powered by Adobe Edge Delivery Services (Franklin).

---

## 1. Architecture Overview

The Changelog system consists of three key pieces:

```
src/pages/guides/changelog/
├── changelog-comp.md          # 1. Component Page (Hosts the <Changelog /> block)
├── changelog-data.yaml        # 2. Release Content (Source of truth for releases & changes)
└── changelog-settings.yaml    # 3. Settings & Filters (Archive, kinds, and UI configuration)
```

```
┌─────────────────────────┐     ┌───────────────────────────┐
│  changelog-data.yaml    │     │  changelog-settings.yaml  │
│  (Releases, Dates, Text)│     │  (Archive, Filters, Kinds)│
└────────────┬────────────┘     └─────────────┬─────────────┘
             │                                │
             └───────────────┬────────────────┘
                             ▼
              ┌─────────────────────────────┐
              │      changelog-comp.md      │
              │ <Changelog metadata="..."   │
              │            content="..." /> │
              └──────────────┬──────────────┘
                             ▼
              ┌─────────────────────────────┐
              │    changelog.js Decorator   │
              │  (Year/Month/Type Filters,  │
              │   Search, Release Cards)    │
              └─────────────────────────────┘
```

---

## 2. `changelog-data.yaml` (Release Content)

`changelog-data.yaml` is the primary source of truth for all release notes.

### Mandatory vs. Optional Fields

> [!IMPORTANT]
> **The mandatory fields are `version`, `date`, `type`, and `text`.**
> All other fields (`modules`, `code`, `language`, `action`, `kind`, `title`, `summary`, `open`) are optional and can be omitted if not needed.

| Field | Level | Type | Mandatory? | Description |
| :--- | :--- | :--- | :---: | :--- |
| **`version`** | Release | string | **YES** | SDK version string (e.g. `4.58.15`). |
| **`date`** | Release | string (`YYYY-MM-DD`) | **YES** | Release date (e.g. `2026-10-21`). Powers timeline sorting, Year & Month filtering. |
| **`changes`** | Release | array | **YES** | List of change items under this release. |
| **`type`** | Change | string | **YES** | Type of change: `new` \| `improved` \| `fixed` \| `docs` \| `breaking` \| `deprecated` \| `removed`. Powers the type badge and type filter pills. |
| **`text`** | Change | string (Markdown) | **YES** | The description of what changed. Supports Markdown links, formatting, and sub-bullets. |
| `kind` | Release | string | No | `sdk` (default) \| `docs` \| `maintenance`. Shows a tag badge next to the version. |
| `title` | Release | string | No | Optional major headline for the release (e.g. `"Design Viewer"`). |
| `summary` | Release | string | No | One-line summary (used for maintenance or archived pre-v4 releases). |
| `breaking`| Release | boolean | No | `true` if the release contains breaking changes. |
| `modules` | Change | array of strings | No | Associated SDK modules (e.g. `[ede]`, `[core]`). **Completely optional.** |
| `code` | Change | string (multiline `\|`) | No | Code sample accompanying the change. |
| `language`| Change | string | No | Language for syntax highlighting (e.g. `js`, `html`). Default: `js`. |
| `action` | Change | string | No | Action required by partners/hosts (e.g. for breaking or deprecation items). |
| `open` | Change | boolean | No | `true` displays an orange *(Still open)* known issue pill. |

---

### Minimal Example (Mandatory Fields Only)

You **only** need to provide `version`, `date`, `type`, and `text`. Everything else is optional:

```yaml
releases:
  - version: 4.58.15
    date: 2026-10-21
    changes:
      - type: new
        text: "Added support for guided design creation in EDE."
      - type: fixed
        text: "Resolved an issue where bleed was not displayed in the print editor preview."
```

---

### Full Example (With Optional Fields)

```yaml
releases:
  - version: 4.57.22
    date: 2026-10-08
    kind: sdk
    changes:
      - type: new
        modules: [editimage]
        text: "[`EditFurtherIntent.ERASE`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-intent.md) starting intent for Edit Image."

      - type: fixed
        modules: [core]
        text: "Various performance improvements and initialization bug fixes."
        language: js
        code: |
          (async () => {
            const ccEverywhere = await window.CCEverywhere.initialize({
              clientId: <CLIENT_ID>,
              appName: <APP_NAME>,
            });
          })();

      - type: breaking
        text: "Deprecated legacy parameter `hostOption` in initialization."
        action: "Migrate host configuration to `hostInfo`."
```

---

### Multi-line Code Authoring Rule

When adding `code: |`, YAML requires strict indentation:
- No space before the colon (`code: |`, not `code : |`).
- **Every line of the code block must be indented at least 2 spaces deeper than the `code:` line.**
- If `code:` has 8 spaces of indentation, the code lines must start at **10 spaces**.

```yaml
      - type: fixed
        text: "Initialization code sample."
        language: js
        code: |
          await import(CDN_URL);
          const ccEverywhere = await window.CCEverywhere.initialize(
            initializeParams, configParams
          );
```

---

## 3. How Modules Work (Non-Mandatory)

> [!IMPORTANT]
> **You do NOT need to implement or specify `modules`.**
> If your releases or change items do not need module categorization, simply leave `modules` out of `changelog-data.yaml`.

- If **no `modules`** are defined in `changelog-data.yaml`:
  - No module badges appear on the release cards.
  - The **Module filter dropdown is automatically hidden** from the UI.
  - The component continues to work cleanly with Year, Month, Type, and Search filters.
- If **`modules` are provided**:
  - The module badges are rendered on the respective change item.
  - The **Module** filter dropdown appears automatically, populated with the defined modules.

---

## 4. How Year & Month Filters Work

> [!IMPORTANT]
> **Year and Month are automatically derived from the mandatory `date` (`YYYY-MM-DD`).**

- **Automatic Extraction**:
  - The component parses `date: 2026-10-21` and extracts `year: "2026"` and `month: "October"`.
  - The **Year** and **Month** filters in the filter bar are populated dynamically from the content.
- **Zero Configuration Needed**:
  - Authors do **not** need to maintain year or month lists in `changelog-settings.yaml`. As soon as a release with a new year or month is added to `changelog-data.yaml`, it automatically appears in the filter controls.
- **Why `version` and `date` are mandatory**:
  - `date` enables chronological sorting (newest first), Year/Month filtering, and Archive grouping.
  - `version` creates unique anchor IDs for direct URL linking (e.g. `#4-58-15`).

---

## 5. `changelog-settings.yaml` (Configuration)

`changelog-settings.yaml` contains global metadata, archive section rules, kind labels, and filter definitions.

### Key Sections:

1. **`page`**:
   Sets the feed URL for RSS syndication.
   ```yaml
   page:
     title: "Changelog"
     description: "Release notes for the Adobe Express Embed SDK, with the newest release first."
     url: "https://raw.githubusercontent.com/AdobeDocs/cc-everywhere/refs/heads/main/src/pages/feed.xml"
   ```

2. **`kinds`**:
   Maps release `kind` values to human-friendly badge labels:
   ```yaml
   kinds:
     sdk: "SDK release"
     docs: "Docs update"
     maintenance: "Maintenance"
   ```

3. **`archive`**:
   Configures the collapsible archive accordion for older versions (e.g. pre-v4 releases):
   ```yaml
   archive:
     enabled: true
     label: "Older releases"
     description: "Previously released versions"
     groups:
       - id: "pre-2024"
         label: "SDK v1–v3"
         applies_to:
           before_year: 2024
         hint: "Releases before v4 aren't tagged by module or type."
   ```

4. **`filters`**:
   Controls which filter dropdowns / pills are displayed:
   - `id: module`: Optional module dropdown.
   - `id: type`: Change type pills (Breaking, New, Fixed, Improved, Docs).
   - *(Year and Month are enabled by default automatically).*

---

## 6. `changelog-comp.md` (The `<Changelog />` Component)

`changelog-comp.md` is the Markdown page authored for Edge Delivery Services. It contains **one single component tag**:

```markdown
<Changelog metadata="./changelog-settings.yaml" content="./changelog-data.yaml" />
```

### Attributes:
- **`metadata`**: Relative or absolute path to the settings file (`changelog-settings.yaml`).
- **`content`**: Relative or absolute path to the data file (`changelog-data.yaml`).

### How the Decorator Works:
1. `decorate(block)` reads `data-metadata` and `data-content`.
2. It fetches and parses both YAML files asynchronously in the browser.
3. It extracts years and months directly from `date` fields.
4. It builds the interactive Spectrum UI:
   - Filter bar (Year, Month, Type pills, Module dropdown if present)
   - Real-time search input
   - Release cards grouped by Year and Month
   - Collapsible Archive accordion for historical releases
   - Code snippet syntax highlighting (Prism.js)
   - RSS feed subscription link
