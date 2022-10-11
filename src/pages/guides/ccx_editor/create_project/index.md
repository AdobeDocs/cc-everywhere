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

# Adobe Express Editor Component: Create New Project

This guide will demonstrate how to launch an Adobe Express editor component. The editor will appear in an iframe and open a new project in a folder named `appName`, as specified when the SDK is initialized.

## createDesign()
The [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes the `createDesign()` method, which loads the editor component in an iframe. 

#### Flow: 
* User triggers `createDesign()` function from within the host application, and an editor is loaded in an iframe.
* A pop-up window will appear and the user has to create or log into their Adobe Express account. 
* Any projects are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) within Adobe Express.

```js
// Initialize SDK and save CCEverywhere object as ccEverywhere 
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
            canvasAspectId: "1:2",
            templateType: "Flyers",
        }
    }
); 
```


### [CreateDesignParams](../../../reference/ccx_editor/index.md#createdesignparams)
`createDesign()` takes an object of parameters, `CreateDesignParams`, composed of:

| Property | Description | Type 
| :-- | :-- | :--
| modalParams | Define size of editor modal | [ModalParams](../../../reference/shared_types/index.md#modalparams)
| inputParams | Specify template layout ratio, template types, template search | [CreateInputParams](../../../reference/ccx_editor/index.md#createinputparams) 
| outputParams | Configure output type | [CCXOutputParams](../../../reference/shared_types/index.md#ccxoutputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks) 
  
<!-- todo: confirm this is true:  -->
All the properties in `CreateDesignParams` are optional. 

## Example 

#### Step 1: User clicks the "Create project" button
* The `createDesign()` function is called and passed `createDesignCallback`. 
* An Express editor component is launched in an iframe. 

#### Step 2: User completes design and clicks "Save"
* The project is saved to the user's Express account in project folder (`appName`) designated in the [initialize()](../../../reference/index.md#initialize) function.
* The `onPublish` callback function is called. It passes the host application an object `publishParams` that includes the __Express project ID (projectId)__ and __image data representation (asset)__. 
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

    <script src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"></script>
    <script type="text/javascript">

    /* Initialize projectId to null until it gets set by onPublish callback */
    var projectId = null;
    
    var imageContainer = document.getElementById("image-container");
    const createButton = document.getElementById("create-project-button");
    
    (() => {
        if (!window.CCEverywhere) {
            return;
        }
        const ccEverywhere = window.CCEverywhere.initialize({
            clientId: YOUR_CLIENT_ID,
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web', 
            redirectUri: YOUR_REDIRECT_URI
        });
    })();
    

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
    </script>
  </body> 
</html>
```
Now that you have created a project and rendered the final design onto your own page, let's explore [loading pre-existing projects](../edit_project/index.md) into an Adobe Express editor. 

