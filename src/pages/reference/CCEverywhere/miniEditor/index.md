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

# miniEditor

This interface has all the APIs used to embed our editing modules in your own application.

## createImageFromText

```ts
createImageFromText: (params: TextToImageParams): void
```

### TextToImageParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [TextToImageInputParams](#texttoimageinputparams) | Input parameters when creating an image from text.
| outputParams | [CCXOutputParams](../../types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.

### TextToImageInputParams

`TextToImageInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| promptText| string | Optional string to launch the text to image module with a prompt

<!-- | exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options. -->

## editImage

```ts
editImage: (params: ImageMEDesignParams): void
```

### ImageMEDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [ImageMEInputParams](#imagemeinputparams) | Input parameters when creating a design.
| outputParams | [ImageMEOutputParams](#imagemeoutputparams) | Desired output options when exporting assets from the editor.

### ImageMEInputParams

`ImageMEInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| asset | [Asset](../../types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.

### ImageMEOutputParams

Allows you to define data type and file type of output asset.

| Property | Type | Description
| :-- | :--| :--
| allowedFileTypes | [FileType](../../types/index.md#filetype)[] | Output asset file types
| outputType | [AssetDataType](../../types/index.md#assetdatatype) | Output data type
