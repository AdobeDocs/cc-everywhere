---
keywords:
  - create
  - createWithAsset
  - Create new project
  - Load templates
  - Editor panel
  - Embedded editor reference
  - panelSearchText
  - editorPanelView
  - canvasSize
  - templateType
  - v4
title: editor reference
description: This is the reference page for the editor API
contributors:
  - https://github.com/amandahuarng
--- 

# editor

<InlineAlert variant="error" slots="header, text" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

This property has all the APIs used to embed the full Adobe Express editor in your own application.

## create

```ts
editor.create: (createDesignParams: CreateDesignParams): void
```

### CreateDesignParams

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
| editorPanelView | [EditorPanelView](../../types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.
| templateType | [TemplateType](../../types/index.md#templatetype) | Specify template type for canvas.

## createWithAsset

```ts
editor.createWithAsset: (createDesignParams: CreateDesignParams): void
```

### CreateDesignParams

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

## edit

```ts
editor.edit: (editDesignParams: EditDesignParams): void
```

### EditDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [EditInputParams](#editinputparams) | Input parameters when editing a design.
| outputParams | [CCXOutputParams](../../types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.

### EditInputParams

`EditInputParams` is where you pass the associated projectId to launch in an editor component.
  
| Property | Type | Description
| :-- | :--| :--
| projectId| string | Project ID of the asset returned from `onPublish` callback when `createDesign` was invoked.
| editorPanelView | [EditorPanelView](../../types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.

When a user completes their workflow in the editor, the associated **projectId** is sent back in [publishParams](../../types/index.md#publishparams) from the `onPublish` callback.
