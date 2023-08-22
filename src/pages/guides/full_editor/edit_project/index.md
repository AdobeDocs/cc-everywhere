---
keywords:
  - Express Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Editor component 
  - Edit project 
  - editDesign()
title: Adobe Express Editor - Edit Project
description: This guide will show you how users can continue working on existing projects in an Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---
<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2.

Instead, we would love for you to start integrating the new version of the SDK. To join the private beta and get early access to documentation, please fill out [this form](https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true).

# Launching existing projects in the full editor

This guide will demonstrate how to launch a full editor component. The editor will appear in an iframe, pre-loaded with a specified Adobe Express project.

## editDesign()

The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `editDesign()` method, which loads the full editor component in an iframe, with an existing project pre-loaded.

#### Flow

* User triggers `editDesign()` function from within the host application, and the full editor is loaded in an iframe.
* To pre-load the editor with an existing project, you must pass the associated project ID to `editDesignParams`. This ID is returned in the `project` property of `publishParams` from the `onPublish` callback.

```js
// Initialize SDK and save CCEverywhere object as ccEverywhere 
ccEverywhere.editDesign(
    {
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
            outputType: "base64"
        },
    }
);
```

### [EditDesignParams](../../../reference/full_editor/index.md#editdesignparams)

`editDesign()` takes an object of parameters, `editDesignParams`, composed of:

| Property | Description | Type
| :-- | :-- | :--
| modalParams | Define size of editor modal | [ModalParams](../../../reference/types/index.md#modalparams)
| inputParams| Adobe Express project ID to initialize editor component | [EditInputParams](../../../reference/full_editor/index.md#editinputparams)
| outputParams | Configure output type | [CCXOutputParams](../../../reference/types/index.md#ccxoutputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/types/index.md#callbacks)

<!-- todo: confirm there's not more:  -->
The only required property is `inputParams.projectId`.

## Example

#### Step 1: User clicks the "Edit project" button

* The `editDesign()` function is called and passed `inputParams.projectId`, a set of callback functions in `editDesignCallback`.
* An Adobe Express editor component is launched in an iframe, pre-loaded with that Adobe Express project.

#### Step 2: User finishes design and clicks "Save"

* The project is again saved to the user's Adobe Express account in project folder `appName` as specified in the [initialize()](../../../reference/index.md#initialize) function.
* The `onPublish` callback function is called. It passes the host application an object `publishParams` that includes the __Adobe Express project ID (projectId)__ and __image data representation (asset)__.
  * The asset is saved and displayed in the image tag `image-container`. The associated project ID is also saved in a global variable so that we can pre-load it in an editor component later again via `editDesign()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Edit Project Sample</title>
  </head>  
  <body>
    <button id="edit-project-button">Edit project</button>
    <img id="image-container" height="420" width="420" />

    <script src="https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js"></script>
    <script type="text/javascript">

    (async () => {
        const ccEverywhere = await window.CCEverywhere.initialize({
            clientId: YOUR_CLIENT_ID,
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web', 
        });

        // projectId should be saved from an earlier call to createDesign
        var projectId = SAVED_CCX_PROJECT_ID;
        var imageContainer = document.getElementById("image-container");
        const editButton = document.getElementById("edit-project-button");
        
        editButton.addEventListener('click', () => {
            const editDesignCallback = {
                onCancel: () => {},
                onPublish: (publishParams) => {
                    const localData = { project: publishParams.projectId, image: publishParams.asset.data };
                    imageContainer.src = localData.image;
                    projectId = localData.project;
                },
                onError: (err) => {
                    console.error('Error received is', err.toString());
                },
            };
            ccEverywhere.editDesign(
                {
                    inputParams: { projectId: projectId },
                    callbacks: editDesignCallback
                }
            );
        });
    })();    
    </script>
  </body> 
</html>
```
