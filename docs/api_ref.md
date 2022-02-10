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
    - [QuickActionPublishParams](#quickactionpublishparams)
  - [CreateInputParams](#createinputparams)
  - [CCXOutputParams](#ccxoutputparams)
  - [EditInputParams](#editinputparams)
  - [ExportOption](#exportoption)
    - [ExportButton](#exportbutton)
      - [__label__](#label)
    - [NativeExportButton: Render a Native Button](#nativeexportbutton-render-a-native-button)
    - [Example](#example)
  - [ModalParams](#modalparams)
  - [QuickActionInputParams](#quickactioninputparams)
  - [Table of Contents](#table-of-contents)

## initialize()

The top-level module exposed by the SDK is `CCEverywhere`. Its default method `initialize()` is the main API used for initializing the SDK. Make sure to call it only once a page. This method returns a [CCEverywhere](#cceverywhere-object) object.

`default: { initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => null | CCEverywhere }`

__Parameters__:
- hostInfo: [HostInfo](#hostinfo)
- (optional) configParams: [ConfigParams](#configparams)

### HostInfo

All four properties are required fields.
| Property | Type | Description
| :-- | :--| :--
|clientId | string | your API Key
|appName | string | your app name*
|appVersion | { major: #, minor: #, patch: #} | your app version
| platformCategory | string | 'web'

```js
{
    clientId: YOUR_CLIENT_ID,
    appName: YOUR_PROJECT_NAME,
    appVersion: { major: 1, minor: 0 },
    platformCategory: 'web'
}
```

A folder named `appName` is created in the user's CCX account, and projects they make will be saved there.

### ConfigParams
This is an optional field, and defaults to 'en_US' if nothing is specified.
| Property | Type |
| :-- | :--|
|locale | string |

```js
{
    locale: 'en_US',
}
```

See [customization](customization.md) for full locale list.

---

## createDesign()

`createDesign(createDesignParams: CreateDesignParams) => void`

This function creates a new design using CCEverywhere and takes an object of parameters, `createDesignParams`:

__`CreateDesignParams`__ is an object with 4 optional properties:

- inputParams: [CreateInputParams](#createinputparams)
- modalParams: [ModalParams](#modalparams)
- outputParams: [CCXOutputParams](#ccxoutputparams)
- callbacks: [Callbacks](#callbacks)

The function returns void.

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

`editDesign(editDesignParams: EditDesignParams) => void`

This method takes an object of parameters, `editDesignParams`:

__`EditDesignParams`__ is an object with 4 properties:

- inputParams: [EditInputParams](#editinputparams)
- modalParams: [ModalParams](#modalparams)
- outputParams: [CCXOutputParams](#ccxoutputparams)
- callbacks: [Callbacks](#callbacks)

Besides `inputParams`, the rest are optional fields. The function returns void.

```js
ccEverywhere.editDesign(
    {
        // inputParams is the only REQUIRED parameter
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
- id: QuickActionId
- inputParams: [QuickActionInputParams](#quickactioninputparams)
- modalParams: [ModalParams](#modalparams)
- outputParams: [CCXOutputParams](#ccxoutputparams)
- callbacks: [Callbacks](#callbacks)

Besides `id` and `exportOption` in `QuickActionInputParams`, the rest are optional fields. `exportOption` can be an empty array if you want. The function returns void. 

```
ccEverywhere.openQuickAction(
    {
        id: 'image-resize',
        inputParams:{
            exportOption: []
        }
    }
)
```


# Shared Types

## Asset 

An Asset type has three properties:

| Property | Value(s)
|:-- | :--
| type | 'image'
| dataType | 'base64'
| data | string (base 64 representation of output)
 
--- 
## OutputAsset
An OutputAsset type has an additional property, and 2 optional properties.
| Property | Value(s)
|:-- | :--
| type | 'image'
| dataType | 'base64'
| data | string (base 64 representation of output)
| fileType | 'jpeg', 'pdf', 'png', 'mp4'
| (optional) fileName | string
| (optional) size | { width: #, height: #, unit: "px"/"in"/"mm"}

--- 
## Callbacks
All the callbacks are optional and return void. 

| Property | Callback Function
| :-- | :-- 
| onCancel | CancelCallback 
| onPublish | PublishCallback |
| onError | ErrorCallback`<ErrorCode>` |
<!-- | onLoad | LoadCallback 
| onLoadStart | LoadStartCallback  -->
<!-- | onPublishStart | PublishStartCallback  -->


<!-- 1. `onLoad: () => void `
1. `onLoadStart: () => void ` -->
2. `onCancel: () => void ` 
   
    Whenever the user closes the CCX modal, this callback is triggered.
3. `onPublish: (PublishParams/QuickActionPublishParams) => void ` 

    Whenever the user saves a project, onPublish passes the host application a PublishParams object. PublishParams consists of the project ID used for generating the asset, and the output asset. 
<!-- 5. `onPublishStart: () => void `
   This callback function is called every time a user clicks "Save".  -->
3. `onError: () => void ` 

    Any time there is an API error or authentication error, onError will be called with the associated error code.

### PublishParams
 - projectId: string associated with CCX project
 - asset: [OutputAsset](#outputasset)

### QuickActionPublishParams 
  - exportButtonId: string configuring export option(s)
  - [PublishParams](#publishparams)


---
## CreateInputParams

Allows you to specify the canvas template layout ratio, canvas template type, and the search text to pass in the target application (CCX Editor Component, etc). All the properties are optional. To see the full list of canvas template layout ratios and template types, see the [customization](customization.md) page.
| Property | Type/Value |
| :-- | :--|
| canvasAspectId| string
| templateType | string
| templateSearchText | string

---
## CCXOutputParams

All properties are optional. As of this version, the only supported output type is a base64 rendition of the project.
| Property | Value |
| :-- | :--|
| fileType | "jpeg", "png", or "pdf" |
| outputType | "base64"

---
## EditInputParams

Allows you to specify the project ID the target application (CCX Editor Component, etc). Get this `projectId` from `publishParams` after you save a project. Refer to the [callbacks](#callbacks) sections.
| Property | Type |
| :-- | :--|
| projectId| string

---
## ExportOption
Allows you to define export buttons and groups for a Quick Action. All the properties are optional. Must be specified in [QuickActionsInputParams](#quickactioninputparams) - it can be an empty array.


### ExportButton 
This interface describes the base object that is used to render a button once the quick action has completed the action.  

| Property | Value | Description
| :-- | :--|:--
|optionType| "button" | QA renders single standalone button
|[label](#label)| string | Export label name
|variant | "cta"/"primary"/"secondary" | Defines the [style](https://spectrum.adobe.com/page/button/) of a button.
| buttonType | 'native' | Type of export button ([Native](#nativeexportbutton-render-a-native-button))
| optionType | 'button' | Type of ExportOption 

#### __label__
"label" defaults to "Customize" when the target is "Editor" and "Download" when the target is "Download".

### NativeExportButton: Render a Native Button

This interface describes an object that is used to render a native button once the quick action has completed the action.
| Property | Value | Description
| :-- | :--|:--
| context (optional) | 'default' | Uses default mechanism of handling button click
|          | 'new' | QA handles button click in a new tab/window
|target | 'Download' | On click will download the asset
|  | 'Editor' | On click will open the asset in CCX
| buttonType | 'native' | Type of button

### Example
```
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
## QuickActionInputParams

Allows you to specify the asset and export buttons/groups you want to perform a Quick Action with. 
| Property | Type |
| :-- | :--|
| asset | [Asset](#asset)
| exportOption | [ExportOption](#export-option)

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