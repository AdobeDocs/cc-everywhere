---
keywords:
  - Express Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - ExtendScript
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Image Quick Actions
  - Video Quick Actions
  - Adobe Photoshop
  - Adobe Premiere
  - Editing tools 
title: Image Quick Actions
description: This guide will demonstrate how to trigger a quick actions editor for images.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Image quick actions

Each quick actions component is loaded into the host application as an iframe, like the full editor component. Image quick actions can be launched with a pre-selected asset (jpg/png). If no input asset is provided, the modal will automatically prompt the user to browse their device for an image file.

## openQuickAction()

This API is responsible for embedding and launching the quick actions component in your application as an iframe.

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
| id | ID of quick action| [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
| inputParams | [Launch with asset](../../../reference/shared_types/index.md#asset) and [export options](../../../reference/quick_actions/index.md#exportoption) | [QuickActionInputParams](../../../reference/quick_actions/index.mdquickactioninputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks)
| modalParams | Define size of modal |  [ModalParams](../../../reference/shared_types/index.md#modalparams)

**Note**: `inputParams.exportOptions` determines which export buttons are exposed to the user once the action is complete, and must be defined with at least an empty array. If given an empty array, the "Download" button will be surfaced as an export option.

### [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)

Identifies which image quick action component should be loaded into the iframe.

| Quick Action | QuickActionId
| :-- | :--
| Crop Image | 'image-crop'
| Convert to JPG | 'convert-to-jpg'
| Convert to PNG | 'convert-to-png'
| Resize Image | 'image-resize'
| Remove Background | 'remove-background'

## Example

#### Step 1a: User uploads an image asset, and clicks the "Image Crop" button

* After a user uploads an image, a FileReader object is instantiated and converts the file to a base64 data type and saves it to the variable "imageUrl".
* This `imageUrl` is passed as `inputParams.asset` when the `openQuickAction()` method is called.
* The image crop quick action component is launched in an iframe, and the user can crop the uploaded image as they wish.

#### Step 1b: User clicks the "Image Crop" button, with no asset attached

* The image crop quick action component is launched in an iframe. The user will have to browse for an image asset to perform the image crop on.

#### Step 2: Export modified asset

Finally, users can choose between 3 export options:

* **Customize**: to continue designing in a full editor component
* **Download**: to save the asset
* Custom button that targets host app

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Quick actions</title>
  </head>
    
  <body>
    <h1> Image quick action example </h1>
    <input type="file" id="fileInput" />
    <img id="image-container" height="420" width="420" />
    <button id="image-crop"> Crop image </button>

    <script src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"></script>
    <script type="text/javascript" >

    const PROJECT_NAME = 'cc everywhere';
    /* file: user uploaded file
    imageUrl: base64 representation we pass into QA function */
    var file, encodedImage;
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
            encodedImage = reader.result;
        }
        reader.onerror = (error) => {
            console.log('error', error);
        };
    })

    var ccEverywhere = window.CCEverywhere.initialize(
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
        },
        /* Custom implementation in onPublish callback */
        {
            target: 'Host',
            id: 'save-to-host-app',
            label: 'Embed in app',
            variant: 'cta',
            optionType: 'button',
            buttonType: 'custom'
        }
    ];

    const callbacks = {
        onCancel: () => {},
        onPublish: (publishParams) => {
            if(publishParams.exportButtonId=="save-to-host-app"){
                appImage.src = publishParams.asset.data;
                appImage.style.visibility="visible";
            }
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
                    data: encodedImage, 
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
