# Creating a Project

## Table of Contents
* [Overview](overview.md)
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
Users can launch a new project in a CCX editor, using the Create Project API.

  - [Callbacks](#callbacks)
  - [Example](#example)
 

The CCEverywhere Object exposes this API with the `createDesign()` method.
* If the user has not logged in yet, a pop-up window will appear and the user has to create or log into their CCX account. 
* Any projects you create and save in the editor are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) within CC Express. 
  <br></br>

The `createDesign()` method takes an object of parameters: `CreateDesignParams`. `CreateDesignParams` has 4 properties: 
* modalParams: determines size of CCX editor modal
* inputParams: canvasAspectId, template types, template search
* outputParams: output file format
* [Callbacks](#callbacks) 

All the properties in `CreateDesignParams` are optional. You will probably want to add some code to your `onPublish` callback to send the image data and project ID information back to your own app.
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
            fileType: [FORMAT]
        },
        inputParams: { 
            canvasAspectId: [LAYOUT- make copy and pasteable],
            templateType: [TEMPLATE_TYPE],
            templateSearchText: [TEMPLATE_SEARCH]
        }
    }
); 
```
Read the [API reference](api_ref.md) for more details about each of these parameters. 

#
## Callbacks
1. `onClose` 
   
    Whenever the user closes the CCX editor, this callback is triggered and the host application can receive .
2. `onPublish` 

    Whenever the user saves a project, onPublish is called with a PublishParams object. onPublish is passed the project ID that was used for generating the asset, and the final asset that has been created. 
      * The Asset object will have properties for type (asset format), dataType (base64 or url), 
      * As of right now, only base64 is supported.

3. `onError` 

    Any time there is an API error or authentication error, onError will be called with the associated error code.
#
## Example
__Notes__:
- When `onPublish` is called, we save the project ID so we can pass it to the [Edit Project API](edit_project.md) later if we want to modify the same project later.
- "savedDesign" is the id of an image element, and its source tag is updated to reflect user's project creations and edits. "createDesign" is the id of a button element, and click events on this button launch the editor. 

When the "createDesign" button is clicked, the Create Project API is called and the CCX editor should be launched in a modal. 
<br></br>

add comments throughout code 
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <body>
    <button id="createDesign">Create project</button>
    <img id="savedDesign" height="420" width="420" />

    <script type="text/javascript">
        var PROJECT_ID = null;
        var IMAGE_DATA = document.getElementById("savedDesign");
        const createButton = document.getElementById("createDesign");

        createButton.onclick = () => {
            const createDesignCallback = {
                onCancel: () => {},
                onPublish: (publishParams) => {
                    const localData = { 
                        project: publishParams.projectId, 
                        image: publishParams.asset.data 
                    };
                    IMAGE_DATA.src = localData.image;
                    PROJECT_ID = localData.project; 
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
