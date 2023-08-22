---
keywords:
  - openQuickAction
  - Open quick action
  - Load quick action
  - Launch quick action
  - v3
title: openQuickAction reference
description: This is the reference page for the openQuickAction API
contributors:
  - https://github.com/amandahuarng
--- 

# openQuickAction()

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This API is used for opening a quick action.

```ts
openQuickAction: (quickActionParams: QuickActionParams): void
```

### QuickActionParams

Besides `id`, all other properties are optional.

| Property | Type| Description
| :-- | :-- | :--
| id | [QuickActionId](#quickactionid) | Specify which quick action to open.
| callbacks | [Callbacks](../../shared_types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../shared_types/index.md#modalparams) | Parameters to configure modal UI
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Input parameters when opening a quick action.
| outputParams | [CCXOutputParams](../../shared_types/index.md#ccxoutputparams) | Desired output options when exporting assets from a quick action.

#### QuickActionId

This ID is associated with the quick action you want to surface to your user.

| Quick Action | QuickActionId | Type
| :-- | :-- | :--
| Crop image | 'crop-image' | Image
| Convert to JPG | 'convert-to-jpg' | Image
| Convert to PNG | 'convert-to-png' | Image
| Resize image | 'resize-image' | Image
| Remove background | 'remove-background' | Image
| Convert to GIF | 'convert-to-gif' | Video
| Convert to MP4 | 'convert-to-mp4' | Video
| Crop video | 'crop-video' | Video
| Merge video | 'merge-videos' | Video
| Resize video | 'resize-video' | Video
| Trim video | 'trim-video' | Video
| Animate from audio | 'animate-from-audio' | Video

#### QuickActionInputParams

Input parameters for quick actions. All the properties are optional.

| Property | Type | Description
| :-- | :-- | :--
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. These options will be visible in the quick action editor.
| asset | [Asset](#asset) or [Asset](../../types/index.md#asset)[] | Asset from the host application to start editing with. Array of assets only accepted for merge video quick action.
| receiveTargetErrors | boolean | Boolean that tells client whether or not to receive target application errors.
