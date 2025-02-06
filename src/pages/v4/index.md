---
keywords:
  - API Documentation
  - API Reference
  - Initialize
  - CCEverywhere
  - Embed SDK
  - Import SDK
  - V4
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
  - https://github.com/nimithajalal
--- 

# Adobe Express Embed SDK API Reference

Welcome to the Adobe Express Embed SDK API references. The Adobe Express Embed SDK allows developers to seamlessly integrate Adobe Express capabilities into their own web applications, providing users with powerful editing tools and creative services directly within their digital environment.

## Getting Started

Before you dive into the API references, make sure you have completed the following steps:

- Register Your Application: Obtain your API credentials by registering your application with Adobe. This will give you access to the necessary API keys and tokens.
- Set Up Your Environment: Ensure that your development environment meets the prerequisites for using the SDK, including any required libraries or frameworks.
- Read the Documentation: Familiarize yourself with the SDK documentation to understand the available features and how to implement them.

Learn more about in the [quick start guide](../guides/quickstart/index.md).

<InlineAlert variant="info" slots="header, text" />

Migrating from V3

We've created a [Migration Guide](../guides/concepts/migration-v3-v4.md) to help you with the transition from V3 to V4 of the SDK. V3 integrations are no longer approved, and V3 will be deprecated in 2024.

## API Reference

The Adobe Express Embed SDK API reference is structured to provide detailed information on the various endpoints, methods, and events available within the SDK. Here's a brief overview of the sections you'll find in the API reference:

### Initialization

Once you have embedded the SDK into your application, the first step is to call the initialize API. This API initializes the SDK and prepares it for use within your application.

#### initialize()

The asynchronous [`initialize()`](./sdk/src/3p/CCEverywhere/variables/default.md#initialize) method takes [hostInfo](./shared/src/types/HostInfo.types/interfaces/host-info-specified-base/index.md), an optional [configParams](./shared/src/types/HostInfo.types/interfaces/config-params-base/index.md), an optional [authOption](./shared/src/types/Authentication.types/type-aliases/auth-option/index.md) and returns a Promise with a [CCEverywhere](./sdk/src/3p/CCEverywhere/classes/CCEverywhere.md) object.

```ts
initialize: (
    hostInfo:HostInfoSpecifiedBase, 
    configParams?:ConfigParamsBase, 
    authOption?:AuthOption) => Promise<CCEverywhere>;

```

<InlineAlert variant="info" slots="text" />

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

### CCEverywhere

After successfully initializing the SDK, a Promise will be returned containing the `CCEverywhere` object. The CCEverywhere object is your gateway to the various creative features offered by Adobe Express.

### Features Exposed by CCEverywhere

- `editor`: Contains APIs for launching and interacting with a full-featured embedded editor. Users can create and edit content with a comprehensive set of tools.
- `quickAction`: Contains APIs for executing quick actions, such as removing backgrounds or resizing images, with minimal user interaction.
- `module`: Contains APIs for launching specific modules like 'Generate Image' or 'Edit Image', which offer more focused editing capabilities.
Types

As you interact with the SDK, you'll encounter various objects that are essential to the operation of the Adobe Express Embed SDK. The types reference page provides detailed information about these objects, which are shared across different parts of the SDK. Understanding these types is crucial for effectively utilizing the SDK's features.

This API reference guide is designed to be your starting point for integrating Adobe Express's creative power into your application. As you explore the different capabilities of the SDK, remember that our documentation is here to support you at every step. Whether you're looking to embed a full editor, execute quick actions, or launch specific modules, the Adobe Express Embed SDK offers a flexible and powerful solution to meet your creative needs.

### Shared Classes

The shared reference page contains details about objects that are shared across the SDK.

<DiscoverBlock slots="heading, link, text"/>

## Additional Resources

[Quickstart Guide](../guides/quickstart/index.md)

Learn how to get started with the Adobe Express Embed SDK.

<DiscoverBlock slots="link, text"/>

[Tutorials](..//guides/tutorials/index.md)

Explore the collection of tutorials.

<DiscoverBlock slots="link, text"/>

[Sample Code](https://github.com/AdobeDocs/cc-everywhere/tree/main/v4-sample)

Adobe Express Embed SDK Sample using V4 SDK.

<DiscoverBlock slots="link, text"/>

[Community](https://developer.adobe.com/express/community)

If you need assistance or have questions about the Adobe Express Embed SDK, visit the community section for access to community forums.
