---
keywords:
  - createDesign
  - Create new project
  - Load templates
  - Editor panel
  - Embedded editor reference
  - panelSearchText
  - editorPanelView
  - canvasSize
  - templateType
  - v3
title: createDesign reference
description: This is the reference page for the createDesign API
contributors:
  - https://github.com/amandahuarng
--- 

# createDesign()

<InlineAlert variant="error" slots="header, text" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

This API is used to embed the full Adobe Express editor in your own application.

```ts
createDesign: (createDesignParams: CreateDesignParams): void
```

## CreateDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [CreateInputParams](#createinputparams) | Input parameters when creating a design.
| outputParams | [CCXOutputParams](../../types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.

### CreateInputParams

`CreateInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](../../types/index.md#size)/[CanvasAspectId](../../types/index.md#canvasaspectid) | Launch the editor with canvas set at this size.
| asset | [Asset](../../types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
| editorPanelView | [EditorPanelView](../../types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.
| templateType | [TemplateType](../../types/index.md#templatetype) | Specify template type for canvas.

`templateSearchText` are not supported with this release. Use `panelSearchText` instead.
