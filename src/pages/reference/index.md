---
keywords:
  - API Documentation
  - Reference
  - Initialize
  - CCEverywhere
  - v3
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
--- 

# SDK Reference

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## initialize()

This is the main API for accessing all Adobe Express Embed SDK components. The `initialize()` method takes [HostInfo](#hostinfo) and an optional [ConfigParams](#configparams), and returns a Promise with a [CCEverywhere](#cceverywhere) object.

<InlineAlert variant="info" slots="text1, text2" />

Note: As of March 2023, the `redirectUri` parameter is no longer used. You do not need to include it in the `initialize()` method. The `exchangeAuthCodeForToken()` API no longer needs to be called.

If you created a project prior to March 2023, please [create a new project](https://developer.adobe.com/console) and register your allowed domains.

#### `initialize: (HostInfo, ConfigParams?) => Promise<null | CCEverywhere>`

The default method `initialize()` is the API used to initialize the SDK. Make sure to call it only once a page.  This method is async.

```js
// after loading the SDK into the window
await window.CCEverywhere.initialize(
    /* HostInfo */
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web', 
    },
    /* ConfigParams (optional) */
    {
        locale: 'en_US',
    }
);
```

### HostInfo

| Property | Type | Description
| :-- | :--| :--
|clientId | string | Your API Key
|appName | string | Name of project folder created in user's Adobe Express account
|appVersion | { major: number, minor: number, patch?: number} | Your app version
| platformCategory | 'web' | Specify host app platform

### ConfigParams

The **locale** field defaults to **'en_US'** if nothing is specified.  Visit the [customization](../../guides/full_editor/customization/index.md) page for a full locale list.

| Property | Type | Description
| :-- | :--| :--
|locale | string | Language settings for SDK components

## CCEverywhere

The CCEverywhere object is the object returned (wrapped in a promise) when the SDK is initialized.

As of today, it exposes 4 methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component

## close()

#### `close: () => boolean`

The default method `close()` will close the editor modal. This method will:

* Return **true** once it successfully closes the instance of `CCEverywhere`
* Return **false** if there is no active `CCEverywhere` instance.
