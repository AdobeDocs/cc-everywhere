---
keywords:
  - Express Embed SDK
  - Express Editor
  - Embed SDK
  - Quick Actions
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Image Quick Action
  - Video Quick Action
title: Quick Actions
description: This is the reference page for the Quick Actions component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---
# Quick Actions Reference

## openQuickAction()

This method launches an iframe to perform a Quick Action.

```js
openQuickAction(QuickActionParams) 
```

### QuickActionParams

`openQuickAction()` takes an object `QuickActionParams` with 4 properties.

| Property | Type | Description
| :-- | :--| :--
| id | [QuickActionId](#quickactionid) | ID for associated Quick Action
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Asset to load (image only), and export button options
| modalParams | [ModalParams](../shared_types/index.md#modalparams) | Specify Adobe Express editor modal dimensions
| outputParams | [CCXOutputParams](../shared_types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](../shared_types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart
Besides **id** and **inputParams.exportOptions**, the rest are optional fields.

### QuickActionId

Allows you to select a Image or Video Quick Action.

| Quick Action | QuickActionId | Type
| :-- | :-- | :--
| Crop Image | 'image-crop' | Image
| Convert to JPG | 'convert-to-jpg' | Image
| Convert to PNG | 'convert-to-png' | Image
| Resize Image | 'image-resize' | Image
| Remove Background | 'remove-background' | Image
| Change Speed | 'change-speed' | Video
| Convert to GIF | 'convert-to-gif' | Video
| Convert to MP4 | 'convert-to-mp4' | Video
| Crop Video | 'crop-video' | Video
| Merge Video | 'merge-video' | Video
| Resize Video | 'resize-video' | Video
| Reverse Video | 'reverse-video' | Video
| Trim Video | 'trim-video' | Video

### QuickActionInputParams

Allows you to specify the asset and export buttons you want to perform a Quick Action with.

| Property | Type | Description
| :-- | :--| :--
| asset | [Asset](../shared_types/index.md#asset) | Image you want to load into QA modal.
| exportOptions | [ExportOption](#exportoption) | Define export buttons

### Example

```js
ccEverywhere.openQuickAction(
    {
        id: 'image-resize',
        inputParams: {
            // asset is not applicable for video Quick Actions
            asset: {
                data: <ENCODED_IMAGE>, 
                dataType: 'base64', 
                type: 'image'
            }, 
            exportOptions: []
        }
    }
)
```

## ExportOption

Allows you to define export buttons for a Quick Action.

This is an array of [ExportButton](#exportbutton) and/or [ExportButtonGroup](#exportbuttongroup) type objects. When specified with an empty array, a "Download" button will still be generated for the user once the Quick Action is completed.

## ExportButton

There are two types of export buttons:  `NativeExportButton` and `CustomExportButton`.

### NativeExportButton

This is used to render a native button once the Quick Action has finished. You will not be notified when the button is clicked. If you want to be notified via a custom click handler, use [`CustomExportButton`](#customexportbutton).

| Property | Description
| :-- |:--
| [target](#target) | 'Editor' or 'Download'
| label  | Localized text of the export button
| variant | 'cta', 'primary', 'secondary'
| optionType| 'button'
| buttonType | 'native'

### CustomExportButton

This is used to render a custom button once the Quick Action has finished. Use this if you want to have a custom button click handler.

| Property | Description
| :-- |:--
| id | The id of the export button
| [target](#target) | 'Host'
| label  | Localized text of the export button
| variant | 'cta', 'primary', 'secondary'
| optionType| 'button'
| buttonType | 'custom'

#### target

The target determines the type of export.

* 'Editor': Opens asset in a [Adobe Express editor](../ccx_editor/index.md)
* 'Download':  Downloads the asset to user's machine
* 'Host': Targets host app - id is passed in [`onPublish`](../shared_types/index.md#quickactionpublishparams) callback along with asset data

For `NativeExportButton` objects, `label` defaults to **Customize** when targeting the Express editor and **Download** when the target is specified as 'Download;.

### Example

```js
const exportOptions = [
    {
        // Customize in Adobe Express editor
        target: 'Editor',
        variant: 'cta',
        optionType: 'button',
        buttonType: 'native'
    },
    {
        target: 'Download',
        variant: 'primary',
        optionType: 'button',
        buttonType: 'native'
    },
    {
        target: 'Host',
        id: 'save-to-host-app',
        label: 'Embed in app',
        variant: 'cta',
        optionType: 'button',
        buttonType: 'custom'
    }
];
const callbacks = {
    onCancel: () => {},
    onPublish: (publishParams) => {
        if(publishParams.exportButtonId=="save-to-host-app"){
            //customize functionality here
        }
    },
    onError: (err) => {
        console.error('Error received is', err.toString())
    }
}
```

## ExportButtonGroup

This is used to render a group of buttons which will be shown as a drop down under a parent button.

| Property | Description
| :-- |:--
| label  | Localized text of the export button group
| Variant | 'cta', 'primary', 'secondary'
| optionType| "group"
| buttons | [ExportButton](#exportbutton)[]
