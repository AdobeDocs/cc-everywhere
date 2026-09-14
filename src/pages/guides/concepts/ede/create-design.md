---
keywords:
  - Adobe Express
  - Embed SDK
  - Embedded Design Editor
  - EDE
  - Create Design
  - createDesign
  - Template Browser
  - Experience variant
title: Create Design
description: Understand the EDE Create Design workflow—browse a curated template collection and design from it in a focused editor.
contributors:
  - https://github.com/undavide
---

# Create Design

The **Create Design** workflow lets users start something new: they browse a curated set of templates (or begin from a blank canvas), pick one, and design from it in a focused editor. It pairs a **Template Browser** with a **Design Editor**—choose a template, then create or *remix* it into a finished asset.

TODO: Add Screenshot The Create Design template browser (curated templates in a grid), and the focused editor after a template is selected.

## How Create Design works

Launch the workflow from the [`module`](./index.md#how-ede-fits-into-the-embed-sdk) object:

```typescript
module.createDesign(
  appConfig?: FDECreateDesignAppConfig,
  exportConfig?: ExportConfig,
  containerConfig?: ContainerConfig,
): void;
```

All parameters are optional and **positional**—to skip one, pass `undefined` in its place. `exportConfig`, `containerConfig`, and the shared `callbacks` are covered in [Shared configuration](./index.md#shared-configuration); the rest of this page is about what's specific to Create Design, configured through `appConfig` ([`FDECreateDesignAppConfig`](../../../v4/shared/src/types/3p/module/app-config-types/interfaces/fde-create-design-app-config.md)).

## Browsing and choosing content

The heart of Create Design is `contentBrowseConfig`—it defines the **Template Browser**: which collection users browse, how templates are filtered, and whether they can start from scratch.

```javascript
const appConfig = {
  contentBrowseConfig: {
    // The curated collection to browse
    categoriesConfig: [
      { category: "templates", collectionId: "urn:aaid:sc:VA6C2:..." },
    ],
    // Offer a "start from a blank canvas" option
    showCreateNew: true,
    // Title shown above the browser
    headerText: "Choose a template",
  },
  variant: "print",
  allowedFileTypes: ["application/pdf", "image/jpeg", "image/png"],
};

module.createDesign(appConfig, exportConfig, containerConfig);
```

Content browsing is a capability in its own right, with its own set of collection, filtering, and layout options. For the full picture, see the [Template Browser](../template-browser.md) concept guide—Create Design surfaces that same experience as the entry point to designing.

## Tailoring the experience with variants

Create Design honors the shared `variant` option (see [Experience variants](./index.md#experience-variants)). Setting `variant: "print"`, for example, gives users a print-oriented toolset and enables print-friendly defaults automatically, so the experience matches a print workflow end to end.

## Output configuration today

There's an asymmetry between the two workflows worth understanding. [Edit Design](./edit-design.md) lets you pass explicit **output controls**—for print, that includes PDF settings such as CMYK color mode and an ICC color profile (its `pdfPrintConfig`). **Create Design does not accept those output configs yet.**

For the `print` variant, Create Design falls back to sensible print defaults—CMYK color with a standard coated ICC profile (for example, `Coated GRACoL 2006 (ISO 12647-2:2004)`)—so print output is correct out of the box even though you can't set it explicitly here.

This gap is expected to close in the future through the `onIntentChange` callback: as a user moves from *browsing* a template into *editing* it, `onIntentChange` will let you pass configuration—including output settings—into that next step. Until then, if you need precise output control at creation time, plan around these defaults, or route users into [Edit Design](./edit-design.md), where the output controls are available today.

## Handling the result

When the user finishes and exports, the shared `onPublish` callback fires with the exported asset and its metadata; return a publish status to confirm or deny. See [Shared configuration](./index.md#shared-configuration).

## Related

- [Edit Design](./edit-design.md) — the companion workflow, with output controls
- [Embedded Design Editor](./index.md) — the shared concepts and configuration
- [Template Browser](../template-browser.md) — the content-browsing experience Create Design builds on
- SDK reference: [`FDECreateDesignAppConfig`](../../../v4/shared/src/types/3p/module/app-config-types/interfaces/fde-create-design-app-config.md)
