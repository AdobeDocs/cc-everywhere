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
title: Video Quick Actions
description: This guide will demonstrate how to trigger a Quick Actions editor for videos.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

This version of the docs and SDK will be sunsetted later this year. As a result, we are no longer approving new submissions that integrate with v2.

Instead, we would love for you to start integrating the new version of the SDK. To join the private beta and get early access to documentation, please fill out [this form](https://airtable.com/shryiOk1VwoWxUCZs?prefill_Platform=Adobe%20Express%20Embed%20SDK&hide_Platform=true).

# Video quick actions

Each quick actions component is loaded into the application as an iframe, like the Adobe Express editor component. Users will be prompted to browse for an asset once the iframe is loaded. Unlike the image quick actions components, Video QAs cannot be launched with an asset attached during this beta phase.

## openQuickAction()

This API is responsible for embedding and launching the quick actions component in your application as an iframe.

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
| id | ID of quick action| [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)
| inputParams | Configure [export options](../../../reference/quick_actions/index.md#exportoption) | [QuickActionInputParams](../../../reference/quick_actions/index.mdquickactioninputparams)
| callbacks | Callback functions | [Callbacks](../../../reference/shared_types/index.md#callbacks)
| modalParams | Define size of iframe |  [ModalParams](../../../reference/shared_types/index.md#modalparams)

Only `id` and `inputParams.exportOptions` is required to initialize the iframe.

### [QuickActionId](../../../reference/quick_actions/index.md#quickactionid)

Identifies which image quick action component should be loaded into the iframe.

| Quick Action | QuickActionId
| :-- | :--
| Change Speed | 'change-speed'
| Convert to GIF | 'convert-to-gif'
| Convert to MP4 | 'convert-to-mp4'
| Crop Video | 'crop-video'
| Merge Video | 'merge-videos'
| Resize Video | 'resize-video'
| Reverse Video | 'reverse-video'
| Trim Video | 'trim-video'

## Example

#### Flow: User clicks the "Change Speed" button

* The change speed quick action component is launched in an iframe. The user will browse for a mp4 asset to perform the action on, within this iframe.
* Once selected, the user is presented with options for changing the speed.

Finally, users can choose between 3 export options:

* __Customize__: to continue designing in a full editor component
* __Download__: to save the asset
* Custom buttons that target the host application

```html
<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Quick actions</title>
  </head>
    
  <body>
    <h1> Video quick action example </h1>
    <button id="change-speed"> Change speed </button>

    <script src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"></script>
    <script type="text/javascript" >
    (async () => {
        const ccEverywhere = await window.CCEverywhere.initialize({
            clientId: YOUR_CLIENT_ID,
            appName: YOUR_APP_NAME,
            appVersion: { major: 1, minor: 0 },
            platformCategory: 'web',
        });

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
    })();
    </script>
  </body> 
</html>
```
