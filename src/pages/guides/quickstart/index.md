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
---
# Quickstart Guide

<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This guide explains how to start using the Adobe Express Embed SDK in your own application.

## Step 1: Get an API Key

Create a new project in the [Developer Console](https://developer.adobe.com/console). Select "Add an API" > "Adobe Express Embed SDK".

Then, choose "Single-Page App" and register your domain in the "Allowed Domains" fields.

<InlineAlert variant="info" slots="text1, text2" />

Note: As of March 2023, the `redirectUri` parameter is no longer used. You do not need to include it in the `initialize()` method. The `exchangeAuthCodeForToken()` API no longer needs to be called.

If you created a project prior to March 2023, please [create a new project](https://developer.adobe.com/console) and register your allowed domains.

## Step 2: Embed the SDK

The latest [version](https://sdk.cc-embed.adobe.com/v3/version.json) of the SDK is available on Adobe's CDN:

```js
var CDN_URL = "https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js";
```

You can read the [changelog](/src/pages/guides/changelog/index.md) to understand known issues as well as what changes have been made.

### Load via script tag

```js
<script src="https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js"></script>
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
* `APP_NAME` (string): Name of your integration/app. This name corresponds with the project folder created for your end users in Adobe Express.

```js
(async () => {
    const ccEverywhere = await window.CCEverywhere.initialize({
      clientId: <CLIENT_ID>,
      appName: <APP_NAME>,
    });
})();
```

This returns a `CCEverywhere` Class object, with three methods:

1. `openQuickAction()`: Launch an Adobe Express quick action
2. `createDesign()`: Create a new project or start editing an image in an embedded editor
3. `editDesign()`: Edit an existing project in an embedded editor

The SDK can be initialized with a customized locale. Read more about the initialize API [here](../../reference/initialize/index.md).

## Next Steps: Explore the SDK

Our guides along with the [SDK references](../../reference/index.md) can help you start working with the SDK in a way that best suits your needs.

### [Full editor](../guides/full_editor/index.md)

With the full editor component, your users are able to:

* How to [create new projects](../guides/full_editor/create_project/)
* How to [edit existing projects](../guides/full_editor/edit_project/)

Users can access Adobe Express's huge template and asset library when starting with a blank new project in the editor. Pre-selected images can also be loaded into the editor for further designing. The editor can also load previous projects (created using your integration) by taking an existing project ID as input.

### [Quick actions](../guides/quick_actions/index.md)

* How to [embed image quick actions](../guides/quick_actions/image/)
* How to [embed video quick actions](../guides/quick_actions/video/)

Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application.

## Browser support

Here are the minimum browser requirements for the SDK:

| Browser name | Supported | Minimum version
| :-- | :-- | : --
| Safari | Yes  | 16 and above
| Google Chrome | Yes | 100 and above
| Microsoft Edge | Yes | 107 and above
| Firefox | No | N/A

The SDK will *not* work in incognito windows.
