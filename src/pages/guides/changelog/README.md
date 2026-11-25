# Changelog Component Documentation

This document explains the architecture, file schemas, authoring guidelines, and configuration options for the **Changelog Component**.

---

## 1. Architecture Overview

The Changelog system decouples presentation from data using three key files:

```
├── changelog-comp.md          # 1. Component Page (Markdown page hosting the <Changelog /> block)
├── changelog-data.yaml        # 2. Release Content (Source of truth for releases & change items)
└── changelog-settings.yaml    # 3. Global Settings (Archive rules, kind labels, filter config)
```

```
┌─────────────────────────┐     ┌───────────────────────────┐
│  changelog-data.yaml    │     │  changelog-settings.yaml  │
│ (Releases, Dates, Types)│     │(Archive, Filters,Metadata)│
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
              │  • Dynamic Year/Month filter│
              │  • Type pills & Module menu │
              │  • Real-time search & cards │
              │  • Collapsible archive      │
              └─────────────────────────────┘
```

---

## 2. `changelog-data.yaml` (Release Content)

`changelog-data.yaml` is the primary source of truth for all release notes.

### Mandatory vs. Optional Fields

> [!IMPORTANT]
> **The mandatory fields are `version`, `date`, `type`, and `text`.**
> All other fields (`modules`, `code`, `language`, `action`, `kind`, `title`, `summary`, `open`, `breaking`) are optional and can be omitted.

| Field | Level | Type | Mandatory? | Description |
| :--- | :--- | :--- | :---: | :--- |
| **`version`** | Release | string | **YES** | Version identifier (e.g. `2.4.0`, `1.0.0`). Used for release headers and URL anchor IDs. |
| **`date`** | Release | string (`YYYY-MM-DD`) | **YES** | Release date (e.g. `2026-10-21`). Powers chronological sorting, Year and Month filters. |
| **`changes`** | Release | array | **YES** | List of change items under this release. |
| **`type`** | Change | string | **YES** | Category of change: `new` \| `improved` \| `fixed` \| `docs` \| `breaking` \| `deprecated` \| `removed`. Powers change badges and Type filter pills. |
| **`text`** | Change | string (Markdown) | **YES** | Description of the change. Supports Markdown links, bold, italics, and sub-bullets. |
| `kind` | Release | string | No | Optional badge tag next to version (e.g. `release`, `docs`, `maintenance`). Default: `release`. |
| `title` | Release | string | No | Optional headline title for major milestones (e.g. `"Summer 2026 Release"`). |
| `summary` | Release | string | No | One-line summary (used for quick announcements or legacy archived releases). |
| `breaking`| Release | boolean | No | `true` flags the release as containing breaking changes. |
| `modules` | Change | array of strings | No | Feature or module tags (e.g. `[auth]`, `[dashboard]`). **Completely optional.** |
| `code` | Change | string (multiline `\|`) | No | Code snippet accompanying the change. |
| `language`| Change | string | No | Language for syntax highlighting (e.g. `js`, `html`, `json`). Default: `js`. |
| `action` | Change | string | No | Action required by users or developers (e.g. migration steps for breaking changes). |
| `open` | Change | boolean | No | `true` displays an orange *(Still open)* known issue pill. |

---

### Minimal Example (Mandatory Fields Only)

When authoring a release with only the required fields, your YAML is simple and clean:

```yaml
releases:
  - version: 1.2.0
    date: 2026-10-21
    changes:
      - type: new
        text: "Added dark mode support across the main user dashboard."
      - type: fixed
        text: "Resolved an issue where session tokens expired prematurely during uploads."
```

---

### Comprehensive Example (With Optional Fields)

```yaml
releases:
  - version: 2.0.0
    date: 2026-10-08
    kind: release
    title: "Major Platform Update"
    changes:
      - type: new
        modules: [auth]
        text: "Introduced OAuth 2.0 single sign-on integration."

      - type: fixed
        modules: [api]
        text: "Performance optimizations and connection retry fixes."
        language: js
        code: |
          import { initClient } from '@example/library';

          const client = await initClient({
            apiKey: '<API_KEY>',
            environment: 'production',
          });

      - type: breaking
        text: "Removed deprecated `v1` endpoint methods."
        action: "Update all API requests to use the `/v2` endpoints."
```

---

### Multi-line Code Authoring Rule

