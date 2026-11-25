# Changelog Component — Complete Developer & Author Guide

This guide provides a comprehensive reference for authoring, configuring, and maintaining the **Changelog Component** in Adobe Edge Delivery Services (Franklin / Devsite).

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Quick Reference: Mandatory vs. Optional Fields](#2-quick-reference-mandatory-vs-optional-fields)
3. [Step-by-Step: Adding a New Release](#3-step-by-step-adding-a-new-release)
4. [`changelog-data.yaml` Schema & Field Reference](#4-changelog-datayaml-schema--field-reference)
   - [Release-Level Fields](#release-level-fields)
   - [Change-Level Fields](#change-level-fields)
   - [Change Types & Badges](#change-types--badges)
5. [Key Feature Rules & Deep Dives](#5-key-feature-rules--deep-dives)
   - [Rule 1: The 4 Mandatory Fields](#rule-1-the-4-mandatory-fields)
   - [Rule 2: How Modules Work (100% Optional)](#rule-2-how-modules-work-100-optional)
   - [Rule 3: Automatic Year & Month Filtering](#rule-3-automatic-year--month-filtering)
   - [Rule 4: Multi-line Code Formatting](#rule-4-multi-line-code-formatting)
6. [`changelog-settings.yaml` Configuration Reference](#6-changelog-settingsyaml-configuration-reference)
7. [`changelog-comp.md` Component Page Authoring](#7-changelog-compmd-component-page-authoring)
8. [Copy-Paste Templates](#8-copy-paste-templates)
   - [Minimal Template (Only Mandatory Fields)](#minimal-template-only-mandatory-fields)
   - [Full-Featured Template](#full-featured-template)

---

## 1. Architecture Overview

The Changelog system completely decouples **data authoring** from **UI presentation** across three files:

```
├── changelog.md          # 1. Component Page (Markdown host for the <Changelog /> block)
├── changelog-data.yaml        # 2. Release Content (Source of truth for releases & change items)
└── changelog-settings.yaml    # 3. Global Settings (Archive rules, kind labels, filter config)
```

```
┌────────────────────────────────┐     ┌────────────────────────────────┐
│      changelog-data.yaml       │     │    changelog-settings.yaml     │
│  • Releases (version, date)    │     │  • Archive rules & thresholds  │
│  • Changes (type, text, code)  │     │  • Release kind badge labels   │
└───────────────┬────────────────┘     └───────────────┬────────────────┘
                │                                      │
                └──────────────────┬───────────────────┘
                                   ▼
                   ┌──────────────────────────────┐
                   │      changelog.md       │
                   │ <Changelog metadata="..."    │
                   │            content="..." />  │
                   └───────────────┬──────────────┘
                                   ▼
                   ┌──────────────────────────────┐
                   │    changelog.js Decorator    │
                   │  • Dynamic Year & Month tabs │
                   │  • Type pills & Module menu  │
                   │  • Real-time text search     │
                   │  • Collapsible archive group │
                   │  • Code syntax highlighting  │
                   └──────────────────────────────┘
```

---

## 2. Quick Reference: Mandatory vs. Optional Fields

> [!IMPORTANT]
> **Only 4 fields are mandatory in the entire system:**
> 1. `version` (Release level)
> 2. `date` (Release level)
> 3. `type` (Change level)
> 4. `text` (Change level)
> 
> Everything else (`modules`, `code`, `language`, `action`, `kind`, `title`, `summary`, `open`, `breaking`) is completely optional.

| Field | Level | Type | Required? | Purpose |
| :--- | :--- | :--- | :---: | :--- |
| **`version`** | Release | string | **YES** | Version number (e.g. `2.4.0`). Powers release card headers and deep-link anchor IDs. |
| **`date`** | Release | string (`YYYY-MM-DD`) | **YES** | Release date (e.g. `2026-10-21`). Powers chronological sorting, Year and Month filters. |
| **`changes`** | Release | array | **YES** | Container list of change items in this release. |
| **`type`** | Change | string | **YES** | Change category: `new` \| `improved` \| `fixed` \| `docs` \| `breaking` \| `deprecated` \| `removed`. |
| **`text`** | Change | string (Markdown) | **YES** | What changed. Supports Markdown links, formatting (`**bold**`, `*italic*`), and sub-bullets. |
| `kind` | Release | string | Optional | Category badge next to version (e.g. `release`, `docs`, `maintenance`). |
| `title` | Release | string | Optional | Headline for major releases (e.g. `"Major Platform Update"`). |
| `summary` | Release | string | Optional | High-level summary line (used for quick notices or legacy archived releases). |
| `breaking`| Release | boolean | Optional | `true` flags the release as containing breaking changes. |
| `modules` | Change | list of strings | Optional | Feature/module IDs (e.g. `[auth]`, `[dashboard]`). **Omit if not using modules.** |
| `code` | Change | string (`\|`) | Optional | Code snippet associated with the change. |
| `language`| Change | string | Optional | Code syntax highlighting language (e.g. `js`, `html`, `json`, `python`). Default: `js`. |
| `action` | Change | string | Optional | Instructions for users/developers (e.g. "What to do" for breaking/deprecation). |
| `open` | Change | boolean | Optional | `true` renders an orange *(Still open)* badge for known issues. |

---

## 3. Step-by-Step: Adding a New Release

To publish a new release note, you only edit **`changelog-data.yaml`**:

1. Open `changelog-data.yaml`.
2. Add a new item at the top of the `releases:` list (newest first).
3. Provide the 4 mandatory fields:
   ```yaml
   releases:
     - version: 1.3.0
       date: 2026-11-25
       changes:
         - type: new
           text: "Added multi-factor authentication (MFA) support."
         - type: fixed
           text: "Resolved an issue where session tokens expired unexpectedly."
   ```
4. Save the file. The changelog UI automatically registers the new version, updates the Year/Month filters, and renders the release cards.

---

## 4. `changelog-data.yaml` Schema & Field Reference

### Release-Level Fields

Each entry under `releases:` represents one published version or milestone:

```yaml
- version: 2.1.0            # [MANDATORY] Version string (e.g. 2.1.0)
  date: 2026-10-15          # [MANDATORY] Release date (YYYY-MM-DD)
  kind: release             # [OPTIONAL] release | docs | maintenance (Default: release)
  title: "Autumn Update"    # [OPTIONAL] Headline shown beside the version
  summary: "Brief summary"  # [OPTIONAL] One-line overview of the release
  breaking: false           # [OPTIONAL] true if release contains breaking changes
  changes:                  # [MANDATORY] List of one or more change items
    - ...
```

### Change-Level Fields

Each entry under `changes:` describes an individual feature, fix, or update:

```yaml
    - type: new                     # [MANDATORY] Change category (see table below)
      text: "Description in markdown" # [MANDATORY] What changed (Markdown supported)
      modules: [auth, dashboard]    # [OPTIONAL] Omit if you do not use modules
      language: js                  # [OPTIONAL] Syntax language (default: js)
      code: |                       # [OPTIONAL] Multiline code snippet (indented +2 spaces)
        const app = initialize();
      action: "Required partner step" # [OPTIONAL] "What to do" guidance
      open: false                   # [OPTIONAL] true for known issues still unresolved
```

### Change Types & Badges

The `type` field powers the color-coded badge and filter pills:

| Value | Badge Label | Spectrum Color | Typical Use Case |
| :--- | :--- | :--- | :--- |
| **`new`** | New | Blue (`#0265DC`) | New features, new methods, new options |
| **`improved`** | Improved | Blue (`#0265DC`) | Performance boosts, UX polish, enhancements |
| **`fixed`** | Fixed | Green (`#0A7C52`) | Bug fixes, stability patches |
| **`breaking`** | Breaking | Red (`#D31510`) | Incompatible API changes requiring user action |
| **`deprecated`**| Deprecated | Orange (`#E68619`) | Features planned for future removal |
| **`removed`** | Removed | Red (`#D31510`) | Deprecated items that have now been deleted |
| **`docs`** | Docs | Gray (`#6E6E6E`) | New guides, tutorials, or reference updates |

---

## 5. Key Feature Rules & Deep Dives

### Rule 1: The 4 Mandatory Fields

To keep authoring fast and eliminate boilerplate, only 4 fields are required:

1. **`version`**: Used as the primary heading on the card and establishes the DOM anchor ID (`#2-1-0`) for direct URL deep-linking.
2. **`date`**: Must be in ISO format (`YYYY-MM-DD`). Powers timeline ordering and dynamically populates Year and Month filters.
3. **`type`**: Assigns the visual badge (New, Fixed, etc.) and enables users to filter changes by category.
4. **`text`**: The explanation of the change. Supports standard Markdown links, code spans, lists, and formatting.

---

### Rule 2: How Modules Work (100% Optional)

> [!TIP]
> **If your project does not need module-based categorization, completely ignore `modules`.**

- **When `modules` is omitted**:
  - No module tags appear on the cards.
  - The **"Module" filter dropdown is automatically hidden** from the UI.
  - The changelog runs cleanly with Year, Month, Type pills, and Search.
- **When `modules` is included**:
  - Module pills appear beside the change description.
  - The **Module** dropdown filter automatically renders in the filter bar.

---

### Rule 3: Automatic Year & Month Filtering

> [!IMPORTANT]
> **Year and Month filters are 100% automatic.**

- Authors **never** need to configure Year or Month lists in `changelog-settings.yaml`.
- The component inspects every `date` (e.g. `2026-10-21`) and automatically derives:
  - `Year`: `"2026"`
  - `Month`: `"October"`
- When a new year or month is introduced in `changelog-data.yaml`, the filter options update immediately without any code or configuration changes.

---

### Rule 4: Multi-line Code Formatting

When attaching code snippets via `code: |`, YAML requires **consistent relative indentation**:

- Every line of the code block must be indented at least **2 spaces deeper** than the `code:` line itself.
- If `code:` is at 8 spaces, all lines of the code block must start at **10 spaces** (or more).
- If any line drops below the base indentation, YAML assumes the block has ended and throws an `Invalid YAML mapping` error.

#### Correct Example:
```yaml
      - type: fixed
        text: "Sample showing client configuration."
        language: js
        code: |
          (async () => {
            const client = await initClient({
              apiKey: '<API_KEY>',
              timeout: 5000,
            });
          })();
```

---

## 6. `changelog-settings.yaml` Configuration Reference

`changelog-settings.yaml` controls global UI options, archive grouping, and category labels:

```yaml
# Page metadata
page:
  title: "Changelog"
  description: "Product release notes with the newest release first."

# Friendly labels for release kinds (optional badges next to version)
kinds:
  release: "Product release"
  docs: "Documentation"
  maintenance: "Maintenance"

# Collapsible archive section for historical releases
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

## 7. `changelog-comp.md` Component Page Authoring

To display the changelog on any Edge Delivery Services page, use a **single component block tag**:

```markdown
<Changelog metadata="./changelog-settings.yaml" content="./changelog-data.yaml" />
```

### Attributes:
- **`metadata`**: Relative or absolute path to `changelog-settings.yaml`.
- **`content`**: Relative or absolute path to `changelog-data.yaml`.

### What the Component Does Automatically:
1. Loads both YAML files asynchronously.
2. Derives dynamic Year and Month filter options.
3. Renders the interactive filter bar (Year, Month, Type pills, optional Module menu).
4. Provides real-time instant search across version, text, and code.
5. Groups releases into Year and Month timeline sections.
6. Automatically highlights code blocks using Prism.js.
7. Renders the collapsible Archive section for older releases.

---

## 8. Copy-Paste Templates

### Minimal Template (Only Mandatory Fields)

Use this when you want quick, lightweight release notes without extra metadata:

```yaml
releases:
  - version: 1.0.0
    date: 2026-11-25
    changes:
      - type: new
        text: "Initial product launch."
      - type: fixed
        text: "Fixed connection timeout during initial setup."
```

### Full-Featured Template

Use this when you want full categorization, code samples, and partner guidance:

```yaml
releases:
  - version: 2.0.0
    date: 2026-11-25
    kind: release
    title: "Major Platform Update"
    changes:
      - type: new
        modules: [auth]
        text: "Added support for OAuth 2.0 Single Sign-On."

      - type: fixed
        modules: [api]
        text: "Optimized response payload size and fixed retry handling."
        language: js
        code: |
          import { initClient } from '@example/library';

          const client = await initClient({
            apiKey: '<API_KEY>',
            environment: 'production',
          });

      - type: breaking
        text: "Deprecated `v1` authentication endpoints."
        action: "Migrate all authentication calls to `/v2/auth`."
```

---

