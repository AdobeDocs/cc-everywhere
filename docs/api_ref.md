# API References

- [API References](#api-references)
  - [initialize()](#initialize)
    - [HostInfo](#hostinfo)
    - [ConfigParams](#configparams)
  - [CCEverywhere: Class Constructor](#cceverywhere-class-constructor)
  - [createDesign()](#createdesign)
  - [editDesign()](#editdesign)
- [Shared Types](#shared-types)
  - [ModalParams](#modalparams)
  - [CreateInputParams](#createinputparams)
  - [EditInputParams](#editinputparams)
  - [CCXOutputParams](#ccxoutputparams)
  - [Callbacks](#callbacks)
- [Table of Contents](#table-of-contents)
#
## initialize()
The top-level module exposed by the SDK is `CCEverywhere`. Its default method `initialize()` is the main API used for initializing the SDK. Make sure to call it only once a page. This method returns a [CCEverywhere](#cceverywhere-object) object. 

* `default: { initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => null | CCEverywhere }` 

__Parameters__: 
- hostInfo: [HostInfo](#hostinfo)
- (optional) configParams: [ConfigParams](#configparams)

### HostInfo

---
All four properties are required fields.
| Property | Type | Description
| :-- | :--| :--
|clientId | string | your API Key
|appName | string | your app name*
|appVersion | { major: #, minor: #, patch: #} | your app version
| platformCategory | string | 'web'

```
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web'
    }
```
A folder named `appName` is created in the user's CCX account, and projects they make will be saved there.

### ConfigParams

---
This is an optional field, and defaults to 'en_US' if nothing is specified.
| Property | Type |
| :-- | :--|
|locale | string

```
    {
        locale: 'en_US',
    }
```
See [customization](customization.md) for full locale list. 


## CCEverywhere: Class Constructor 
A CCEverywhere object can also be initialized and returned using a constructor.
* `new CCEverywhere(hostInfo: HostInfo, configParams: ConfigParams)  => CCEverywhere`

The CCEverywhere object exposes two APIs via the following methods: 
* Create Project API - [createDesign()](#createdesign)
* Edit Project API - [editDesign()](#editdesign)



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
```
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
```
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



# Shared Types 

## ModalParams
Allows you to define the UI constraints of the CCX editor modal dialog. All the properties are optional.

| Property | Type/Value |
| :-- | :--|
|parentElementId| string
|size | { width: #, height: #, unit: "px"/"in"/"mm"}
| padding | number
| borderRadius | number
| colorTheme | "lightest", "light", "dark" or "darkest"
| spectrumTheme | "spectrum", "express"
| scale | "medium", "large"
<br></br>

---

## CreateInputParams
Allows you to specify the canvas template layout ratio, canvas template type, and the search text to pass in the target application (CCX Editor Component, etc). All the properties are optional. To see the full list of canvas template layout ratios and template types, see the [customization](customization.md) page.
| Property | Type/Value |
| :-- | :--|
| canvasAspectId| string
| templateType | string
| templateSearchText | string
<br></br>

---

## EditInputParams
Allows you to specify the project ID the target application (CCX Editor Component, etc). 
| Property | Type |
| :-- | :--|
| projectId| string
<!-- | asset | (for quick actions- uploads) -->

You get this `projectId` from `publishParams` after you save a project. Refer to the [callbacks](#callbacks) sections.
<br></br>

---

## CCXOutputParams
All properties are optional. As of this version, the only supported output type is a base64 rendition of the project. 
| Property | Value |
| :-- | :--|
| outputType | "base64"
| fileType | "jpeg", "png", "gif", or "pdf"
<br></br>

---

## Callbacks
All the callbacks are optional and return void. 
The only callback function that is passed parameters is PublishCallback: `publishParams`. 

Parameters for `publishParams`: 
* projectId: string
* asset: string (base 64 representation of output)
  
| Property | Callback Function |
| :-- | :--|
| onLoadStart | LoadStartCallback
| onLoad | LoadCallback
| onCancel | CancelCallback
| onPublishStart | PublishStartCallback
| onPublish | **PublishCallback**
| onError | ErrorCallback`<ErrorCode>`
<br></br>


--- 

# Table of Contents
* [Overview](../README.md)
* [Configuration](configuration.md)
* [Local Development](local_dev.md)
* [Quick Start](quickstart.md)
* [CCX Editor Component](#ccx-editor-component)
  * [Create Project API](create_project.md)
  * [Open Project API](edit_project.md)
* [API References](api_ref.md)
* [Customization](customization.md)