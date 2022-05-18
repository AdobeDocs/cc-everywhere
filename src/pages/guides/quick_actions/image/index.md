---
title: Image Quick Actions
description: This guide will demonstrate how to trigger a Quick Actions editor for images.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Image Quick Actions

Each Image Quick Actions component is loaded into the host application as an iframe, like the CCX editor component. It can be launched with an image asset attached (jpg/png). If no input asset is provided, the modal will automatically prompt the user to browse their device for a image file. 


## openQuickAction()
After the SDK has been initialized, the [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes these Image Quick Actions via the `openQuickAction()` method. 

```js
ccEverywhere.openQuickAction(
    // QuickActionsParams
    {
        id: 'image-crop', 
        inputParams: {
            exportOptions: []
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
    }
)
```

### [QuickActionParams](../../../reference/quick_actions/index.md#quickactionparams)
`openQuickAction()` takes an object `QuickActionParams` with 4 parameters:

| Property | Description | Type 
| :-- | :-- | :--
| id | Choose Quick Actions component| [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
| inputParams | [Launch with asset](../../../reference/shared_types/index.md#asset) and [export options](../../../reference/quick_actions/index.md#exportoption) | [QuickActionInputParams](../../../reference/quick_actions/index.mdquickactioninputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks)
| modalParams | Define size of QA iframe |  [ModalParams](../../../reference/shared_types/index.md#modalparams)

Only `id` and `inputParams.exportOptions` is required to initialize the iframe.

### [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
Identifies which Image Quick Actions component should be loaded into the iframe.

| Quick Action | QuickActionId
| :-- | :-- 
| Crop Image | 'image-crop'
| Convert to JPG | 'convert-to-jpg'
| Convert to PNG | 'convert-to-png'
| Resize Image | 'image-resize' 
| Remove Background | 'remove-background' 


## Example 
#### Step 1a: User uploads an image asset, and clicks the "Image Crop" button.
   * After a user uploads an image, a FileReader object is instantiated and converts the file to a base64 data type and saves it to the variable "imageUrl". 
   * This `imageUrl` is passed as `inputParams.asset` when the `openQuickAction()` method is called. 
   * The Image Crop QA Component is launched in an iframe, and the user can crop the uploaded image as they wish. 

#### Step 1b: User clicks the "Image Crop" button, with no asset attached.
   * The Image Crop QA component is launched in an iframe. The user will have to browse for an image asset to perform the image crop on. 
#### Step 2: Export Modified Asset
Finally, users can choose between 2 export options: 
* __Customize__: to continue designing in a CC Express editor component
* __Download__: to save the asset

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Quick Actions</title>
  </head>
    
  <body>
    <h1> Image Quick Action Example </h1>
    <input type="file" id="fileInput" />
    <img id="image-container" height="420" width="420" />
    <button id="image-crop"> Crop Image </button>

    <script type="text/javascript" src="CCEverywhere.js"></script>
    <script type="text/javascript" >

    const PROJECT_NAME = 'cc everywhere';
    /* file: user uploaded file
    imageUrl: base64 representation we pass into QA function */
    var file, imageUrl;
    /*  appImage is the image container displayed in sample */
    var appImage = document.getElementById('image-container');

    /* This event listener checks to see if the user uploads a new file and reads it into base64 data type for SDK ingestion later */
    
    document.getElementById('fileInput')
    .addEventListener('change', (e) => {
        const reader = new FileReader();
        file = e.target.files[0];
        /* reads file into base 64 data type */
        reader.readAsDataURL(file);
        reader.onload = () => {
            let encodedImage = reader.result;
            /*  save encoded image into imageUrl */
            imageUrl = encodedImage;
        }
        reader.onerror = (error) => {
            console.log('error', error);
        };
    })

    var ccEverywhere = CCEverywhere.default.initialize(
        {
            clientId: YOUR_CLIENT_ID,
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web',
            redirectUri: YOUR_REDIRECT_URI
        }
    );

    const exportOptions = [
        /* Customize export button */
        {
            target: 'Editor',
            variant: 'cta',
            optionType: 'button',
            buttonType: 'native'
        },
        /* Download export button */
        {
            target: 'Download',
            variant: 'primary',
            optionType: 'button',
            buttonType: 'native'
        }
    ];

    const callbacks = {
        onCancel: () => {},
        onPublish: (publishParams) => {
            imageUrl = publishParams.asset.data;
            appImage.src = imageUrl;
        },
        onError: (err) => {
            console.error('Error received is', err.toString())
        }
    }

    document.getElementById('image-crop')
    .addEventListener('click', () => {
        ccEverywhere.openQuickAction({
            id: 'image-crop', 
            inputParams: {
                asset: {
                    data: imageUrl, 
                    dataType: 'base64', 
                    type: 'image'
                }, 
                exportOptions: exportOptions
            },
            callbacks: callbacks,
            modalParams: {},
        })
    })
    </script>
  </body> 
</html>
```

