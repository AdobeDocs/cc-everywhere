# CCX Editor: Editing an existing project

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
## Edit Project in CCX Editor: Edit Project API
Users are able to keep working on existing projects within the editor, using our Edit Project API. 

  
  - [Callbacks](#callbacks)
  - [Example](#example)

The CCEverywhere Object exposes a `editDesign()` method. The CCX project ID is the `project` property of `publishParams` from the `onPublish` callback. To call the `editDesign` method, you need to pass it the associated CCX project ID.

```
ccEverywhere.editDesign(
    {
        inputParams: { 
            projectId: PROJECT_ID 
        },
        callbacks: {
            onCancel: () => {},
            onPublish: (publishParams) => {},
            onError: (err) => {},
        },
        modalParams: {},
        outputParams: { 
            fileType: [FORMAT]
        },
    }
);
```
Read more about each parameter in the [API references](api_ref.md).
#
## Callbacks


#
## Example
__Notes__:
* inputParams is a required field
<br></br>
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="text/javascript" src="./CCEverywhere.js"></script>
    <body>
    <button id="editDesign">Edit project</button>
    <img id="savedDesign" height="420" width="420" />

    <script type="text/javascript">
        var PROJECT_ID = null;
        var IMAGE_DATA = document.getElementById("savedDesign");

        const editButton = document.getElementById("editDesign");
        editButton.onclick = () => {
            const editDesignCallback = {
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
            ccEverywhere.editDesign(
                {
                    inputParams: { projectId: PROJECT_ID },
                    callbacks: editDesignCallback
                }
            );
        }
    </script>
  </body> 
</html>
```

