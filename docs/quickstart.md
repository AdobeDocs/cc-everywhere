# Quick Start

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

CC Everywhere SDK lets you launch a CCX editor within your own application. This guide explains how to start using the SDK in your own app.

> [Step 1: Get an API Key](#step-1-sign-up-for-api-key)

> [Step 2: Embed the SDK](#step-2-embed-the-sdk)

> [Step 3: Initialize the SDK](#step-3-initialize-the-sdk)

> [Next Steps](#next-steps-explore-the-sdk)



## Step 1: Get an API Key

- Follow the steps on the [Configuration](configuration.md) page to get an API key.
   
- Register a redirect URL by emailing marichaec@adobe.com and finnegan@adobe.com. 
---

## Step 2: Embed the SDK 

We are in the process of distributing this SDK as a CDN. During this alpha phase, you can embed the SDK into your app by downloading the bundled SDK in the [`/dist`](../dist/CCEverywhere.js) folder of this repo. 

> **Note**: Until the SDK can be pulled directly from a CDN, you'll need to download and serve the SDK yourself locally via localhost. To learn more, refer to the [local development set-up guide](local_dev.md) first.

Save all 3 files, and include the path to the SDK entrypoint (`CCEverywhere.js`) in a script tag using either HTML or JavaScript syntax. The other two files included in the folder contain dependencies, and should be saved in the same directory. 


### HTML Example:
```
<script type="text/javascript" src="./CCEverywhere.js"></script>
```


### JavaScript Example:
```
function embedSDK = (document, pathToSDK) => {
    const script = document.createElement("script");
    script.src = pathToSDK;
    script.onload = () => {
        // INITIALIZE SDK 
    };
    document.body.appendChild(script);
}

embedSDK(document, "./CCEverywhere.js");
```
---

## Step 3: Initialize the SDK
To initialize the SDK, call the default method `initialize()`:

```
const ccEverywhere = CCEverywhere.default.initialize(
                {
                    clientId: <CLIENT_ID>,
                    appName: <APP_NAME>,
                    appVersion: { major: 1, minor: 0 },
                    platformCategory: 'web'
                }
        );
```
This method returns a `CCEverywhere` object, with two methods: 
* `createDesign()`
* `editDesign()`

These methods are the ones you will use to create a new project or edit an existing one in the CCX editor. To learn more about these methods, visit the [API references](api_ref.md) page.

When the log in is finished, the editor will redirect to the redirect URL you provide us with. Now you call the following line: 
```
ccEverywhere.exchangeAuthCodeForToken();
```

## Next Steps: Explore the SDK
The CC Everywhere SDK can be initialized with a customized locale. The [customization](customization.md) documentation along with the [API references](api_ref.md) can help you start working with the SDK in a way that best suits your needs.

Read more about: 
* How to [create a project](create_project.md) in the editor 

* How to [edit an existing project](edit_project.md) in the editor

