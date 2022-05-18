---
title: Quickstart Guide
description: This is the quickstart guide for CC Everywhere SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Quickstart Guide

This guide explains how to start using the SDK in your own application. 

## Step 0: Request Access 

This SDK is currently in private alpha and is subject to changes until GA availability. To register interest for the Creative Cloud Everywhere SDK, fill out [this form.](https://forms.office.com/r/J0HvGMbtDT). 

## Step 1: Get an API Key

During this private alpha release, please [fill out this form](https://forms.office.com/r/J0HvGMbtDT) if you are interested in integrating with the SDK.

**Before you complete the following steps, you need to have filled out the form above and been invited to the prerelease repo for access to the SDK.**
Register your integration by creating a new project in the [Developer Console](https://developer.adobe.com/console). 
* Select "Add an API" > "Creative Cloud Everywhere SDK".
* Configure OAuth settings. In the Developer Console, you should select "Single-Page App" and register redirect URI patterns. You can read more [here](../reference/authorization/index.md). 


## Step 2: Embed SDK

> **Note**: Until the SDK can be pulled directly from a CDN, you'll need to download and serve the SDK yourself locally. To try this on a local server, refer to the [local development set-up guide](./local/index.md)


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
* `APP_NAME` (string): the name of the Express project folder created for end users

```js
const ccEverywhere = CCEverywhere.default.initialize({
    clientId: <CLIENT_ID>,
    appName: <APP_NAME>, 
    appVersion: { major: 1, minor: 0 },
    platformCategory: 'web'
});
```

This method returns a `CCEverywhere` object, with four methods. To learn more about these methods, visit the [SDK references](../../reference/index.md) page.


## Step 4: Exchange Access Token

After a user logs in, the Adobe IMS Server stores the code and redirects the user back to the designated **redirect URL** with an authorization code. At this redirect URL is hit,  call the following method:

```js
ccEverywhere.exchangeAuthCodeForToken();
```

The returned authorization code is exchanged for an access token, and this function will store that token for future requests to the SDK during this session.


## Next Steps: Explore the SDK

The CC Everywhere SDK can be initialized with a customized locale. The [guides](../../guides/index.md) along with the [SDK references](../../reference/index.md) can help you start working with the SDK in a way that best suits your needs.

### [CC Express Editor Component](../../guides/ccx_editor/index.md)
* How to [create a project](../guides/ccx_editor/create_project/) in an Express editor
* How to [edit an existing project](../guides/ccx_editor/edit_project/) in an Express editor

When the editor first appears in a modal, the user will be asked to either log in, or create a Creative Cloud Express account. Once logged in, users can access Express's huge template and asset library and start creating in a new blank project. The editor can also be spun up taking an existing project ID as input, and users can continue working on a project within the editor.

### [Quick Actions Editor Component](../../guides/quick_actions/index.md)
* How to [use Image Quick Actions](../guides/quick_actions/image/)
* How to [use Video Quick Actions](../guides/quick_actions/video/)

Users must select the desired Quick Action (QA) so the corresponding QA editor is spun up. Within the QA Editor, users can browse their filesystem for an asset, and then perform the selected QA. They can download the modified asset to their computer, or further customize the modified asset in a Creative Cloud Express editor.
