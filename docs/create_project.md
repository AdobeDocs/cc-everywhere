# Creating a Project
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
## Create Project in CCX Editor: Create Project API
Users can launch a new project in a CCX editor, using the Create Project API. The CCEverywhere Object exposes this API with the `createDesign()` method.
* If the user has not logged in yet, a pop-up window will appear and the user has to create or log into their CCX account. 
* Any projects you create and save in the editor are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) within CC Express. 


>`createDesign(createDesignParams: CreateDesignParams) => void`

This function creates a new design using CCEverywhere and takes an object of parameters, `createDesignParams`:

* [modalParams](api_ref.md#modalparams): determines size of CCX editor modal
* [inputParams](api_ref.md#createinputparams) canvasAspectId, template types, template search
* [outputParams](api_ref.md#ccxoutputparams): output type
* [callbacks](api_ref.md#callbacks) 

```js
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
All the properties in `CreateDesignParams` are optional. You will probably want to add some code to your `onPublish` callback to send the image data and project ID information back to your own app. The longer example at the bottom demonstrates this.Read the [API reference](api_ref.md) for more details about each of these parameters. 

#
## Example 

When the "createDesign" button is clicked, the Create Project API is called and the CCX editor should be launched in a modal. 

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
            platformCategory: 'web'
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
- "imageContainer" is the ID of an image element, and its source tag is updated to reflect user's project creations and edits. "create-project-button" is the ID of a button element, and click events on this button launch the editor.


Now that you have created a project and rendered the final design onto your own page, let's explore the [Open Project API](edit_project.md) to see how you can load pre-existing projects into editors. 

