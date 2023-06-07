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
  - Create Express project 
  - createDesign()
title: Adobe Express Editor - Create New Project
description: This guide will show you how users can start working on new projects in an Adobe Express editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2.

Instead, we would love for you to start testing the new version of the SDK. To join the private beta and get early access to documentation, please fill out [this form](https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true).

# Creating new projects using the full editor

This guide will demonstrate how to launch a full editor component. The editor will appear in an iframe and create a new project in a folder named `appName`, as specified when the SDK is initialized.

## createDesign()

The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `createDesign()` method, which loads the editor component in an iframe.

#### Flow

* User triggers `createDesign()` function from within the host application, and an editor is loaded in an iframe.
* A pop-up window will appear and the user has to create or log into their Adobe Express account.
* Any projects are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) in the user's Adobe Express account.

```js
// Initialize the SDK before this 
ccEverywhere.createDesign(
    // CreateDesignParams
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
            outputType: "base64"
        },
        inputParams: { 
            canvasSize: "1:2",
            templateType: "Flyers",
            // You can also load an image into the project 
            // asset : "..."
        }
    }
); 
```

### [CreateDesignParams](../../../reference/full_editor/index.md#createdesignparams)

`createDesign()` takes an object of parameters, `CreateDesignParams`, composed of:

| Property | Description | Type
| :-- | :-- | :--
| modalParams | Define size of editor modal | [ModalParams](../../../reference/shared_types/index.md#modalparams)
| inputParams | Specify input asset, template layout ratio, template types, template search | [CreateInputParams](#createinputparams)
| outputParams | Configure output type | [CCXOutputParams](../../../reference/shared_types/index.md#ccxoutputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks)
  
All the properties in `CreateDesignParams` are optional.

#### CreateInputParams

`CreateInputParams` allows you to configure the editor to be launched for the user.

| Property | Type| Description
| :-- | :--| :--
| canvasSize| string | Initializes the editor loaded with templates that fit that layout ratio
| templateType | string | Initializes the editor loaded with templates of this specified type
| templateSearchText | string | Initializes the editor with this string value for template search
| asset | [Asset](../../../reference/shared_types/index.md#asset) | Asset object that contains the base64-encoded image data you want the editor to open

To see the full list of canvas template layout ratios and template types, see the [customization](../../guides/full_editor/customization/index.md) page.

## Example

#### Step 1: User clicks the "Create project" button

* The `createDesign()` function is called and passed `createDesignCallback`.
* A full editor component is launched in an iframe.

#### Step 2: User completes design and clicks "Save"

* The project is saved to the user's Adobe Express account in project folder (`appName`) designated in the [initialize()](../../../reference/index.md#initialize) function.
* The `onPublish` callback function is called. It passes the host application an object `publishParams` that includes the Adobe Express __project ID (projectId)__ and __image data (asset)__.
  * The asset is saved and displayed in the image tag `image-container`. The associated project ID is also saved in a global variable so that we can pre-load it in an editor component later via `editDesign()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Create Project Sample</title>
  </head>  
  <body>
    <button id="create-project-button">Create project</button>
    <img id="image-container" height="420" width="420" />

    <script src="https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js"></script>
    <script type="text/javascript">
    
    (async () => {
        const ccEverywhere = await window.CCEverywhere.initialize({
            clientId: YOUR_CLIENT_ID,
            appName: YOUR_PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web', 
        });

         /* Initialize projectId to null until it gets set by onPublish callback */
        var projectId = null;
        
        var imageContainer = document.getElementById("image-container");
        const createButton = document.getElementById("create-project-button");

        const createButton = document.getElementById("create-project-button");
        createButton.addEventListener('click', () => {
            const createDesignCallback = {
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
            
            ccEverywhere.createDesign(
                {
                    callbacks: createDesignCallback, 
                    outputParams: {
                        outputType: "base64",
                    }
                }
            );  
        });
    })();
    </script>
  </body> 
</html>
```

Now that you have created a project and rendered the final design onto your own page, let's explore [loading pre-existing projects](../edit_project/index.md) into a full editor component.
