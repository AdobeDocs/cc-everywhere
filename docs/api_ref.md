# API References

- [API References](#api-references)
  - [CCEverywhere SDK](#cceverywhere-sdk)
    - [Default method: initialize()](#default-method-initialize)
    - [HostInfo](#hostinfo)
    - [ConfigParams](#configparams)
  - [CCEverywhere Class](#cceverywhere-class)
    - [createDesign()](#createdesign)
    - [editDesign()](#editdesign)
  - [Shared Types](#shared-types)
    - [ModalParams](#modalparams)
    - [CreateInputParams](#createinputparams)
    - [CCXOutputParams](#ccxoutputparams)
    - [Callbacks](#callbacks)
  - [Table of Contents](#table-of-contents)
#
## CCEverywhere SDK
The top-level module exposed by the SDK is `CCEverywhere`. Its default method `initialize()` is the main API used for initializing the SDK. Make sure to call it only once a page. This method returns a [CCEverywhere](#cceverywhere-object) object. 

### Default method: initialize()
* `default: { initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => null | CCEverywhere }` 

__Parameters__: 
- hostInfo: [HostInfo](#hostinfo)
- configParams: [ConfigParams](#configparams)
<br></br> 

### HostInfo
The HostInfo is required for initialization.
| Property | Type |
| :-- | :--|
|clientId | string
|appName | string
|appVersion | { major: #, minor: #, patch: #}
| platformCategory | string
<br></br>

### ConfigParams
| Property | Type |
| :-- | :--|
|locale | string

See [customization](customization.md) for full locale list. 
<br></br>

#
## CCEverywhere Class

A CCEverywhere object can also be initialized using a constructor.
* `new CCEverywhere(hostInfo: HostInfo, configParams: ConfigParams)  => CCEverywhere`

The CCEverywhere object exposes two APIs via the following methods: 
* Create Project API - [createDesign()](#create-project-api)
* Edit Project API - [editDesign()](#edit-project-api)
<br></br>

### createDesign()

This method takes an object of parameters, `CreateDesignParams`:

__`createDesignParams`__:
- modalParams: [ModalParams](#modalparams)
- inputParams: [CreateInputParams](#createinputparams)
- outputParams: [CCXOutputParams](#ccxoutputparams)
- callbacks: [Callbacks](#callbacks)

The function returns void.
<br></br>

### editDesign()

This method takes an object of parameters, `EditDesignParams`:

__`editDesignParams`__:
- modalParams: [ModalParams](#modalparams)
- inputParams: [CreateInputParams](#createinputparams)
- outputParams: [CCXOutputParams](#ccxoutputparams)
- callbacks: [Callbacks](#callbacks)

The function returns void.
<br></br>
#

## Shared Types 

### ModalParams
Allows you to define the UI constraints of the CCX editor modal dialog. All the properties are optional.

| Property | Type |
| :-- | :--|
|parentElementId| string
|size | { width: #, height: #, unit: "px"/"in"/"mm"}
| padding | number
| borderRadius | number
| colorTheme | "lightest", "light", "dark" or "darkest"
| spectrumTheme | "spectrum", "express"
| scale | "medium", "large"

<br></br>

### CreateInputParams
Allows you to specify the canvas template layout ratio, canvas template type, and the search text to pass in the target application (CCX Editor Component, etc). All the properties are optional. 
| Property | Type |
| :-- | :--|
| canvasAspectId| string
| templateType | string
| templateSearchText | string

To see the full list of canvas template layout ratios and template types, see the [customization](customization.md) page.
<br></br>

### CCXOutputParams
All properties are optional.
| Property | Value |
| :-- | :--|
| outputType | "base64"
| fileType | "jpeg", "png", "gif", or "pdf"
<br></br>

### Callbacks
All properties are optional.
| Property | Callback Function |
| :-- | :--|
| onLoadStart | LoadStartCallback
| onLoad | LoadCallback
| onCancel | CancelCallback
| onPublishStart | PublishStartCallback
| onPublish | **PublishCallback**
| onError | ErrorCallback`<ErrorCode>`

All the callbacks return void. 
The only callback function that is passed parameters is PublishCallback: `publishParams`. 

Parameters for `publishParams`: 
* projectId: string
* asset: string (base 64 representation of output)

<br></br>

#
## Table of Contents
* [Overview](overview.md)
* [Configuration](configuration.md)
* [Local Development](local_dev.md)
* [Quick Start](quickstart.md)
* [CCX Editor Component](#ccx-editor-component)
  * [Create Project API](create_project.md)
  * [Open Project API](edit_project.md)
* [API References](api_ref.md)
* [Customization](customization.md)