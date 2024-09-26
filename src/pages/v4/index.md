---
keywords:
  - API Documentation
  - Reference
  - Initialize
  - CCEverywhere
  - v4
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
--- 

# Adobe Express Embed SDK Reference

## Embed and initialize the SDK

1. Follow the steps in the Quickstart Guide to [embed the SDK](../guides/quickstart/index.md#step-2-embed-the-sdk) in your application.
2. After you have imported the SDK to your application, you need to call the `initialize` API first. View the full reference for that [API](./initialize/index.md) here.

### CCEverywhere

Once you have successfully initialized the SDK, a Promise will be returned containing the [CCEverywhere](./sdk/src/3p/CCEverywhere/classes/CCEverywhere.md) object.

As of today, it exposes:

1. `editor`: Contains APIs for creating and editing in an embedded full editor
2. `quickAction`: Contains APIs for launching quick actions
3. `module`: Contains APIs for launching modules (Generate Image, edit image)

### Initialize the SDK

The asynchronous `initialize()` method takes [HostInfo](./shared/src/types/HostInfo.types/interfaces/HostInfoSpecifiedBase.md) and an optional [ConfigParams](#configparams), and returns a Promise with a [CCEverywhere](./sdk/src/3p/CCEverywhere/classes/CCEverywhere.md) object.

```ts
initialize: (
    hostInfo:HostInfoSpecifiedBase, 
    configParams?:ConfigParamsBase, 
    authOption?:AuthOption) => Promise<CCEverywhere>;

```

<!-- Inline Alert -->
<InlineAlert variant="info" slots="text1" />

The SDK should be initialized only once on each page.

### Example

```ts
(async () => {
  let hostInfo = { /* HostInfo */
    clientId: CLIENT_ID,
    appName: APP_NAME, 
    appVersion: { major: 1, minor: 0 }, 
    platformCategory: 'web',
  }

  const configParams = {
    loginMode: 'delayed'
  }

  const ccEverywhere = await window.CCEverywhere.initialize(
    hostInfo, configParams
  );
})();
```

Use the left sidebar to navigate through the different components and APIs available in the SDK.
