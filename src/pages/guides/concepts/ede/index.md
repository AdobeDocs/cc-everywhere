---
keywords:
  - Adobe Express
  - Embed SDK
  - Embedded Design Editor
  - EDE
  - Create Design
  - Edit Design
  - Focused workflows
  - Design creation
  - Experience variant
title: Embedded Design Editor
description: Understand the Embedded Design Editor (EDE)—Adobe's configurable, focused design creation and editing experience embedded through the Embed SDK.
contributors:
  - https://github.com/undavide
---

# Embedded Design Editor

The **Embedded Design Editor (EDE)** is Adobe's architecture for delivering purpose-built creation experiences inside your application. Instead of embedding the full Adobe Express editor and hiding the parts a user doesn't need, EDE gives you a **focused, configurable surface** built around one workflow—creating a print-ready business card, remixing a marketing template, producing a branded document—while still drawing on Adobe's creative platform and services.

TODO: Add Screenshot An EDE-powered focused editor embedded in a partner application: a template/content panel on the left, a design canvas on the right.

The shift EDE represents is from **bespoke integrations toward a shared, scalable platform**. Historically, each unique partner experience meant a custom build on top of the full editor. EDE separates the underlying creative capabilities from the experience presented to end users, so the same platform can power very different user journeys through **configuration** rather than duplicated engineering. As a developer, you work by **orchestrating a workflow**—choosing how users enter it, what content they start from, and how finished assets come back to you—not by customizing an editor.

> **A note on naming.** You'll see the prefix `FDE` (for _Focused Design Editor_, an earlier name for this feature) in some SDK type names such as `FDECreateDesignAppConfig`. It refers to the same Embedded Design Editor described here.

## How EDE fits into the Embed SDK

EDE experiences run as **modules**—experiences you launch from the `module` object returned by the SDK's [`initialize()`](../../quickstart/index.md) call. There are two entry points:

- [`module.createDesign()`](./create-design.md) — start a **new** design from a template or a blank canvas.
- [`module.editDesign()`](./edit-design.md) — open an **existing** document for editing.

```javascript
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  { locale: "en-US" },
);

module.createDesign(/* ... */); // start a new design
module.editDesign(/* ... */); // edit an existing one
```

Getting an API key and calling `initialize()` are common to every Embed SDK integration—see the [Quickstart](../../quickstart/index.md) and [Get Credentials](../../credential/index.md). This guide focuses on what's specific to EDE.

## The two workflows at a glance

| Workflow                            | Entry point             | Users start from                                            | Use it to                                                 |
| ----------------------------------- | ----------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| [Create Design](./create-design.md) | `module.createDesign()` | a template collection or a blank canvas                     | let users browse and pick a template, then design from it |
| [Edit Design](./edit-design.md)     | `module.editDesign()`   | an existing document (`docId`, `templateId`, or an `asset`) | reopen and refine a design, with print/output controls    |

The two are covered on their own pages. The rest of this overview describes the concepts they **share**: experience variants and the standard configuration objects.

## Experience variants

A **variant** tailors the whole experience to a class of workflow. You set it through the `variant` property on a workflow's `appConfig`, and it determines **which creative tools the editor surfaces**—text, shapes, media, elements, templates, and so on—so the UI matches the task instead of exposing everything Express can do. Variants are how you build _experience-focused_ UIs.

| `variant`   | Experience                                                                                                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"default"` | A general-purpose focused editor.                                                                                                                                                 |
| `"print"`   | A print-oriented experience: a print-focused toolset with print-friendly defaults (for example, bleed and crop marks enabled by default), tuned for producing print-ready output. |

The set of variants **will grow** as new focused workflows are added. Treat the SDK reference as the authoritative, current list. Set the variant the same way in either workflow:

```javascript
const appConfig = {
  variant: "print",
  // ...workflow-specific options — see Create Design / Edit Design
};
```

## Shared configuration

Both EDE workflows accept the **same standard Embed SDK configuration objects** that every module uses. They are documented once for the whole SDK, so this guide doesn't repeat them—it just points to where each is configured:

- **`exportConfig`** — the export/publish options (buttons, file types, output shape). See the [`ExportConfig` reference](../../../v4/shared/src/types/export-config-types/type-aliases/export-config.md).
- **`containerConfig`** — how the SDK iframe is presented (fill, inline, or modal; z-index; title). See the [`ContainerConfig` reference](../../../v4/shared/src/types/container-config-types/type-aliases/container-config.md).
- **`callbacks`** — lifecycle and event callbacks such as `onPublish`, `onError`, and `onCancel`. See the [`Callbacks` reference](../../../v4/shared/src/types/callbacks-types/interfaces/callbacks.md).
- **`appConfig`** — the per-workflow options; the parts unique to each are covered on the [Create Design](./create-design.md) and [Edit Design](./edit-design.md) pages.

> **`onIntentChange` is not operational for EDE workflows today.** It is expected to become relevant in the future—for example, to carry configuration forward as one workflow _tethers_ into another. See [Create Design → Output configuration today](./create-design.md#output-configuration-today) for where this will matter.

## Related

- [Create Design](./create-design.md) — browse a template and design from it
- [Edit Design](./edit-design.md) — open and refine an existing document
- [Template Browser](../template-browser.md) — the content-browsing experience Create Design builds on
- SDK reference: [`FDECreateDesignAppConfig`](../../../v4/shared/src/types/3p/module/app-config-types/interfaces/fde-create-design-app-config.md), [`FDEEditDesignAppConfig`](../../../v4/shared/src/types/3p/module/app-config-types/interfaces/fde-edit-design-app-config.md)
