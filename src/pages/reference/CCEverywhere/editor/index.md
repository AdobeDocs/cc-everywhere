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

This class contains all the APIs used to embed the full Adobe Express editor in your own application.

## Editor workflows

The following methods belong to the `editor` class:

* [`create`](#create): Start with an empty canvas.
* [`createWithAsset`](#createwithasset): Start with an asset.
* [`edit`](#edit): Continue editing an existing Express project.

## create

The `create` method starts the full editor workflow with an empty canvas.

```ts
editor.create: (docConfig?: CreateDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [CreateDocConfig](#createdocconfig) | Pass a custom canvas size
| appConfig | [BaseEditorAppConfig](#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](..\..\types\index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](..\..\types\index.md#containerconfig) | Properties to configure the SDK container

### CreateDocConfig

`CreateDocConfig` allows you to pass a custom canvas size.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](..\..\types\index.md#size)/[CanvasAspectId](..\..\types\index.md#canvasaspectid) | Launch the editor with canvas set at this size.

### BaseEditorAppConfig

`BaseEditorAppConfig` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| selectedCategory | [EditorPanelView](..\..\types\index.md#editorpanelview) | Determines which panel view to open by default.
| categorySearchText | string | Search text to pass in the editor for selected panel.
| templateType | [TemplateType](..\..\types\index.md#templatetype) | Specify template type for canvas.
| multiPage | boolean | Defaults to `true`. Set to `false` if multi-page export is not supported.
| allowedFileTypes | [FileType](..\..\types\index.md#filetype)[] | Specify the list of file types that the user can publish. By default, all formats (PNG, JPEG, MP4 and PDF) are supported.
| callbacks | [Callbacks](..\..\types\index.md#callbacks) | Callback functions

<InlineAlert variant="info" slots="text1" />

Use `allowedFileTypes` to specify the list of filetypes that the user can download. This can be used to limit the download options as per file types for end users. This limitation is applied to both native download and custom download scenarios.

View the full list of [canvas sizes](..\..\types\index.md#canvasaspectid) and [template types](..\..\types\index.md#templatetype).

## createWithAsset

The `createWithAsset` method starts the full editor workflow with an asset.

```ts
editor.createWithAsset: (docConfig: CreateWithAssetDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [CreateWithAssetDocConfig](#createdocconfig) | Pass an image and custom canvas size
| appConfig | [BaseEditorAppConfig](#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](..\..\types\index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](..\..\types\index.md#containerconfig) | Properties to configure the SDK container

### CreateWithAssetDocConfig

`CreateWithAssetDocConfig` allows you to pass an image and/or a custom canvas size.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| [Size](..\..\types\index.md#size)/[CanvasAspectId](..\..\types\index.md#canvasaspectid) | Launch the editor with canvas set at this size.
| asset | [Asset](..\..\types\index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.

## edit

The `edit` method lets you continue editing an existing Express project

```ts
editor.edit: (docConfig: EditDocConfig, appConfig?: BaseEditorAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [EditDocConfig](#editdocconfig) | Pass the document ID to open in the editor
| appConfig | [BaseEditorAppConfig](#baseeditorappconfig) | Parameters to configure editor/modal UI
| exportConfig | [ExportOptions](..\..\types\index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](..\..\types\index.md#containerconfig) | Properties to configure the SDK container

### EditDocConfig

| Property | Type| Description
| :-- | :-- | :--
| documentId | string | Unique identifier of the asset returned from `onPublish` callback

When a user completes their workflow in the editor, the associated **documentId** is sent back in [publishParams](..\..\types\index.md#publishparams) from the `onPublish` callback.
