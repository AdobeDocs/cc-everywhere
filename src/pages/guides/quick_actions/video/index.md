---
title: Video Quick Actions
description: This guide will demonstrate how to trigger a Quick Actions editor for videos.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Video Quick Actions

Each Video Quick Actions component is loaded into the application as an iframe, like the CCX editor component. Users will be prompted to browse for an asset once the QA iframe is loaded. Unlike the Image Quick Actions components, Video QAs cannot be launched with an asset attached during this beta phase.

## openQuickAction()
After the SDK has been initialized, the [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes these Image Quick Actions via the `openQuickAction()` method. 

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

### QuickActionParams
`openQuickAction()` takes an object `QuickActionParams` with 4 parameters:
* id: [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
* inputParams: [QuickActionInputParams](../../../reference/quick_actions/index.mdquickactioninputparams)
  * [exportOptions](../../../reference/quick_actions/index.md#exportoption): array of configurable export options (i.e. open in CCX editor component, download)
* [Callbacks](../../../reference/shared_types/index.md#callbacks)
* [modalParams](../../../reference/shared_types/index.md#modalparams): determines size of QA modal


Only the [QuickActionId](#quickactionid) is required to initialize the iframe.


### QuickActionId
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


## Example 
#### Flow: User clicks the "Change Speed" button.
* The Change Speed QA Component is launched in an iframe. The user will browse for a mp4 asset to perform the QA on, within this iframe. 
* Once selected, the user is presented with options for changing the speed. 

Finally, users can choose between 2 export options: 
* __Customize__: to continue designing in a CCX editor component
* __Download__: to save the asset

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
