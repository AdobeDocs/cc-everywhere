---
keywords:
  - Express Embed SDK
  - Express Editor
  - Adobe Express
  - Embed SDK
  - Quick Actions
  - SDK
  - JavaScript
  - Embed
  - SDK Reference
  - Quickstart
  - Register project
  - Initialize SDK
  - Getting started
title: Quickstart Guide
description: This is the quickstart guide for Adobe Express Embed SDK
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Quickstart Guide

This guide explains how to start using the Adobe Express Embed SDK in your own application.

## Step 1: Get an API Key

Create a new project in the [Developer Console](https://developer.adobe.com/console). Select "Add an API" > "Adobe Express Embed SDK".

Then, choose "Single-Page App" and register your domain in the "Redirect URI Patterns" and "Default Redirect URI" fields. You can read more [here](../guides/authorization/index.md).

Note: As of March 2023, the `redirectUri` parameter is no longer being checked by v2. You no longer need to include it in the `initialize()` method. The `exchangeAuthCodeForToken()` API no longer needs to be called.

## Step 2: Embed the SDK

The latest [version](https://sdk.cc-embed.adobe.com/v2/version.json) of the SDK is available on Adobe's CDN:

```js
var CDN_URL = "https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js";
```

You can read the [changelog](/src/pages/guides/changelog/index.md) to understand known issues as well as what changes have been made.

### Load via script tag

```js
<script src="https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js"></script>
<script>
  (async () => {
    const ccEverywhere = await window.CCEverywhere.initialize();
  })();
</script>
```

### Using import

```js
await import(CDN_URL);
const ccEverywhere = await window.CCEverywhere.initialize();
```

### Dynamic script

```js
((document, url) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = async () => {
      if (!window.CCEverywhere) {
          return;
        }
        const ccEverywhere = await window.CCEverywhere.initialize();
    };
    document.body.appendChild(script);
  })(document, CDN_URL);
```

## Step 3: Initialize the SDK

The SDK should only be initialized once each page. To initialize the SDK, pass the default method `initialize()`:

* `CLIENT_ID` (string): API key from Developer Console
* `APP_NAME` (string): Name of the project folder created for end users of your integration. This should correspond to the name of your integration.
* `REDIRECT_URI` (string): Specify the redirect URI you registered for the project in Developer Console

```js
(async () => {
    const ccEverywhere = await window.CCEverywhere.initialize({
      clientId: <CLIENT_ID>,
      appName: <APP_NAME>, 
      appVersion: { major: 1, minor: 0 },
      platformCategory: 'web',
      redirectUri: <REDIRECT_URI>
    });
})();
```

This returns a `CCEverywhere` Class object, with four methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component
4. `exchangeAuthCodeForToken()`: Authorization

## Step 4: Exchange Access Token

> **Note**: To set up a local server, refer to the [local development set-up guide](./local/index.md)

After a user logs in, they are redirected back to the designated **redirect URL** with an authorization code. At this redirect URL is hit, call the following method to exchange that code for an access token:

```js
ccEverywhere.exchangeAuthCodeForToken();
```

The returned authorization code is exchanged for an access token, which is saved for future requests to the SDK during this session.

## Next Steps: Explore the SDK

The Adobe Express Embed SDK can be initialized with a customized locale. The [guides](../../guides/index.md) along with the [SDK references](../../reference/index.md) can help you start working with the SDK in a way that best suits your needs.

### [Full editor](../guides/full_editor/index.md)

With the full editor component, your users are able to:

* How to [create new projects](../guides/full_editor/create_project/)
* How to [edit existing projects](../guides/full_editor/edit_project/)

Users can access Adobe Express's huge template and asset library when starting with a blank new project in the editor. Pre-selected images can also be loaded into the editor for further designing. The editor can also load previous projects (created using your integration) by taking an existing project ID as input.

### [Quick actions](../guides/quick_actions/index.md)

* How to [embed image quick actions](../guides/quick_actions/image/)
* How to [embed video quick actions](../guides/quick_actions/video/)

Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application.
