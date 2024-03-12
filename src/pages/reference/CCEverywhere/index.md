---
keywords:
  - CCEverywhere
  - v4
title: CCEverywhere object
description: This is the reference page for CCEverywhere object
contributors:
  - https://github.com/amandahuarng
--- 

# CCEverywhere 

<InlineAlert variant="error" slots="header, text" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated in 2024.

The CCEverywhere object is the object returned (wrapped in a promise) when the SDK is initialized. We have refactored the SDK APIs to be more verbose and intent-driven. All the APIs are segregated under three workflows, each of which are exposed as a property of `CCEverywhere`.

As of today, it contains 3 properties:

1. `editor`: Contains APIs for creating and editing in an embedded full editor
2. `quickAction`: Contains APIs for launching quick actions
3. `module`: Contains APIs for launching modules (text to image, image editing)

<!-- 4. `close()`: Closes the active editor modal
1. `terminate()`: Un-initializes the active `CCEverywhere` instance -->

```js
const { editor, module, quickAction } = await ccEverywhere.initialize();
```
