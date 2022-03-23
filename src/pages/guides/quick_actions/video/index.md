---
title: Video Quick Actions
description: This guide will demonstrate how to trigger a Quick Actions editor for videos.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Video Quick Actions
After the SDK has been initialized, the CCEverywhere object exposes these Video Quick Actions via the `openQuickAction()` method.

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

Using the method `openQuickAction()`: 

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


## Example 
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
