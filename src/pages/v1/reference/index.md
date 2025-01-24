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

<InlineAlert slots="text" repeat="3" variant="error"  />

### IMPORTANT: Deprecation Warning

We are no longer approving integrations using using SDK V1, V2, or V3

V1 and V2 are deprecated and V3 will be deprecated in 2024.

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
        platformCategory: 'web', 
    },
    /* ConfigParams (optional) */
    {
        locale: 'en_US',
    }
);
```

### HostInfo

| Property         | Type                                              | Description                                                    |
| ---------------- | ------------------------------------------------- | -------------------------------------------------------------- |
| clientId         | string                                            | Your API Key                                                   |
| appName          | string                                            | Name of project folder created in user's Adobe Express account |
| appVersion       | `{ major: number, minor: number, patch?: number}` | Your app version                                               |
| platformCategory | 'web'                                             | Specify host app platform                                      |

### ConfigParams

| Property | Type   | Description                          |
| -------- | ------ | ------------------------------------ |
| locale   | string | Language settings for SDK components |

## CCEverywhere

The CCEverywhere object is the object returned when the SDK is initialized.

As of today, it exposes 4 methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component
