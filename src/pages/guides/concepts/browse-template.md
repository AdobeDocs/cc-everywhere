---
keywords:
- Adobe Express
- Embed SDK
- Template Browser
- Template Editor
- Collection ID
- Collection URN
title: Template Browser
description: Template Browser
contributors:
- https://github.com/undavide
---

# Template Browser

Welcome to the new Template Browser experience in the Adobe Express Embed SDK!

## Features overview

The Embed SDK features a new module that allows you to launch a customizable Template Browser experience. Users will be able to **browse the template collections** made available by Adobe Express, **select a template, and further customize** it in the Full Editor.

![Template Browser](./img/template-browser--template-browser-dark.png)

It's possible to **pre-populate** the Template Browser with a specific collection, **configure** the search query, show search suggestions, or let users browse freely the entire library by themselves.

## How to enable the Template Browser

The Template Browser is available as a new Workflow module, whose entry point is the [`startFromContent()`](../../v4/sdk/src/workflows/3p/module-workflow/classes/module-workflow.md#startfromcontent) method.

```js
await import("https://cc-embed.adobe.com/sdk/v4/CCEverywhere.js");

const { module } = await window.CCEverywhere.initialize(
  { clientId: "your-client-id", appName: "your-app-name" },
  {}
);

module.startFromContent({ /* ... */ });
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

module.startFromContent(appConfig);
```

All the features discussed below are properties of the `contentBrowseConfig` object.

### Collections

The collection to pre-populate the Template Browser with is configured in the [`categoriesConfig`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#categoriesconfig) array. It contains one object, with a `category` property (always equal to the `"templates"` string) and a `collectionId` with the URN of the collection.

```js
const appConfig = {
  contentBrowseConfig: { // 👈 Configure the Template Browser experience
    categoriesConfig: [
      {
        category: "templates",           // 👈 Always "templates"
        collectionId: "urn:aaid:sc:...", // 👈 The URN of the collection
      },
    ],
  },
};
```

<InlineAlert slots="header, text1, text2, text3" variant="info" />

Collection ID vs. Template ID

Be careful not to confuse the collection ID with the template ID. Both are URNs, but they represent different entities:

- The collection ID is the URN of a **collection that contains multiple templates**.
- The template ID is the URN of a **single template within a collection**.

If you need to open a specific, known template and not let users browse a collection, use the [`editor.createWithTemplate()`](../../v4/sdk/src/workflows/3p/editor-workflow/classes/editor-workflow.md#createwithtemplate) API instead.

The Collection ID should be provided as a URN, i.e., a long string like

```text
urn:aaid:sc:VA6C2:34756608-9fa0-4fdc-80b0-65e17ffb29c8`.
```

#### How to get a Collection ID

Collections fed to the Template Browser are those that are publicly available in Adobe Express.

<InlineAlert slots="header, text" variant="info" />

Custom Collections

If you wish to **create your own curated collections** for consumption in the Template Browser, reach out to your Adobe point of contact. They will be able to help you create the collections and provide you with the respective URNs.

If you want to **extract the ID from a public collection**, follow the
instructions below:

1. **Click the Templates button** in the left toolbar.
2. **Find the collection you want** to use—using either Filters or Search.
3. On the righthand side, opposite to the Collection name, **click the "View all" link**.

![Template Browser - find collection](./img/template-browser--find-collection.png)

4. You'll be redirected to the Collection details page.
5. **Copy the last part of the page's URL**; the URN is the string that starts with `urn`.

![Template Browser - collection URN](./img/template-browser--collection-urn.png)

6. This is the URI-encoded URN; in order to use it, **you need to decode it**. Either **manually replace** all the `%3A` instances with a `:` in the string, or **use the JavaScript function** `decodeURIComponent()`; for example, in the Browser's console.

```js
decodeURIComponent("urn%3Aaaid%3Asc%3AVA6C2%3A34756608-9fa0-4fdc-80b0-65e17ffb29c8");
// "urn:aaid:sc:VA6C2:34756608-9fa0-4fdc-80b0-65e17ffb29c8"
```

Additionally, a [`collectionItemsSortOrder`](../../v4/shared/src/types/browse-search-config-types/interfaces/browse-search-base-config.md#properties) can be provided to sort the items in the collection.

#### Root Collection

Custom collections can have a **parent** (root) collection, which is the **one containing all other collections**. For example, you may have a Business Cards root collection, which contains themed Business Card collections (square, landscape, etc.).

The parent collection is configured in the [`rootCollectionId`](../../v4/shared/src/types/browse-search-config-types/interfaces/browse-search-base-config.md#properties) property.

### Search and Filters

The Template Browser workflow allows you to **pre-populate the search** string via the [`searchQuery`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#properties) property and add shortcut search terms to be displayed as suggestions below the search bar via the [`shortcutPillTerms`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#shortcutpillterms) array.

Additionally, you can **hide the search bar and filters** via the [`hideSearchBar`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#properties) and [`hideFilters`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#properties) properties.

```js
const appConfig = {
  contentBrowseConfig: {
    searchQuery: "Instagram story",
    shortcutPillTerms: ["Social", "Business", "Events", "Personal"],
    hideSearchBar: false,  // false by default
    hideFilters:   false,  // false by default
  },
};
```

<InlineAlert slots="text" variant="warning" />

When a [Collection ID](#collections) is used, `shortcutPillTerms` are disabled.

### Header Text

Finally, you can customize the text to be displayed in the header of the module via the [`headerText`](../../v4/shared/src/types/module/app-config-types/interfaces/content-browse-config.md#properties) property.

```js
const appConfig = {
  contentBrowseConfig: {
    headerText: "Browse our Business Card templates",
  },
};
```

## Try it out in the Demo App

The [Adobe Express Embed SDK Demo App](https://demo.expressembed.com/) has been updated to showcase the new Template Browser experience, and it provides code snippets for the new configuration.

[![Demo App](./img/template-browser--demo-app.png)](https://demo.expressembed.com/)
