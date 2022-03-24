---
title: CCX Editor - Create New Project
description: This guide will show you how users can start working on new projects in a CCX editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Creating New Project

This guide will demonstrate how to launch a CCX editor with a new project.

## createDesign()
You can launch a CCX editor with a new project, using the `createDesign()` method. 

Flow: 
* User triggers `createDesign()` function from within your application, and a CCX editor is loaded in an iframe.
* A pop-up window will appear and the user has to create or log into their CCX account. 
* Any projects are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) within CCX.

```js
createDesign(createDesignParams: CreateDesignParams) => void
```

This function takes an object of parameters, `createDesignParams`, composed of:

<!-- TODO: fix reference links -->
* [modalParams](../../../reference/shared_types/index.md#modalparams): determines size of CCX editor modal
* [inputParams](../../../reference/ccx_editor/index.md#createinputparams) canvasAspectId, template types, template search
* [outputParams](../../../reference/shared_types/index.md#ccxoutputparams): output type
* [callbacks](../../../reference/shared_types/index.md#callbacks) 

```js
// Initialize SDK and save CCEverywhere object as ccEverywhere 
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
            outputType: "base64"
        },
        inputParams: { 
            canvasAspectId: "1:2",
            templateType: "Flyers",
        }
    }
); 
```
All the properties in `CreateDesignParams` are optional. You will probably want to add some code to your `onPublish` callback to send the image data and project ID information back to your own app. The longer example at the bottom demonstrates this. 

## Example 

When the "createDesign" button is clicked, the CCX editor is launched in an iframe. 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Create Project Sample</title>
  </head>  
  <body>
    <button id="create-project-button">Create project</button>
    <img id="image-container" height="420" width="420" />

    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <script type="text/javascript">

    /* Initialize projectId to null until it gets set by onPublish callback */
    var projectId = null;
    /* Set to null until CCEverywhere object is initialized */
    var ccEverywhere = null;
    var imageContainer = document.getElementById("image-container");
    const createButton = document.getElementById("create-project-button");
        
    ccEverywhere = CCEverywhere.default.initialize(
        {
            clientId: YOUR_CLIENT_ID,
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web', 
            redirectUri: YOUR_REDIRECT_URI
        }
    );

    createButton.onclick = () => {
        const createDesignCallback = {
            onCancel: () => {},
            onPublish: (publishParams) => {
                /* User clicked "Save"
                   Save image data to render in sample
                   Save projectId for editing later */
                const localData = { 
                    project: publishParams.projectId, 
                    image: publishParams.asset.data 
                };
                imageContainer.src = localData.image;
                projectId = localData.project; 
            },
            onError: (err) => {
                console.error('Error received is', err.toString());
            },
        };
    
        ccEverywhere.createDesign(
            {
                callbacks: createDesignCallback
            }
        );  
    }
    </script>
  </body> 
</html>
```
__Notes__:
- When `onPublish` is called, we save the project ID in a global variable `projectId` so that we can pre-load it when invocating the Open Project API later.
- "imageContainer" is the ID of an image element, and its source tag is updated to reflect the created project, once saved. 
- "create-project-button" is the ID of a button element, and click events on this button launch the editor.


Now that you have created a project and rendered the final design onto your own page, let's explore [loading pre-existing projects](../edit_project/index.md) into a CCX editor. 

