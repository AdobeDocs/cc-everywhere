---
title: CCX Editor - Edit Project
description: This guide will show you how users can continue working on existing projects in a CCX editor. 
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Editing Existing Project

This guide will show you how to launch a CCX editor with an existing project already loaded in.  

## editDesign()
You can launch a CCX editor with an existing project, using the `editDesign()` method. 

Flow: 
* A CCX project ID is returned in the `project` property of `publishParams` from the `onPublish` callback. 
* To launch the editor, you must pass the associated CCX project ID to `editDesignParams`.

```js
editDesign(editDesignParams: EditDesignParams) => void
```

This function takes an object of parameters, `editDesignParams`, composed of:

<!-- TODO: fix reference links -->
* [modalParams](../../../reference/shared_types/index.md#modalparams): determines size of CCX editor modal
* [inputParams](../../../reference/ccx_editor/index.md#editinputparams): projectId
* [outputParams](../../../reference/shared_types/index.md#ccxoutputparams): output type
* [callbacks](../../../reference/shared_types/index.md#callbacks) 

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
The only required property is `inputParams.projectId`.

## Example
When the "editButton" button is clicked, the CCX editor is launched in an iframe.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Edit Project Sample</title>
  </head>  
  <body>
    <button id="edit-project-button">Edit project</button>
    <img id="image-container" height="420" width="420" />

    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <script type="text/javascript">
    /* Set to null until CCEverywhere object is initialized */
    var ccEverywhere = null;
    var projectId = <set by createDesign onPublish earlier>
    var imageContainer = document.getElementById("image-container");

    const editButton = document.getElementById("edit-project-button");

    ccEverywhere = CCEverywhere.default.initialize(
        {
            clientId: YOUR_CLIENT_ID
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web', 
            redirectUri: YOUR_REDIRECT_URI
        }
    );

    editButton.onclick = () => {
        const editDesignCallback = {
            onCancel: () => {},
            onPublish: (publishParams) => {
            /* User clicked "Save" - done modifying project.
            Save modified image data and projectId */
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
        ccEverywhere.editDesign(
            {
                inputParams: { projectId: projectId },
                callbacks: editDesignCallback
            }
        );
    }
    </script>
  </body> 
</html>
```

