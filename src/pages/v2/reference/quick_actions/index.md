---
noIndex: true
keywords:
  - v2
  - Quick Actions
  - Image Quick Action
  - Video Quick Action
  - ExportOption
  - openQuickAction
title: Quick Actions
description: This is the reference page for the quick actions component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---
# Quick actions

<InlineAlert variant="error" slots="header, text" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

The `openQuickAction()` API allows you to embed the quick actions component in your application.

## openQuickAction()

This method launches an iframe in your application for your user to perform a quick action.

```js
openQuickAction(QuickActionParams) 
```

### QuickActionParams

`openQuickAction()` takes an object `QuickActionParams` with 4 properties.

| Property | Type | Description
| :-- | :--| :--
| id | [QuickActionId](#quickactionid) | ID for associated quick action
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Asset to load (image only), and export button options
| modalParams (optional) | [ModalParams](../shared_types/index.md#modalparams) | Specify modal dimensions
| outputParams (optional) | [CCXOutputParams](../shared_types/index.md#ccxoutputparams) | Specify output type and file type of created project
| callbacks (optional) | [Callbacks](../shared_types/index.md#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart

**Note**: `inputParams.exportOptions` determines which export buttons are exposed to the user once the action is complete, and must be defined with at least an empty array. If given an empty array, the "Download" button will be surfaced as an export option.

### QuickActionId

This ID is associated with the quick action you want to surface to your user.

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
| Merge Video | 'merge-videos' | Video
| Resize Video | 'resize-video' | Video
| Reverse Video | 'reverse-video' | Video
| Trim Video | 'trim-video' | Video

### QuickActionInputParams

Allows you to specify an input asset and export options for the quick actions modal.

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
            // passing a starting asset is not available for video quick actions
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

Allows you to define export buttons for a quick action.

This is an array of [ExportButton](#exportbutton) and/or [ExportButtonGroup](#exportbuttongroup) type objects. When specified with an empty array, a "Download" button will still be generated for the user once the action is completed.

## ExportButton

There are two types of export buttons:  `NativeExportButton` and `CustomExportButton`.

### NativeExportButton

This is used to render a native button once the quick action has finished. You will not be notified when the button is clicked. If you want to be notified via a custom click handler, use [`CustomExportButton`](#customexportbutton).

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

* 'Editor': Opens asset in an [full editor component](../full_editor/index.md)
* 'Download':  Downloads the asset to user's machine
* 'Host': Targets host app - id is passed in [`onPublish`](../shared_types/index.md#quickactionpublishparams) callback along with asset data

For `NativeExportButton` objects, `label` defaults to **Customize** when targeting the full editor and **Download** when the target is specified as 'Download;.

### Example

```js
const exportOptions = [
    {
        // Customize further in the full editor
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
