# API References

- [API References](#api-references)
- [initialize()](#initialize)
  - [HostInfo](#hostinfo)
  - [ConfigParams](#configparams)
- [createDesign()](#createdesign)
  - [CreateInputParams](#createinputparams)
- [editDesign()](#editdesign)
  - [EditInputParams](#editinputparams)
- [openQuickAction()](#openquickaction)
  - [QuickActionId](#quickactionid)
  - [QuickActionInputParams](#quickactioninputparams)
  - [ExportOption](#exportoption)
- [Shared Types](#shared-types)
  - [Asset](#asset)
  - [OutputAsset](#outputasset)
  - [Callbacks](#callbacks)
  - [CCXOutputParams](#ccxoutputparams)
  - [ModalParams](#modalparams)
- [Table of Contents](#table-of-contents)

# initialize()

The top-level module exposed by the SDK is `CCEverywhere`. Its default method `initialize()` is the main API used for initializing the SDK. Make sure to call it only once a page. This method returns a CCEverywhere object.

`default: { initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => null | CCEverywhere }`

**Parameters**
- hostInfo: [HostInfo](#hostinfo)
- (optional) configParams: [ConfigParams](#configparams)


```js
CCEverywhere.default.initialize(
    /* HostInfo */
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web', 
        redirectUri: YOUR_REDIRECT_URI
    },
    /* ConfigParams (optional) */
    {
        locale: 'en_US',
    }
);
```
## HostInfo
**appName** defines the name of a folder created for the user in CCX. Any projects they create or edit will be saved there.

| Property | Type | Description
| :-- | :--| :--
|clientId | string | Your API Key
|appName | string | Name of CCX project folder created for user
|appVersion | { major: number, minor: number, patch?: number} | Your app version
| platformCategory | 'web' | Specify host app platform
| redirectUri | string | Searches for redirect URL you define in [console](https://developer.adobe.com/console)

If you specify `redirectUri` as a parameter in the **HostInfo** object, that is the redirect URI that will be checked first. If you leave this field blank, IMS will search through the "Redirect URI patterns" registered in console for your client, and if no match is found, it will fall back on the "Default Redirect URI".


## ConfigParams
The **locale** field defaults to **'en_US'** if nothing is specified.  Visit the [customization](customization.md) page for a full locale list.

| Property | Type | Description
| :-- | :--| :--
|locale | string | Language settings for SDK components


# createDesign()

This method launches a new project in the CCX editor component, and returns void. 

`createDesign(createDesignParams: CreateDesignParams) => void`

**Parameters:**
* CreateDesignParams is an object with 4 optional properties:
  
| Properties | Type | Description
| :-- | :--| :--
| inputParams | [CreateInputParams](#createinputparams) | Specify canvas template layout ratio, canvas template type, and the search text to pass in the target application 
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart


```js
ccEverywhere.createDesign(
    {
        modalParams: {},
        callbacks: {
            onCancel: () => {},
            onError: (err) => {},
            onLoadStart: () => {},
            onLoad: () => {},
            onPublishStart: () => {},
            onPublish: (publishParams) => {},
        },
        outputParams: { 
            outputType: 'base64'
        },
        inputParams: { 
            canvasAspectId: '1:2',
            templateType: 'Flyers',
        }
    }
); 
```
## CreateInputParams

To see the full list of canvas template layout ratios and template types, see the [customization](customization.md) page.

| Property | Type| Description
| :-- | :--| :--
| canvasAspectId| string | Initializes the CCX editor loaded with templates that fit that layout ratio
| templateType | string | Initializes the CCX editor loaded with templates of this specified type
| templateSearchText | string | Initializes the CCX editor with this string value for template search


# editDesign()
This method launches a specified CCX project in the CCX editor component, and returns void.

`editDesign(editDesignParams: EditDesignParams) => void`

**Parameters:**
* EditDesignParams is an object with 4 properties. Besides **inputParams.projectId** or **inputParams.asset**, the rest are optional.

| Property | Type | Description
| :-- | :--| :--
| inputParams | [EditInputParams](#editinputparams) | ID of CCX project to open for editing
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart


```js
ccEverywhere.editDesign(
    {
        // inputParams.projectId or inputParams.asset is the only REQUIRED parameter
        inputParams: { 
            projectId: CCX_PROJECT_ID 
        },
        callbacks: {
            onCancel: () => {},
            onError: (err) => {},
            onLoadStart: () => {},
            onLoad: () => {},
            onPublishStart: () => {},
            onPublish: (publishParams) => {},
        },
        modalParams: {},
        outputParams: { 
            outputType: 'base64'
        },
    }
);
```

## EditInputParams

Get **projectId** from **publishParams** of **onPublish** (called after save/download finishes).
<!-- * **asset** can be used, instead of **projectId**, to load an asset in for editing in the CCX modal. -->
  
| Property | Type | Description 
| :-- | :--| :--
| projectId| string | CCX project ID to send to the editor component
<!-- | asset | [Asset](#asset) | Asset to load into the editor component -->

# openQuickAction()
This method launches a modal to perform a Quick Action, and returns void.

`openQuickAction(quickActionParams: QuickActionParams) => void`

**Parameters:**
* QuickActionParams is an object with 4 properties. Besides **id** and **inputParams.exportOptions** (at least []), the rest are optional fields. 

| Property | Type | Description
| :-- | :--| :--
| id | [QuickActionId](#quickactionid) | ID for associated Quick Action
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Asset to load (image only), and export button options
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart


```js
ccEverywhere.openQuickAction(
    {
        id: 'image-resize',
        inputParams:{
            exportOptions: []
        }
    }
)
```

## QuickActionId
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


## QuickActionInputParams

Allows you to specify the asset and export buttons you want to perform a Quick Action with. **exportOption** is required to be defined with at least an empty array.
| Property | Type | Description 
| :-- | :--| :--
| asset | [Asset](#asset) | Image you want to load into QA modal
| exportOptions | [] or [ExportOption](#export-option) | Customize export buttons 


## ExportOption
Allows you to define export buttons for a Quick Action. When specified with an empty array, a "Download" button will still be generated for the user once the Quick Action is completed.

| Property | Value | Description
| :-- | :--|:--
| target | 'Editor'/'Download' | Determines what type of export 
|variant | 'cta'/'primary'/'secondary' | Defines the [style](https://spectrum.adobe.com/page/button/) of a button
|optionType| 'button' | Determines type of export option 
| buttonType | 'native' | Type of export button (Always 'native')
|label| string | Overwrite default label name

* **target** 
  * "Editor" - exports asset to a CCX editor modal for further customization
  * "Download" - downloads asset to user's machine
*  **label** defaults to "Customize" when the target is "Editor" and "Download" when the target is "Download".

```js
const exportOptions = [
    ** target: allows the Quick Task to determine type of export */
    {
        // Customize in Express button
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
    }
];
```


# Shared Types
## Asset 
Represents an asset that can be loaded into CCX.

| Property | Value(s) | Description 
|:-- | :-- | :--
| type | 'image','video' | Type of CCX Asset (image or video)
| dataType | 'base64' | Type of data representation (base64 only right now)
| data | string | Base 64 rendition of video/image asset
 
--- 
## OutputAsset
Passed to the onPublish callback in PublishParams. Extends the [Asset](#asset) type with 3 additional properties. 
| Property | Value(s) | Description 
|:-- | :-- | :--
| type | 'image','video' | Type of CCX asset (image or video)
| dataType | 'base64' | Type of data representation (base64 only right now)
| data | string | Base 64 rendition of video/image asset
| fileType | 'jpeg', 'png', 'mp4' | Type of output asset 
| (optional) fileName | string | Name of output asset
| (optional) size | { width: number, height: number, unit: 'px'/'in'/'mm'} | Dimensions of output asset

--- 
## Callbacks
All the callbacks are optional and return void. 

| Property | Callback Function | Description 
| :-- | :-- | :--
| onCancel | () => {}| Triggered when user closes CCX modal
| onError | () => {} | Triggered upon error with associated error code 
| onLoadStart | () => {} | Triggered once modal begins to load
| onLoad | () => {} | Triggered once modal is loaded
| onPublishStart | () => {} | Triggered when "Publish"/"Download" is clicked
| onPublish | (publishParams: PublishParams) => {} | Triggered when publish/download finishes 


**PublishParams**: onPublish passes the host application a publishParams object. Objects of type PublishParams have the project ID used for generating the asset, and the output asset. 
 - projectId: string associated with CCX project
 - asset: [OutputAsset](#outputasset)

---
## CCXOutputParams

All properties are optional. Allows you to define data type and file type of output asset. 

| Property | Value | Description 
| :-- | :--| :--
| fileType | 'jpeg', 'png', 'mp4' | Output asset file type
| outputType | 'base64' | Output data type

--- 
## ModalParams

All properties are optional. Allows you to define the UI constraints of the CCX editor modal dialog. 

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | { width: number, height: number, unit: 'px'/'in'/'mm'}
| padding | number
| borderRadius | number

---

# Table of Contents
* [Overview](../README.md)
* Get Started 
  * [Configuration](configuration.md)
  * [Local Development](local_dev.md)
  * [Quick Start](quickstart.md)
* SDK Components
  * CCX Editor Component
    * [Create Project API](create_project.md)
    * [Open Project API](edit_project.md)
  * [Quick Actions API](quick_actions.md)
* [API References](api_ref.md)
* [Customization](customization.md)
* [Sample](../sample/README.md)
