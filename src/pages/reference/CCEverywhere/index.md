---
keywords:
  - API Documentation
  - Reference
  - Initialize
  - CCEverywhere
  - v3
title: SDK Reference
description: This is the reference page for the existing components in the SDK.
contributors:
  - https://github.com/amandahuarng
--- 

# CCEverywhere 

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

The CCEverywhere object is the object returned (wrapped in a promise) when the SDK is initialized.

As of today, it exposes 4 methods:

1. `openQuickAction()`: Quick actions component
2. `createDesign()`: Full editor component
3. `editDesign()`: Full editor component

## close()

#### `close: () => boolean`

The default method `close()` will close the editor modal. This method will:

* Return **true** once it successfully closes the instance of `CCEverywhere`
* Return **false** if there is no active `CCEverywhere` instance.
