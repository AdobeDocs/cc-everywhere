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
  - https://github.com/undavide
--- 

# Initialize SDK

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving new integrations using SDK v3, which will be deprecated in 2024.

Please migrate to V4 as soon as possible: we've created a [Migration Guide](../../../guides/concepts/migration_v3_v4.md) to help you with the transition.

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

The Adobe Express Embed SDK can be initialized with a customized locale. This field defaults to **'en_US'** if nothing is specified.  The full list of accepted locale strings is [here](../types/index.md#locale).

| Property | Required | Type | Description
| :-- | :-- | :-- | :--
| locale | No | [Locale](../types/index.md#locale) | Language settings for SDK components
| skipBrowserSupportCheck | No | boolean | When set to true and [browser is not supported](../../../guides/quickstart/index.md#browser-support), calling `initialize()` will **not** result in an error.

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
