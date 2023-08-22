---
keywords:
  - Shared Types
  - Asset
  - Output
  - Modal parameters
  - ModalParams
  - Size
  - PublishParams
  - onPublish
  - Callbacks
title: Shared Types
description: This is the reference page for shared types across SDK components.
contributors:
  - https://github.com/amandahuarng
---

# Shared Types

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## Asset

Represents an asset that can be loaded into a full editor component, or loaded in for an image quick action.

| Property | Value(s) | Description
|:-- | :-- | :--
| type | 'image' | Type of asset (image)
| dataType | 'base64' | Type of data representation (base64 only right now)
| data | string | Base 64 rendition of image asset

## Callbacks

All the callbacks are optional and return void.

| Property | Callback Function | Description
| :-- | :-- | :--
| onCancel | () => {}| Triggered when user closes the modal
| onError | () => {} | Triggered upon error with associated error code
| onLoadStart | () => {} | Triggered once modal begins to load
| onLoad | () => {} | Triggered once modal is loaded
| onPublishStart | () => {} | Triggered when "Publish"/"Download" is clicked
| onPublish | ([PublishParams](#publishparams) or [QuickActionPublishParams](#quickactionpublishparams)) => {} | Triggered when publish/download is complete

### PublishParams

Asset-related information received with `onPublish` callback.

| Property | Description
| :-- | :--
| projectId | string generated for identifying the project
| asset | Resulting asset: [OutputAsset](#outputasset)

### QuickActionPublishParams

Asset-related information received with `onPublish` callback in quick actions.

| Property | Description
| :-- | :--
| projectId | string generated for identifying the project
| asset | Resulting asset: [OutputAsset](#outputasset)
| exportButtonId | `id` passed in the `CustomExportButton` at time of invoking `openQuickAction`

## CCXOutputParams

All properties are optional. Allows you to define data type and file type of output asset.

| Property | Value | Description
| :-- | :--| :--
| fileType | 'jpeg', 'png', 'mp4' | Output asset file type
| outputType | 'base64', 'url' | Output data type

## ModalParams

All properties are optional. Allows you to define the UI constraints of the modal.

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | [Size](#size)
| padding | number
| borderRadius | number

## OutputAsset

Passed to the onPublish callback in PublishParams. Extends the [Asset](#asset) type with 3 additional properties.

| Property | Value(s) | Description
|:-- | :-- | :--
| type | 'image', 'video' | Type of asset (image or video)
| dataType | 'base64', 'url' | Type of data representation
| data | string | Image/video data
| fileType | 'jpeg', 'png', 'mp4' | Type of output asset
| (optional) fileName | string | Name of output asset
| (optional) size | [Size](#size) | Dimensions of output asset

## Size

Allows you to define the canvas size of the project created in the full editor.

| Property | Value | Description
| :-- | :--| :--
|width| number | minimum value = 0
|height | number | minimum value = 0
| unit | 'px'/'in'/'mm' | pixels/inches/millimeters
