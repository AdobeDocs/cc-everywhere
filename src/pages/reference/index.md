---
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
--- 

# SDK Reference
This is the main API for accessing all the SDK components. The `initialize()` method takes [HostInfo](#hostinfo) and an optional [ConfigParams](#configparams), and returns a [CCEverywhere](#cceverywhere) object. 

## initialize()

The default method `initialize()` is the API used to initialize the SDK. Make sure to call it only once a page. 


```js
CCEverywhere.default.initialize(
    /* HostInfo */
    {
        clientId: YOUR_CLIENT_ID,
        appName: YOUR_PROJECT_NAME,
        appVersion: { major: 1, minor: 0 },
        platformCategory: 'web', 
        redirectUri: YOUR_REDIRECT_URI
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
|appName | string | Name of project folder created in user's CC Express
|appVersion | { major: number, minor: number, patch?: number} | Your app version
| platformCategory | 'web' | Specify host app platform
| redirectUri | string | Searches for redirect URL you define in [console](https://developer.adobe.com/console)

If you specify `redirectUri` as a parameter in the **HostInfo** object, that is the redirect URI that will be checked first. If you leave this field blank, IMS will search through the "Redirect URI patterns" registered in console for your client, and if no match is found, it will fall back on the "Default Redirect URI".


### ConfigParams
The **locale** field defaults to **'en_US'** if nothing is specified.  Visit the [customization](../../guides/../pages/guides/ccx_editor/customization/index.md) page for a full locale list.

| Property | Type | Description
| :-- | :--| :--
|locale | string | Language settings for SDK components

## CCEverywhere

The CCEverywhere object is the object returned when the SDK is initialized. 

As of today, it exposes 4 methods: 
1. `openQuickAction()`: Quick Actions Component
2. `createDesign()`: Adobe Express Editor Component
3. `editDesign()`: Adobe Express Editor Component
4. `exchangeAuthCodeForToken()`: Authorization


