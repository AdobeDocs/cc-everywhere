# Quick Actions

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
The Quick Actions API allows developers to harness the power of Photoshop, Acrobat, and Premiere capabilities and use it in their own application. We currently support [Image](#image-quick-actions) and [Video](#video-quick-actions) Quick Actions. In the future, we plan to add PDF Quick Actions. 
## Image Quick Actions 
  
With Image Quick Actions, you have access to these capabilities: 

| Quick Action | QuickActionId
| :-- | :-- 
| Crop Image | 'image-crop'
| Convert to JPG | 'convert-to-jpg'
| Convert to PNG | 'convert-to-png'
| Resize Image | 'image-resize' 
| Remove Background | 'remove-background'

After the SDK has been initialized, the CCEverywhere object exposes this API via the `openQuickAction()` method. 

> `openQuickAction(params: QuickActionParams) => void`

This method triggers a CCX modal to perform the Quick Action, and takes an object of parameters of type **QuickActionParams**:
* id: QuickActionId
* inputParams: [QuickActionInputParams](api_ref.md#quickactioninputparams)
  * [asset](api_ref.md#asset): object representing data, data format, type of data
  * [exportOptions](api_ref.md#exportoption): array of configurable export options (i.e. open in Express, download)
* [Callbacks](api_ref.md#callbacks)
* [modalParams](api_ref.md#modalparams): determines size of CCX QA modal

Only the Quick Action ID is required to initialize a QA modal. If no input parameters are provided, the CCX modal will automatically prompt the user to browse their device for a image file. 


```js
ccEverywhere.openQuickAction({
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
})
```
Read more about each parameter in the [API references](api_ref.md). 


# 
## Video Quick Actions 
With Video Quick Actions, you have access to these capabilities: 

| Quick Action | QuickActionId
| :-- | :-- 
| Change Speed | 'change-speed'
| Convert to GIF | 'convert-to-gif'
| Convert to MP4 | 'convert-to-mp4'
| Crop Video | 'crop-video'
| Merge Video | 'merge-video'
| Resize Video | 'resize-video'
| Reverse Video | 'reverse-video'
| Trim Video | 'trim-video'

Using the same API: 

```js
ccEverywhere.openQuickAction({
    id: 'change-speed', 
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
})
```

- Currently, you cannot pass a video asset for a video Quick Action. Instead users will be prompted to browse once the CCX QA modal is open. 


#
### Image QA Example 
After a user uploads a file to the example, a FileReader object is instantiated and converts the file to a base64 data type and saves it to the variable "imageUrl". 

They can then click the "Image Crop" button, which call the Quick Actions API. A CCX modal is launched, and the user can crop the image as they wish. They can click "Customize" to continue designing in a CCX editor, or download the asset.

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

#
### Video QA Example 
They can then click the "Change Speed" button, which call the Quick Actions API. A CCX modal is launched, and user is presented with options for changing the speed. Then they can choose to further customize it in an CCX editor, or download the video asset.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Quick Actions</title>
  </head>
    
  <body>
    <h1> Video Quick Action Example </h1>
    <button id="change-speed"> Change Speed </button>

    <script type="text/javascript" src="CCEverywhere.js"></script>
    <script type="text/javascript" >

    const PROJECT_NAME = 'cc everywhere';

    var ccEverywhere = CCEverywhere.default.initialize(
        {
            clientId: YOUR_CLIENT_ID,
            appName: PROJECT_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web',
            redirectUri: YOUR_REDIRECT_URI
        }
    );

    const videoCallbacks = {
        onCancel: () => {},
        onPublish: (publishParams) => {
        },
        onError: (err) => {
            console.error('Error received is', err.toString())
        }
    }

    const exportOptions = [
        {
            target: 'Editor',
            variant: 'cta',
            optionType: 'button',
            buttonType: 'native'
        },
        {
            target: 'Download',
            variant: 'primary',
            optionType: 'button',
            buttonType: 'native'
        }
    ];

    document.getElementById('change-speed')
    .addEventListener('click', () => {
        ccEverywhere.openQuickAction({
            id: 'change-speed', 
            inputParams: { 
                exportOptions: exportOptions
            },
            callbacks: videoCallbacks,
            modalParams: {},
        })
    })
    </script>
  </body> 
</html>
```
