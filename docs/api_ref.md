# API References

- [API References](#api-references)
  - [initialize()](#initialize)
    - [HostInfo](#hostinfo)
    - [ConfigParams](#configparams)
  - [createDesign()](#createdesign)
  - [editDesign()](#editdesign)
  - [openQuickAction()](#openquickaction)
- [Shared Types](#shared-types)
  - [Asset](#asset)
  - [OutputAsset](#outputasset)
  - [Callbacks](#callbacks)
    - [PublishParams](#publishparams)
  - [CreateInputParams](#createinputparams)
  - [CCXOutputParams](#ccxoutputparams)
  - [EditInputParams](#editinputparams)
  - [ExportOption](#exportoption)
    - [ExportButton](#exportbutton)
  - [ModalParams](#modalparams)
  - [QuickActionId](#quickactionid)
  - [QuickActionInputParams](#quickactioninputparams)
  - [Table of Contents](#table-of-contents)

## initialize()

The top-level module exposed by the SDK is `CCEverywhere`. Its default method `initialize()` is the main API used for initializing the SDK. Make sure to call it only once a page. This method returns a [CCEverywhere](#cceverywhere-object) object.

`default: { initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => null | CCEverywhere }`

**Parameters**
- hostInfo: [HostInfo](#hostinfo)
- (optional) configParams: [ConfigParams](#configparams)

### HostInfo
All four properties are required fields. A folder named `appName` is created in the user's CCX account, and projects they make will be saved there.

| Property | Type | Description
| :-- | :--| :--
|clientId | string | Your API Key
|appName | string | Name of CCX project folder
|appVersion | { major: #, minor: #, patch: #} | Your app version
| platformCategory | string | 'web'


### ConfigParams
This is an optional field, and defaults to 'en_US' if nothing is specified. See [customization](customization.md) for full locale list.

| Property | Type |
| :-- | :--|
|locale | string |


```js
CCEverywhere.default.initialize(
    /* HostInfo */
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web'
    },
    /* ConfigParams (optional) */
    {
        locale: 'en_US',
    }
);
```


---

## createDesign()

This method launches a new project in the CCX editor component. 

`createDesign(createDesignParams: CreateDesignParams) => void`

__CreateDesignParams__ is an object with 4 properties:
| Property | Type | Description
| :-- | :--| :--
| inputParams | [CreateInputParams](#createinputparams) | Specify canvas template layout ratio, canvas template type, and the search text to pass in the target application 
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError


All the properties are optional. The function returns void.

```js
ccEverywhere.createDesign(
    {
        modalParams: {},
        callbacks: {
            onCancel: () => {},
            onPublish: (publishParams) => {},
            onError: (err) => {},
        },
        outputParams: { 
            outputType: "base64"
        },
        inputParams: { 
            canvasAspectId: "1:2",
            templateType: "Flyers",
        }
    }
); 
```
---

## editDesign()
This method launches a specified CCX project in the CCX editor component.

`editDesign(editDesignParams: EditDesignParams) => void`

__EditDesignParams__ is an object with 4 properties:

| Property | Type | Description
| :-- | :--| :--
| inputParams | [EditInputParams](#editinputparams) | ID of CCX project to open for editing
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError


Besides `inputParams.projectId`, the rest are optional fields. The function returns void.

```js
ccEverywhere.editDesign(
    {
        // inputParams.projectId is the only REQUIRED parameter
        inputParams: { 
            projectId: CCX_PROJECT_ID 
        },
        callbacks: {
            onCancel: () => {},
            onPublish: (publishParams) => {},
            onError: (err) => {},
        },
        modalParams: {},
        outputParams: { 
            outputType: "base64"
        },
    }
);
```

---
## openQuickAction()
`openQuickAction(quickActionParams: QuickActionParams) => void`

This method takes an object of parameters, `quickActionParams`:

__`QuickActionParams`__ is an object with 4 properties: 
| Property | Type | Description
| :-- | :--| :--
| id | [QuickActionId](#quickactionid) | ID for associated Quick Action
| inputParams | [QuickActionInputParams](#quickactioninputparams) | Asset to load (image only), and export button options
| modalParams | [ModalParams](#modalparams) | Specify CCX editor modal dimensions
| outputParams | [CCXOutputParams](#ccxoutputparams) | Specify output type and file type of created project
| callbacks | [Callbacks](#callbacks) | onCancel, onPublish, onError

Besides `id` and `exportOptions` in `QuickActionInputParams`, the rest are optional fields. `exportOptions` can be an empty array if you want. The function returns void. 

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
Passed to the onPublish callback in publishParams. An OutputAsset type extends the [Asset](#asset) type with 3 additional properties. fileName and size are optional. 
| Property | Value(s) | Description 
|:-- | :-- | :--
| type | 'image','video' | Type of CCX asset (image or video)
| dataType | 'base64' | Type of data representation (base64 only right now)
| data | string | Base 64 rendition of video/image asset
| fileType | 'jpeg', 'png', 'mp4' | Type of output asset 
| fileName | string | Name of output asset
| size | { width: #, height: #, unit: "px"/"in"/"mm"} | Dimensions of output asset

--- 
## Callbacks
All the callbacks are optional and return void. 

| Property | Callback Function | Description 
| :-- | :-- | :--
| onCancel | CancelCallback | Triggered when user closes CCX modal
| onPublish | PublishCallback | Triggered when user finishes workflow in modal (Save/Download)
| onError | ErrorCallback`<ErrorCode>` | Triggered upon API or authentication error with associated error code 

### PublishParams
When the user saves a project, onPublish passes the host application a PublishParams object. PublishParams consists of the project ID used for generating the asset, and the output asset. 
 - projectId: string associated with CCX project
 - asset: [OutputAsset](#outputasset)

---
## CreateInputParams

All the properties are optional. To see the full list of canvas template layout ratios and template types, see the [customization](customization.md) page.

| Property | Type| Description
| :-- | :--| :--
| canvasAspectId| string | Initializes the CCX editor loaded with templates that fit that layout ratio
| templateType | string | Initializes the CCX editor loaded with templates of this specified type
| templateSearchText | string | Initializes the CCX editor with this string value for template search

---
## CCXOutputParams

All properties are optional. As of this version, the only supported output type is a base64 rendition of the project.
| Property | Value | Description 
| :-- | :--| :--
| fileType | "jpeg", "png", "mp4" | Output asset file type
| outputType | "base64" | Output data type

---
## EditInputParams

* projectId is a required property. Get this `projectId` from `publishParams` after you save a project. Refer to the [callbacks](#callbacks) sections. 
* asset: Allows you to load in an asset for editing in the CCX editor component.
  
| Property | Type | Description 
| :-- | :--| :--
| projectId| string | CCX project ID to send to the editor component
| asset (optional)| [Asset](#asset) | Asset to load into the editor component

---
## ExportOption
Allows you to define export buttons and groups for a Quick Action. All the properties are optional. Must be specified in [QuickActionsInputParams](#quickactioninputparams) - it can be an empty array.


### ExportButton 
This interface describes the base object that is used to render a button once the quick action has completed the action.  

| Property | Value | Description
| :-- | :--|:--
|optionType| "button" | QA renders single standalone button
|**label**| string | Export label name
|variant | "cta"/"primary"/"secondary" | Defines the [style](https://spectrum.adobe.com/page/button/) of a button.
| buttonType | 'native' | Type of export button ([Native](#nativeexportbutton-render-a-native-button))
| optionType | 'button' | Type of ExportOption 

* __label__ defaults to "Customize" when the target is "Editor" and "Download" when the target is "Download".

```js
const exportOptions = [
    ** target: allows the Quick Task to determine type of export */
    {
        // Customize in Express button
        target: 'Editor',
        variant: 'cta',
        optionType: 'button',
        buttonType: 'custom'
    },
    {
        target: 'Download',
        variant: 'primary',
        optionType: 'button',
        buttonType: 'native'
    }
];
```

---

## ModalParams

Allows you to define the UI constraints of the CCX editor modal dialog. All the properties are optional.

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | { width: #, height: #, unit: "px"/"in"/"mm"}
| padding | number
| borderRadius | number

---

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


---

## QuickActionInputParams

Allows you to specify the asset and export buttons/groups you want to perform a Quick Action with. Both fields are optional, but exportOptions must be specified with at least an empty array.
| Property | Type | Description 
| :-- | :--| :--
| asset | [Asset](#asset) | Image you want to load into QA modal
| exportOptions | [ExportOption](#export-option) | Customize export buttons 

---

## Table of Contents
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