---
keywords:
  - Adobe Express
  - Embed SDK
  - Template Browser
  - Feature configurations
title: Template Browser
description: Template Browser
contributors:
  - https://github.com/undavide
---

# Template Browser

Welcome to the new Template Browser experience in the Adobe Express Embed SDK!

## Features overview

The Embed SDK features a new module that allows you to launch a customizable Template Browser experience. Users will be able to browse the template collections made available by Adobe Express, select one, and further customize it in the Full Editor.

<!-- Insert image here -->

It's possible to pre-populate the Template Browser with a specific collection, configure the search query, show search suggestions, or let users browse freely the entire template library by themselves.

## How to enable the Template Browser

The Template Browser is available as a new Workflow module, whose entry point is the [`startFromContent()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#startfromcontent) method.

```js
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {}
);

module.startFromContent();
```

## Feature configurations

The Template Browser introduces several new feature configurations to the [`appConfig.contentBrowseConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md) object. They can be independently enabled or disabled to customize the module according to your needs.

```js
// ...

const appConfig = {
  contentBrowseConfig: { // 👈 Configure the Template Browser here
    /* ... */
  },
};

// appConfig, exportConfig, and containerConfig are all optional
module.startFromContent(appConfig);
```

All the features discussed below are properties of the `contentBrowseConfig` object.

### Collection

The collection to pre-populate the Template Browser with is configured by the [`collection`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#collection) property.

```js
const contentBrowseConfig = {
  collection: "your-collection-id",
};
```
