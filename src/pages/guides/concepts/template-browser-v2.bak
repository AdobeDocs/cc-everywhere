---
keywords:
  - Adobe Express
  - Embed SDK
  - Template Browser
  - Template Browser V2
  - Custom Templates
  - Your Stuff
  - Authenticated users
title: Template Browser V2
description: Template Browser V2
contributors:
  - https://github.com/undavide
---

# Template Browser v2

Welcome to the new Template Browser v2 experience in the Adobe Express Embed SDK.

Template Browser v2 is a **version-gated upgrade** to the existing [Start From Content](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#startfromcontent) module. It replaces the single-surface browse/preview experience with a **tabbed Template Browser** that surfaces multiple content sources for authenticated end-users: their **Custom Templates** and **Your Stuff** (Recents, Projects, Favorites). Partners on v1 keep working unchanged—v2 is opt-in.

SCREENSHOT NEEDED:
File: ./img/template-browser-v2--overview.png
Source: Figma "Browse & Search Template Module" — the main tabbed home with
Custom Templates selected and a few template tiles visible. Light theme.
Caption: "Template Browser v2 — tabbed home with Custom Templates and Your Stuff."

![Template Browser v2 — tabbed home](./img/template-browser-v2--overview.png)

<InlineAlert slots="header, text" variant="warning" />

#### Authenticated end-users only

Template Browser v2 requires authenticated end-users. Both tabs surface per-user content (your files, your organization's templates), so an unauthenticated user has nothing to show. If your integration serves anonymous users, stay on [Template Browser v1](./template-browser.md) and its public collection browsing until the Express Templates tab ships in a future release.

## What v2 adds to v1

| Capability                                                          | v1                           | v2                                  |
| ------------------------------------------------------------------- | ---------------------------- | ----------------------------------- |
| Public Adobe template collections                                   | ✅ via `contentBrowseConfig` | ⏳ planned (`expressTemplates` tab) |
| Browsing the user's **Custom Templates** (Admin-approved + others)  | —                            | ✅                                  |
| Browsing the user's **Recents, Projects, Favorites** ("Your Stuff") | —                            | ✅                                  |
| Brand-safe reuse via **Quick Replace** on custom templates          | —                            | ✅                                  |
| Preview mode (`launchMode: 'preview'`)                              | ✅                           | — (v1 only)                         |
| Tabbed surface                                                      | —                            | ✅                                  |
| Requires authenticated end-user                                     | —                            | ✅                                  |

## How to enable v2

Set the new `version` property to `"2"` on the [`StartFromContentAppConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/start-from-content-app-config.md) object. With no further configuration, partners get both tabs in their default order with the standard Create button.

```js
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {},
);

module.startFromContent({
  version: "2", // 👈 Enable the new experience
});
```

That's it for the minimal opt-in. Everything else discussed below is optional customization.

## The two tabs

v2 ships with two tabs at launch.

### Custom Templates

The **Custom Templates** tab surfaces the templates available to the authenticated user, with **Admin-approved** organizational templates shown first. Selecting **View all** exposes both the Admin-approved set and the wider set of custom templates available to that user.

When a user selects a custom template they don't own, they land in the Full Editor in **Quick Replace** mode, with the template's **locked elements preserved**—the brand-safe reuse path for Enterprise integrations.

SCREENSHOT NEEDED:
File: ./img/template-browser-v2--custom-templates.png
Source: Figma — the Custom Templates tab with Admin-approved row visible and
a "View all" affordance. Light theme.
Caption: "Custom Templates tab — Admin-approved row in front, View all for the full set."

![Custom Templates tab](./img/template-browser-v2--custom-templates.png)

### Your Stuff

The **Your Stuff** tab surfaces the user's own files, projects, and favorites. Selecting a file opens it in the Full Editor.

Defaults in this release:

- **View**: Recent (with the ability to filter to Yours or Shared with you).
- **Filter**: Express files (filters for Images, Video, and Audio are disabled in this release).
- **Sort**: Last opened, adjustable.
- **Layout**: Tile view, with a list view available.

SCREENSHOT NEEDED:
File: ./img/template-browser-v2--your-stuff.png
Source: Figma — the Your Stuff tab with Recent files, the Create button visible,
and the filter / sort controls. Light theme.
Caption: "Your Stuff tab — the user's Recents, Projects, and Favorites."

![Your Stuff tab](./img/template-browser-v2--your-stuff.png)

The Your Stuff tab also exposes a **Create** button for starting a new design. By default it opens the full Express Create menu (standard sizes, suggested sizes, search, custom size); partners can skip the menu and open directly into a pre-sized canvas via [`createConfig`](#configuring-the-create-button).

## Configuring `templatesHomeConfig`

All v2 customization lives on a new `templatesHomeConfig` object on `StartFromContentAppConfig`. It has two optional fields:

```ts
interface TemplatesHomeConfig {
  tabs?: TemplatesHomeTab[]; // tabs to show, in display order
  createConfig?: CreateConfig; // Create button behavior (Your Stuff tab)
}

type TemplatesHomeTab = "customTemplates" | "yourStuff";

interface CreateConfig {
  defaultCanvasSize?: { width: number; height: number }; // pixels
}
```

### Customizing tab order

The `tabs` array controls which tabs appear and the order in which they're displayed. The array's order is the tab display order, and the first tab in the array is selected on load.

```js
// Default: both tabs, Custom Templates selected on load.
module.startFromContent({ version: "2" });

// Your Stuff first and selected on load.
module.startFromContent({
  version: "2",
  templatesHomeConfig: {
    tabs: ["yourStuff", "customTemplates"],
  },
});

// Single-tab mode: Custom Templates only.
module.startFromContent({
  version: "2",
  templatesHomeConfig: {
    tabs: ["customTemplates"],
  },
});
```

### Configuring the Create button

By default the Create button on the Your Stuff tab opens the full Express Create menu (standard sizes, suggested sizes, search, custom size). Pass `createConfig.defaultCanvasSize` to skip the menu and open a blank canvas directly at the given size.

```js
module.startFromContent({
  version: "2",
  templatesHomeConfig: {
    createConfig: {
      defaultCanvasSize: { width: 1080, height: 1080 }, // pixels
    },
  },
});
```

Omitting `createConfig` (or omitting `defaultCanvasSize` within it) keeps the standard Express Create menu.

## Validation rules

The SDK validates the v2 configuration at launch time and rejects combinations that mix v1 and v2 surfaces.

| Rule                                                                         | Error                                              |
| ---------------------------------------------------------------------------- | -------------------------------------------------- |
| `version: "2"` together with `contentBrowseConfig.launchMode: 'preview'`     | Preview mode is v1 only.                           |
| `version` absent or `"1"` together with `templatesHomeConfig`                | `templatesHomeConfig` is v2 only.                  |
| `tabs` array contains values other than `'customTemplates'` or `'yourStuff'` | Only those two values are allowed in this release. |
| `defaultCanvasSize.width` or `height` ≤ 0                                    | Dimensions must be positive.                       |

## Behavior matrix

How `version` and `templatesHomeConfig` interact:

| `version`      | `templatesHomeConfig`                            | Result                                                                            |
| -------------- | ------------------------------------------------ | --------------------------------------------------------------------------------- |
| absent / `"1"` | ignored                                          | v1: `contentBrowseConfig` drives browse or preview (current behavior).            |
| `"2"`          | absent                                           | v2: default tabs `['customTemplates', 'yourStuff']`. First tab selected.          |
| `"2"`          | `{}`                                             | v2: same as above — all defaults apply.                                           |
| `"2"`          | `{ tabs: ['yourStuff', 'customTemplates'] }`     | v2: Your Stuff first and selected on load.                                        |
| `"2"`          | `{ createConfig: { defaultCanvasSize: {...} } }` | v2: default tabs; Create button skips the size menu and opens a pre-sized canvas. |

## Differences from v1

There is no in-place migration from v1 to v2: v2 is a different configuration field selected by a different top-level flag. Partners on v1 take no action. Partners adopting v2 are making a deliberate UX decision—moving from public-collection browsing to user-authenticated tabs.

- `contentBrowseConfig` is **ignored** when `version: "2"` is set. It will be reused for public templates in a future release.
- **Collection IDs (URNs)** and **`shortcutPillTerms`**, **`searchQuery`**, **`hideSearchBar`**, **`hideFilters`**, **`headerText`** are v1 concepts that do not apply to v2 in this release.
- **Preview mode** (`launchMode: 'preview'`) is v1-only.
- **Authentication** is required for v2 and not for v1.

## Related Resources

- [Template Browser (v1)](./template-browser.md) — the original Start From Content surface for public Adobe collections.
- [Start From Content module API](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#startfromcontent)
- [`StartFromContentAppConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/start-from-content-app-config.md)
