---
keywords:
  - Adobe Express
  - Embed SDK
  - Workflow Tethering
  - Feature configurations
title: Workflow Tethering
description: Workflow Tethering
contributors:
  - https://github.com/undavide
---

# Workflow Tethering

The Adobe Express Embed SDK allows you to tether multiple modules together to create a more complex workflow.

## Use Cases

You can surface the Embed SDK across multiple entry points in your application. To keep your users engaged, you can chain multiple modules together to create more complex experiences tailored to your audience's needs.

Two of the most common use cases are:

- **Generate Image → Edit Image**: Users generate images from a text prompt and seamlessly transition to image editing to further refine the output.
- **Edit Image → Full Editor**: Users start with an existing image with the goal of performing basic edits and can transition to a Full Editor experience to access advanced features (e.g., adding text, shapes, and more).

You can tether more than two modules together to create even more complex experiences, for example Generate Image → Edit Image → Full Editor.

<InlineAlert variant="info" slots="header, text1" />

Targets

While you can initiate the workflow from any module, the target module must be either **Edit Image** or **Full Editor**. At the moment, only the Generate Image module can tether to Edit Image.

## How to implement Workflow Tethering

There are two crucial elements to any tethering workflow:

- The **Export Configurations**: set the exporting options for a module.
- The **Intent Change Handler**: sets additional configurations for the next modules in the transition.

## Export Configurations

An Export Configuration defines the buttons that are displayed in the module's interface. They are used to download assets, save them back to the application that initiated the workflow, or **trigger the transition to the next module**.

TODO: Add screenshot of export configurations

```javascript
const exportConfig = [
  // Download the asset to the user's device
  {
    id: "download", label: "Download",
    action: { target: "download" }, style: { uiType: "button" },
  },
  // Save the asset back to the application that initiated the workflow
  {
    id: "save", label: "Save",
    action: { target: "publish" }, style: { uiType: "button" },
  },
  // Trigger the transition to a new module
  {
    id: "open-edit-image", label: "Edit image",     // 👈
    action: { target: "image-module" },             // 👈
    style: { uiType: "button" },                    // 👈
  },
  {
    id: "open-full-editor", label: "Full editor",   // 👈
    action: { target: "express" },                  // 👈
    style: { uiType: "button" },                    // 👈
  }
];

// Use the Generate Image workflow to start the tethering workflow
module.createImageFromText(appConfig, exportConfig);
```

<InlineAlert variant="warning" slots="header, text1, text2" />

Default buttons

The `exportConfig` is always an **optional parameter**. If no export configuration is provided, the module will fall back to the default layout options—which usually includes tethering options to the Full Editor.

If you need tighter control over what your users can create—for example, restricting text additions to avoid content moderation—you should always define a custom `exportConfig` that excludes the Full Editor option.

### Export Options explained

The `exportConfig` parameter is an array of [`exportOption`](../../v4/shared/src/types/export-config-types/type-aliases/export-option.md) objects, which can be of four types:

- [`PublishExportOption`](../../v4/shared/src/types/export-config-types/interfaces/publish-export-option.md) - save back to the application that initiated the workflow.
- [`DownloadExportOption`](../../v4/shared/src/types/export-config-types/interfaces/download-export-option.md) - download the asset to the user's device.
- [`EditFurtherExportOption`](../../v4/shared/src/types/export-config-types/interfaces/edit-further-export-option.md) - tether to another module.
- [`ContinueEditingDropdownOption`](../../v4/shared/src/types/export-config-types/interfaces/continue-editing-dropdown-option.md) - tether to another module (dropdown-style buttons).

All `exportOption`s can be either of type [`ButtonStyle`](../../v4/shared/src/types/export-config-types/type-aliases/button-style.md) or [`LinkStyle`](../../v4/shared/src/types/export-config-types/interfaces/link-style.md) (additionally, [`EnabledButtonStyle`](../../v4/shared/src/types/export-config-types/type-aliases/enabled-button-style.md) for `EditFurtherExportOption`). They all have the following properties:

