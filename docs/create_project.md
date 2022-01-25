# Creating a Project

## Table of Contents
* [Overview](../README.md)
* [Configuration](configuration.md)
* [Local Development](local_dev.md)
* [Quick Start](quickstart.md)
* CCX Editor Component
  * [Create Project API](create_project.md)
  * [Open Project API](edit_project.md)
* [API References](api_ref.md)
* [Customization](customization.md)
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
* [Callbacks](api_ref.md#callbacks) 

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
All the properties in `CreateDesignParams` are optional. You will probably want to add some code to your `onPublish` callback to send the image data and project ID information back to your own app. The longer example at the bottom demonstrates this.Read the [API reference](api_ref.md) for more details about each of these parameters. 

#
## Callbacks
1. `onClose` 
   
    Whenever the user closes the CCX editor, this callback is triggered and the host application can receive .
2. `onPublish` 

    Whenever the user saves a project, onPublish is called with a PublishParams object. onPublish is passed the project ID that was used for generating the asset, and the final asset that has been created. 
      * The Asset object will have properties for type (asset format), dataType (base64 or URL) 
      * As of right now, only base64 is supported.

3. `onError` 

    Any time there is an API error or authentication error, onError will be called with the associated error code.
#
## Example 

When the "createDesign" button is clicked, the Create Project API is called and the CCX editor should be launched in a modal. 

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Create Project Sample</title>
  </head>  
  <body>
    <button id="createDesign">Create project</button>
    <img id="savedDesign" height="420" width="420" />

    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <script type="text/javascript">
        // Initialize to null until it gets set by onPublish callback
        var projectId = null;
        var imageData = document.getElementById("savedDesign");
        const createButton = document.getElementById("createDesign");

        createButton.onclick = () => {
            const createDesignCallback = {
                onCancel: () => {},
                onPublish: (publishParams) => {
                    // User clicked "Save"
                    // Save image data to render in sample, save projectId for editing later
                    const localData = { 
                        project: publishParams.projectId, 
                        image: publishParams.asset.data 
                    };
                    imageData.src = localData.image;
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
- When `onPublish` is called, we save the project ID in a global variable `projectId` so we can use it to modify the same project later.
- "savedDesign" is the ID of an image element, and its source tag is updated to reflect user's project creations and edits. "createDesign" is the ID of a button element, and click events on this button launch the editor.

Now that you have created a project and rendered the final design onto your own page, let's explore the [Edit Project API](edit_project.md) to see how you can launch the editor to make changes to existing projects.