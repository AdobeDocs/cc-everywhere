# CCX Editor: Editing an existing project

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
## Edit Project in CCX Editor: Edit Project API
Users are able to keep working on existing projects within the editor, using our Edit Project API. The CCEverywhere Object exposes a `editDesign()` method. 
* The CCX project ID is the `project` property of `publishParams` from the `onPublish` callback. 
* To call this API, you must pass the associated CCX project ID to `editDesignParams`.

>`editDesign(editDesignParams: EditDesignParams) => void`

This function edits an existing design using CCEverywhere and takes an object of parameters, `editDesignParams`:
* [modalParams](api_ref.md#modalparams): determines size of CCX editor modal
* [inputParams](api_ref.md#editinputparams): projectId
* [outputParams](api_ref.md#ccxoutputparams): output type
* [Callbacks](api_ref.md#callbacks) 

```
ccEverywhere.editDesign(
    {
        // inputParams is the only REQUIRED parameter
        inputParams: { 
            projectId: CCX_PROJECT_ID 
        },
        callbacks: {
            onCancel: () => {},
            onPublish: (publishParams) => {},
            onError: (err) => {},
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
## Callbacks
1. `onClose` 
   
    Whenever the user closes the CCX editor, this callback is triggered and the host application can receive .
2. `onPublish` 

    Whenever the user saves a project, onPublish is called with a PublishParams object. onPublish is passed the project ID that was used for generating the asset, and the final asset that has been edited. 
      * The Asset object will have properties for type (asset format), dataType (base64 or URL) 
      * As of right now, only base64 is supported.

3. `onError` 

    Any time there is an API error or authentication error, onError will be called with the associated error code.

#
## Example
When the "editDesign" button is clicked, the Edit Project API is passed the current projectId saved as a global variable and the CCX editor launches that project in a modal.
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Edit Project Sample</title>
  </head>  
  <body>
    <button id="editDesign">Edit project</button>
    <img id="savedDesign" height="420" width="420" />

    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <script type="text/javascript">
        // Set to null until CCEverywhere object is initialized
        var ccEverywhere = null;
        var projectId = ***set by createDesign onPublish earlier***
        var imageData = document.getElementById("savedDesign");

        const editButton = document.getElementById("editDesign");

        onload = () => {
            // checks if SDK has been initialized
            if (ccEverywhere == null){
                ccEverywhere = CCEverywhere.default.initialize(
                    {
                        clientId: YOUR_CLIENT_ID
                        appName: PROJECT_NAME,
                        appVersion: { major: 1, minor: 0 },
                        platformCategory: 'web'
                    }
                );
            }
            // When the window reloads, check if code is returned. 
            // IF Y, exchange code for token for user so they don't have to log in again
            // If N, print error.
            const urlParams = new URLSearchParams(window.location.href);
            const authCode = urlParams.get('code');
            const error = urlParams.get('error');
            if (authCode || error ) {
                if (error){
                    console.log('Error present:', error)
                }
                // exchange auth code for token 
                ccEverywhere.exchangeAuthCodeForToken();
            }
        }

        editButton.onclick = () => {
            const editDesignCallback = {
                onCancel: () => {},
                onPublish: (publishParams) => {
                    // User clicked "Save" - done modifying project
                    // Save modified image data and projectId 
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

