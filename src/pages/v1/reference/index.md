---
noIndex: true
keywords:
  - v1
  - References
  - initialize
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# SDK Reference

<InlineAlert variant="error" slots="header, text, text1" />

### SDK v1 and v2 End of Life

Embed SDK v1 and v2 will reach end of life by the **May 12th, 2025**. After this date, they will no longer be supported. Please upgrade to the latest SDK version to avoid disruption.

We're only accepting new integrations using the SDK version 4. Refer to our [migration guide](../../guides/concepts/migration_v3_v4.md) for detailed instructions.

This is the main API for accessing all Adobe Express Embed SDK components. The `initialize()` method takes [HostInfo](#hostinfo) and an optional [ConfigParams](#configparams), and returns a [CCEverywhere](#cceverywhere) object.

## initialize()

test

The default method `initialize()` is the API used to initialize the SDK. Make sure to call it only once a page.

```js
// after loading the SDK into the window
window.CCEverywhere.initialize(
  /* HostInfo */
  {
    clientId: YOUR_CLIENT_ID,
    appName: YOUR_PROJECT_NAME,
    appVersion: { major: 1, minor: 0 },
    platformCategory: "web",
  },
  /* ConfigParams (optional) */
  {
    locale: "en_US",
  }
);
```

### HostInfo

| Property         | Type                                            | Description                                                    |
| :--------------- | :---------------------------------------------- | :------------------------------------------------------------- |
| clientId         | string                                          | Your API Key                                                   |
| appName          | string                                          | Name of project folder created in user's Adobe Express account |
| appVersion       | { major: number, minor: number, patch?: number} | Your app version                                               |
| platformCategory | 'web'                                           | Specify host app platform                                      |

### ConfigParams

| Property | Type   | Description                          |
| :------- | :----- | :----------------------------------- |
| locale   | string | Language settings for SDK components |

## CCEverywhere

The CCEverywhere object is the object returned when the SDK is initialized.

As of today, it exposes 4 methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component
