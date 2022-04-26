---
title: Shared Types
description: This is the reference page for shared types across SDK components.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---
# Shared Types
## Asset 
Represents an asset that can be loaded into a CC Express editor component, or loaded in for an Image Quick Action. 

| Property | Value(s) | Description 
|:-- | :-- | :--
| type | 'image' | Type of asset (image)
| dataType | 'base64' | Type of data representation (base64 only right now)
| data | string | Base 64 rendition of image asset
 
## OutputAsset
Passed to the onPublish callback in PublishParams. Extends the [Asset](#asset) type with 3 additional properties. 

| Property | Value(s) | Description 
|:-- | :-- | :--
| type | 'image', 'video' | Type of asset (image or video)
| dataType | 'base64' | Type of data representation
| data | string | Base 64 rendition of video/image asset
| fileType | 'jpeg', 'png', 'mp4' | Type of output asset 
| (optional) fileName | string | Name of output asset
| (optional) size | { width: number, height: number, unit: 'px'/'in'/'mm'} | Dimensions of output asset
<!-- todo: check optional properties are outputted -->

## Callbacks
All the callbacks are optional and return void. 

| Property | Callback Function | Description 
| :-- | :-- | :--
| onCancel | () => {}| Triggered when user closes CC Express modal
| onError | () => {} | Triggered upon error with associated error code 
| onLoadStart | () => {} | Triggered once modal begins to load
| onLoad | () => {} | Triggered once modal is loaded
| onPublishStart | () => {} | Triggered when "Publish"/"Download" is clicked
| onPublish | (PublishParams) => {} | Triggered when publish/download finishes 

#### PublishParams
onPublish passes the host application a `PublishParams` object.  

| Property | Description
| :-- | :-- 
| projectId | string generated for identifying CC Express project
| asset | Resulting asset: [OutputAsset](#outputasset)

## CCXOutputParams

All properties are optional. Allows you to define data type and file type of output asset. 

| Property | Value | Description 
| :-- | :--| :--
| fileType | 'jpeg', 'png', 'mp4' | Output asset file type
| outputType | 'base64' | Output data type

## ModalParams

All properties are optional. Allows you to define the UI constraints of the CC Express editor iframe. 

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | { width: number, height: number, unit: 'px'/'in'/'mm'}
| padding | number
| borderRadius | number

