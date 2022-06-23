---
title: Quickstart Guide
description: This is the quickstart guide for Adobe Create Embed SDK
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Quickstart Guide

This guide explains how to start using the SDK in your own application. 

## Step 0: Request Access 

This SDK is currently in private alpha and is subject to changes until GA availability. To register interest for the Adobe Create Embed SDK, fill out [this form](https://forms.office.com/r/J0HvGMbtDT).


## Step 1: Get an API Key

1. Create a new project in the [Developer Console](https://developer.adobe.com/console). 
2. Select "Add an API" > "Creative Cloud Everywhere SDK". 
3. Select "Single-Page App" and register your redirect URI in the "Redirect URI Patterns" and "Default Redirect URI" fields. You can read more [here](../reference/authorization/index.md). 

## Step 2: Embed SDK

> **Note**: Until the SDK can be pulled directly from a CDN, you'll need to download and serve the SDK yourself locally. To set up a local server, refer to the [local development set-up guide](./local/index.md) 

You can embed the SDK in your app using the `<script>` HTML tag. 

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

The SDK should only be initialized once each page. To initialize the SDK, pass the default method `initialize()`:
* `CLIENT_ID` (string): API key from Console
* `APP_NAME` (string): Name of the Express folder created for end users of your integration
* `REDIRECT_URI` (string): Specify the redirect URI you registered for the project in Developer Console

```js
const ccEverywhere = CCEverywhere.default.initialize({
    clientId: <CLIENT_ID>,
    appName: <APP_NAME>, 
    appVersion: { major: 1, minor: 0 },
    platformCategory: 'web',
    redirectUri: <REDIRECT_URI>
});
```

This returns a `CCEverywhere` Class object, with four methods: 
1. `openQuickAction()`: Quick Actions Component
2. `createDesign()`: Adobe Express Editor Component
3. `editDesign()`: Adobe Express Editor Component
4. `exchangeAuthCodeForToken()`: Authorization 

## Step 4: Exchange Access Token

The Adobe IMS server will handle the OAuth for your application. At the redirect URI you define, After a user logs in, the Adobe IMS Server stores the code and redirects the user back to the designated **redirect URL** with an authorization code. At this redirect URL is hit,  call the following method:

```js
ccEverywhere.exchangeAuthCodeForToken();
```

The returned authorization code is exchanged for an access token, which is saved for future requests to the SDK during this session.


## Next Steps: Explore the SDK

The Adobe Create Embed SDK can be initialized with a customized locale. The [guides](../../guides/index.md) along with the [SDK references](../../reference/index.md) can help you start working with the SDK in a way that best suits your needs.

### [Express Editor Component](../../guides/ccx_editor/index.md)
* How to [create a project](../guides/ccx_editor/create_project/) in an Express editor
* How to [edit an existing project](../guides/ccx_editor/edit_project/) in an Express editor

When the editor first appears in a modal, the user will be asked to either log in, or create a Adobe Express account. Once logged in, users can access Express's huge template and asset library and start creating in a new blank project. The editor can also be spun up taking an existing project ID as input, and users can continue working on a project within the editor.

### [Quick Actions Editor Component](../../guides/quick_actions/index.md)
* How to [use Image Quick Actions](../guides/quick_actions/image/)
* How to [use Video Quick Actions](../guides/quick_actions/video/)

Users must select the desired Quick Action (QA) so the corresponding QA editor is spun up. Within the QA Editor, users can browse their filesystem for an asset, and then perform the selected QA. They can download the modified asset to their computer, or further customize the modified asset in an Adobe Express editor.