- `id`: string
- `label`: string
- `action`: [`ExportAction`](../../v4/shared/src/types/export-config-types/type-aliases/export-action.md), extended by:
  - [`PublishAction`](../../v4/shared/src/types/export-config-types/interfaces/publish-action.md)
  - [`DownloadAction`](../../v4/shared/src/types/export-config-types/interfaces/download-action.md)
  - [`EditFurtherAction`](../../v4/shared/src/types/export-config-types/interfaces/edit-further-action.md)
  - [`ContinueEditingAction`](../../v4/shared/src/types/export-config-types/type-aliases/continue-editing-action.md)
- `style`: [`Style`](../../v4/shared/src/types/export-config-types/interfaces/style.md)

For the workflow tethering, we're interested in [`EditFurtherExportOption`](../../v4/shared/src/types/export-config-types/interfaces/edit-further-export-option.md) and [`ContinueEditingDropdownOption`](../../v4/shared/src/types/export-config-types/interfaces/continue-editing-dropdown-option.md), which differ as the latter represents export options specifically for dropdown UI components. Their `action` property is either:

- [`EditFurtherExportOption.action`](../../v4/shared/src/types/export-config-types/interfaces/edit-further-action.md):
  - `target`: [`EditFurtherTarget`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-target.md)—either `"express"` or `"image-module"`.
  - `intent?`: [`EditFurtherIntent`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-intent.md)—the kind of experience to preload in the left-hand panel, for example, `"add-text"`, `"add-icons-and-shapes"`, etc.
  - `context?`: [`ExportContext`](../../v4/shared/src/types/export-config-types/type-aliases/export-context.md)—either `"default"` (tethering to the same iframe) or `"new"` (launching Adobe Express in a new browser tab).
- [`ContinueEditingDropdownOption.action`](../../v4/shared/src/types/export-config-types/type-aliases/continue-editing-action.md): same as `EditFurtherExportOption.action`, but [`intent`](../../v4/shared/src/types/export-config-types/enumerations/edit-further-intent.md) is required.

As follows a few examples:

```javascript
const exportConfig = [
  // 1️⃣ Tethering to Edit Image
  {
    id: "open-edit-image", label: "Edit image",
    action: { target: "image-module" },
    style: { uiType: "button" },
  },
  // 2️⃣ Tether to Full Editor with a standard button
  {
    id: "open-full-editor", label: "Full editor",
    action: { target: "express" },
    style: { uiType: "button" },
  },
  // 3️⃣ Tether to Full Editor in a new tab preloading the intent
  {
    id: "open-full-editor-add-text", label: "Add Text",
    action: { target: "express", intent: "add-text", context: "new" },
    style: { uiType: "button" },
  },
  // 4️⃣ Tether to Full Editor with a dropdown-style button
  {
    type: "continue-editing",
    label: "Do More",
    style: { uiType: "button", variant: "secondary", treatment: "fill" },
    options: [
      {
        id: "editor-add-text",
        style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-text" },
      },
      {
        id: "editor-add-images",
        style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-images" },
      },
      {
        id: "editor-add-icons-and-shapes",
        style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-icons-and-shapes" },
      },
    ],
  },
];
```

### Caveats

Currently, there are some limitations to the usage of the `exportConfig` parameter, that are subject to change in the future:

- When tethering **from Edit Image V2** to the Full Editor module, only Dropdown-style buttons will work.
- When tethering **to the Edit Image module**, you cannot launch the V2 experience; only Edit Image V1 is supported.

```javascript
// ⚠️ Only ⚠️ when tethering from Edit Image V2 to the Full Editor module
const exportConfig = [
  // ❌ Won't work
  {
    id: "open-full-editor-v1", label: "Full editor"
    action: { target: "express" }
    style: { uiType: "button" }
  },
  // ✅ Will work
  {
    type: "continue-editing"
    label: "Do More!"
    style: {
      uiType: "button", variant: "secondary", treatment: "fill"
    },
    options: [
      {
        id: "exportOption1", style: { uiType: "dropdown" },
        action: { target: "express", intent: "add-text" },
      },
      {
        id: "exportOption2",
        style: { uiType: "dropdown" },
        action: {
          target: "express", intent: "add-icons-and-shapes"
        },
      },
    ],
  },
];
```

## Intent Change Handler

The Intent Change Handler is a callback that is called when the intent changes. It is used to set new `appConfig` and `exportConfig` for the next module in the transition.

```javascript

```
