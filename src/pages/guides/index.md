---
keywords:
  - Create Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - ExtendScript
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Quickstart
  - Register project
  - Initialize SDK
  - Getting started
title: Quickstart Guide
description: This is the quickstart guide for Adobe Create Embed SDK
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Quickstart Guide

This guide explains how to start using the SDK in your own application. 

## Step 1: Get an API Key

Create a new project in the [Developer Console](https://developer.adobe.com/console). Select "Add an API" > "Creative Cloud Everywhere". 

Then, choose "Single-Page App" and register your domain in the "Redirect URI Patterns" and "Default Redirect URI" fields. You can read more [here](../guides/authorization/index.md). 

## Step 2: Embed SDK

The latest [version](https://sdk.cc-embed.adobe.com/v1/version.json) of the SDK is available on Adobe's CDN: 
```js
var CDN_URL = "https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js";
```

You can read the [changelog](/src/pages/guides/changelog/index.md) to understand what updates are being made.

### Load via script tag

```js
<script src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"></script>
<script>
  (() => {
    if (!window.CCEverywhere) {
      return;
    }
    const ccEverywhere = window.CCEverywhere.initialize();
  })();
</script>
```

### Using import 

```js
await import(CDN_URL);
const ccEverywhere = window.CCEverywhere.initialize();
```

### Dynamic script

```js
((document, url) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => {
      if (!window.CCEverywhere) {
          return;
        }
        const ccEverywhere = window.CCEverywhere.initialize();
    };
    document.body.appendChild(script);
  })(document, CDN_URL);
```

## Step 3: Initialize the SDK

The SDK should only be initialized once each page. To initialize the SDK, pass the default method `initialize()`:
* `CLIENT_ID` (string): API key from Console
* `APP_NAME` (string): Name of the Express folder created for end users of your integration
* `REDIRECT_URI` (string): Specify the redirect URI you registered for the project in Developer Console

```js
(() => {
    if (!window.CCEverywhere) {
      return;
    }
    const ccEverywhere = window.CCEverywhere.initialize({
      clientId: <CLIENT_ID>,
      appName: <APP_NAME>, 
      appVersion: { major: 1, minor: 0 },
      platformCategory: 'web',
      redirectUri: <REDIRECT_URI>
    });
})();
```

This returns a `CCEverywhere` Class object, with four methods: 
1. `openQuickAction()`: Quick Actions Component
2. `createDesign()`: Adobe Express Editor Component
3. `editDesign()`: Adobe Express Editor Component
4. `exchangeAuthCodeForToken()`: Authorization 

## Step 4: Exchange Access Token

> **Note**: To set up a local server, refer to the [local development set-up guide](./local/index.md) 

After a user logs in, they are redirected back to the designated **redirect URL** with an authorization code. At this redirect URL is hit, call the following method to exchange that code for an access token:

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
