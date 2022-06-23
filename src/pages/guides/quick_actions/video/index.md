---
title: Video Quick Actions
description: This guide will demonstrate how to trigger a Quick Actions editor for videos.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Video Quick Actions

Each Video Quick Actions component is loaded into the application as an iframe, like the Adobe Express editor component. Users will be prompted to browse for an asset once the QA iframe is loaded. Unlike the Image Quick Actions components, Video QAs cannot be launched with an asset attached during this beta phase.

## openQuickAction()
After the SDK has been initialized, the [CCEverywhere](../../../reference/index.md#cceverywhere) object exposes these Image Quick Actions via the `openQuickAction()` method. 

```js
ccEverywhere.openQuickAction(
    // QuickActionsParams
    {
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
    }
)
```

### [QuickActionParams](../../../reference/quick_actions/index.md#quickactionparams)
`openQuickAction()` takes an object `QuickActionParams` with 4 parameters:

| Property | Description | Type 
| :-- | :-- | :--
| id | Choose Quick Actions component| [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
| inputParams | Configure [export options](../../../reference/quick_actions/index.md#exportoption) | [QuickActionInputParams](../../../reference/quick_actions/index.mdquickactioninputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks)
| modalParams | Define size of QA iframe |  [ModalParams](../../../reference/shared_types/index.md#modalparams)


Only `id` and `inputParams.exportOptions` is required to initialize the iframe. 


### [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
Identifies which Video Quick Actions component should be loaded into the iframe.

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

Finally, users can choose between 3 export options: 
* __Customize__: to continue designing in a Adobe Express editor component
* __Download__: to save the asset
* Custom buttons that target the host application

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
            if(publishParams.exportButtonId=="save-to-host-app"){
                // Customize functionality here 
            }
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
