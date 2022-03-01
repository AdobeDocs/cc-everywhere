# CCX Editor: Editing an existing project

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
#
## Edit Project in CCX Editor: Open Project API
Users are able to keep working on existing projects within the editor, using our Open Project API. The CCEverywhere Object exposes a `editDesign()` method. 
* The CCX project ID is the `project` property of `publishParams` from the `onPublish` callback. 
* To call this API, you must pass the associated CCX project ID to `editDesignParams`.

>`editDesign(editDesignParams: EditDesignParams) => void`

This function edits an existing design using CCEverywhere and takes an object of parameters, `editDesignParams`:
* [modalParams](api_ref.md#modalparams): determines size of CCX editor modal
* [inputParams](api_ref.md#editinputparams): projectId
* [outputParams](api_ref.md#ccxoutputparams): output type
* [callbacks](api_ref.md#callbacks) 

```js
ccEverywhere.editDesign(
    {
    /* inputParams.projectId is the only required parameter */
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
Read more about each parameter in the [API references](api_ref.md).

#
## Example
When the "editButton" button is clicked, the Open Project API is passed the current projectId saved as a global variable and the CCX editor launches that project in a modal.
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
            platformCategory: 'web'
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