When adding multi-line code via `code: |`, YAML enforces strict indentation rules:

1. **No space before the colon**:
   - ❌ `code : |`
   - ✅ `code: |`

2. **Indentation must be strictly deeper than `code:`**:
   - If `code:` has 8 spaces of indentation, the code lines must start at **10 spaces** (2 spaces deeper).
   - If any line drops below the base indentation level, YAML stops reading the code block and throws an `Invalid YAML mapping` error.

```yaml
      - type: fixed
        text: "Code example illustrating initialization."
        language: js
        code: |
          const app = await initializeApp({
            apiKey: '<API_KEY>',
            timeout: 5000,
          });
```

---

## 3. How Modules Work (Non-Mandatory)

> [!TIP]
> **Modules are 100% optional.**
> If your project does not need feature or product module tagging, simply omit `modules` from `changelog-data.yaml`.

- **When `modules` is omitted**:
  - No module tags appear on the cards.
  - The **Module filter dropdown is automatically hidden** from the UI.
  - The component functions seamlessly with Year, Month, Type pills, and Search.
- **When `modules` is provided**:
  - Module badges are rendered on the respective change items.
  - The **Module** filter dropdown automatically appears in the filter bar.

---

## 4. How Year & Month Filters Work

> [!IMPORTANT]
> **Year and Month filters are dynamically generated from the mandatory `date` (`YYYY-MM-DD`).**

- **Automatic Extraction**:
  - The component parses `date: 2026-10-21` and extracts `Year: 2026` and `Month: October`.
  - Available options in the Year and Month dropdowns are derived directly from the content.
- **Zero Manual Configuration**:
  - Authors do **not** need to maintain year or month lists in `changelog-settings.yaml`. When a release with a new year or month is published, it automatically appears in the filters.
- **Why `version` and `date` are mandatory**:
  - `date` enables chronological sorting (newest first), Year and Month filtering, and the Archive cutoff.
  - `version` generates clean, unique DOM IDs for direct URL anchor linking (e.g. `#1-2-0`).

---

## 5. `changelog-settings.yaml` (Global Settings)

`changelog-settings.yaml` defines global configuration such as feed details, category labels, archive thresholds, and optional filters.

```yaml
# Page metadata and RSS feed URL
page:
  title: "Changelog"
  description: "Product release notes with the newest release first."
  url: "https://example.com/feed.xml"

# Friendly labels for release kinds (optional badges next to version)
kinds:
  release: "Product release"
  docs: "Documentation"
  maintenance: "Maintenance"

# Collapsible archive section for older or legacy versions
archive:
  enabled: true
  label: "Older releases"
  description: "Previously released versions"
  groups:
    - id: "legacy"
      label: "v1.x Legacy"
      applies_to:
        before_year: 2024
      hint: "Releases before 2024."

# Filter controls configuration (Year and Month are enabled automatically)
filters:
  - id: type
    label: "Type of change"
    control: pills
    allLabel: "All types"
    options:
      - id: breaking
        label: "Breaking"
        color: "#D31510"
      - id: new
        label: "New"
        color: "#0265DC"
      - id: improved
        label: "Improved"
        color: "#0265DC"
      - id: fixed
        label: "Fixed"
        color: "#0A7C52"
      - id: docs
        label: "Docs"
        color: "#6E6E6E"
```

---

## 6. `changelog-comp.md` (The `<Changelog />` Block)

In Edge Delivery Services, the page that displays the changelog is authored using a single component block tag:

```markdown
<Changelog metadata="./changelog-settings.yaml" content="./changelog-data.yaml" />
```

### Attributes:
- **`metadata`**: Path to the configuration file (`changelog-settings.yaml`).
- **`content`**: Path to the release content file (`changelog-data.yaml`).

### Component Features:
1. **Dynamic Year & Month Filtering**: Automatically extracted from dates in content.
2. **Type Pills**: Color-coded filters for `new`, `fixed`, `improved`, `breaking`, etc.
3. **Optional Module Dropdown**: Only appears if modules are defined in content.
4. **Instant Client-side Search**: Searches across versions, dates, change text, and code snippets.
5. **Timeline Grouping**: Releases are organized chronologically by Year and Month.
6. **Code Highlighting**: Syntax highlights code snippets automatically.
7. **Archive Accordion**: Keeps recent releases front-and-center while neatly tucking older versions into a collapsible section.
