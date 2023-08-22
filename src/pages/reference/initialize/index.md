---
keywords:
  - API Documentation
  - Reference
  - Initialize
  - CCEverywhere
  - v3
  - Locale
  - appName
  - platformCategory
  - HostInfo
  - ConfigParams
title: Initialize SDK Reference
description: This is the reference page for the initialize method.
contributors:
  - https://github.com/amandahuarng
--- 

# Initialize SDK

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## initialize()

This is the main API for accessing all Adobe Express Embed SDK components. The `initialize()` method takes [HostInfo](#hostinfo) and an optional [ConfigParams](#configparams), and returns a Promise with a [CCEverywhere](./CCEverywhere/index.md) object. The SDK should be initialized only once on each page. This method is async.

```ts
initialize: (hostInfo: HostInfo, configParams?: ConfigParams) => Promise<CCEverywhere>
```

### HostInfo

| Property | Required | Type | Description
| :-- | :-- | :-- | :--
| clientId | Yes | String | API key from Developer Console
| appName | Yes | String | Name of project folder created in your user's Adobe Express account. This should correspond to the name of your application.
| appVersion | No | { major: number, minor: number, patch?: number } | Version of your integration
| platformCategory | No | 'web' | Specify host app platform

### ConfigParams

The Adobe Express Embed SDK can be initialized with a customized locale. This field defaults to **'en_US'** if nothing is specified.  The full locale list is [below](#locale).

| Property | Required | Type | Description
| :-- | :-- | :-- | :--
| locale | No | String | Language settings for SDK components

### Example

```ts
(async () => {
  let host = { /* HostInfo */
    clientId: CLIENT_ID,
    appName: APP_NAME, 
    appVersion: { major: 1, minor: 0 }, 
    platformCategory: 'web',
  }

  let config = { locale = 'en_US'} /* ConfigParams (optional) */

  const ccEverywhere = await window.CCEverywhere.initialize(host, config);
})();
```

The returned Promise-wrapped `CCEverywhere` object can then be used to call the other APIs of the SDK:

1. `createDesign()`: Create a design from scratch or from a starting asset in the editor.
2. `editDesign()`: Edit a design in the editor.
3. `openQuickAction()`: Open a quick action in a modal.
4. `close()`: Closes any active design in progress. It returns a boolean value indicating whether the close operation was successful or not.
5. `terminate()`: Terminates the active `CCEverywhere` instance. Returns void.

## Locale

The Adobe Express Embed SDK lets you customize the locale during initialization. The default value is `'en_US'`. This determines the language setting for users experiencing SDK components.

| Locale | Description
| :-- | :--
| 'en_US' | English
| 'fr_FR' | French
| 'de_DE' | German  
| 'ja_JP' | Japanese
| 'it_IT'| Italian
| 'es_ES'| Spanish
| 'pt_BR'| Portuguese
| 'ko_JR'| Korean  
| 'da_DK'| Danish
| 'nl_NL'| Dutch  
| 'nb_NO'| Norwegian
| 'sv_SE'| Swedish
| 'fi_FI'| Finnish
| 'zh_Hans_CN' | Chinese (simplified)
| 'zh_Hant_TW'| Chinese (traditional)
