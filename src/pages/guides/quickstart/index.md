---
title: Quickstart Guide
description: This is the quickstart guide for CC Everywhere SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Quickstart Guide

This guide explains how to start using the SDK in your own application. 

## Step 1: Get an API Key

During this beta release, developers must create a "personal" AdobeID, known as a "Type 1" or "Federated" ID for creating API credentials. 
* The tests you run in this account will not be transferrable to another account later. 
* After the alpha release, we will send additional instructions for creating and managing credentials that are associated with your organization. 

After you've created the correct type of account, sign into the [Adobe console](https://developer.adobe.com/console) and make sure you've created the correct type of account. Your login screen should indicate "Personal Account". 

Create a new project, then sign up for an API Key for by clicking "Add an API" and choosing **CC Libraries API**. For OAuth, choose **Single Page App** and provide your redirect URI patterns and default redirect URI.


## Step 2: Embed the SDK

We are in the process of distributing this SDK as a CDN. During this beta phase, you can embed the SDK into your app by downloading the bundled SDK in the `/dist` folder of the [prerelease repo](https://github.com/AdobeDocs/cc-everywhere). 

> **Note**: Until the SDK can be pulled directly from a CDN, you'll need to download and serve the SDK yourself locally. To try this on a local server, refer to the [local development set-up guide](../quickstart/local/index.md)


### HTML Example

```html
<script type="text/javascript" src="./CCEverywhere.js"></script>
```

### JavaScript Example

```js
function embedSDK = (document, pathToSDK) => {
    const script = document.createElement("script");
    script.src = pathToSDK;
    document.body.appendChild(script);
}

embedSDK(document, "./CCEverywhere.js");
```


## Step 3: Initialize the SDK

To initialize the SDK, pass the default method `initialize()`:
* `CLIENT_ID` (string): the API key you got from Console
* `APP_NAME` (string): the name of the CCX project folder created for end users

```js
const ccEverywhere = CCEverywhere.default.initialize({
    clientId: <CLIENT_ID>,
    appName: <APP_NAME>, 
    appVersion: { major: 1, minor: 0 },
    platformCategory: 'web'
});
```

This method returns a `CCEverywhere` object, with four methods. To learn more about these methods, visit the [SDK references](../../reference/index.md) page.


## Step 4: Store Access Token

After a user logs in, the Adobe IMS Server stores the code and redirects the user back to the designated **redirect URL** with an authorization code. At this redirect URL is hit,  call the following method:

```js
ccEverywhere.exchangeAuthCodeForToken();
```

The returned authorization code is exchanged for an access token, and this function will store that token for future requests to the SDK during this session.


## Next Steps: Explore the SDK

The CC Everywhere SDK can be initialized with a customized locale. The [guides](../../guides/index.md) along with the [SDK references](../../reference/index.md) can help you start working with the SDK in a way that best suits your needs.

Read more about:
* How to [create a project](../guides/ccx_editor/create_project/) in a CCX editor
* How to [edit an existing project](../guides/ccx_editor/edit_project/) in a CCX editor
* How to [use Image Quick Actions](../guides/quick_actions/image/)
* How to [use Video Quick Actions](../guides/quick_actions/video/)