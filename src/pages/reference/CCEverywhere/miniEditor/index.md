---
keywords:
  - createImageFromText
  - TextToImage
  - Image editing
  - Edit image 
  - v4
  - module
title: editor reference
description: This is the reference page for the editor API
contributors:
  - https://github.com/amandahuarng
--- 

# module

This interface has all the APIs used to embed our editing modules in your own application.

## createImageFromText

```ts
createImageFromText: (appConfig?: TextToImageAppConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| appConfig | [TextToImageAppConfig](#texttoimageappconfig) | Pass a text prompt to preload in the text to image editor
| exportConfig | [ExportOptions](../../types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../types/index.md#containerconfig) | Properties to configure the SDK container

### TextToImageAppConfig

`TextToImageAppConfig` allows you to pass a prompt into the editor, and configure callback functions.

| Property | Type| Description
| :-- | :--| :--
| promptText| string | Optional string to launch the text to image module with a prompt
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback functions

## editImage

```ts
editImage: (docConfig: EditImageDocConfig, exportConfig?: ExportOptions, containerConfig?: ContainerConfig): void
```

The only required property is `docConfig`.

| Property | Type| Description
| :-- | :-- | :--
| docConfig | [EditImageDocConfig](#editimagedocconfig) | Pass an asset to preload into the Edit Image module
| exportConfig | [ExportOptions](../../types/index.md#exportoptions)[] | Configure export options. If no export options are specified, the editor falls back to the default layout options.
| containerConfig | [ContainerConfig](../../types/index.md#containerconfig) | Properties to configure the SDK container

### EditImageDocConfig

| Property | Type| Description
| :-- | :-- | :--
| asset | [Asset](../../types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open.
