---
keywords:
  - CCEverywhere
  - v3
title: CCEverywhere object
description: This is the reference page for CCEverywhere object
contributors:
  - https://github.com/amandahuarng
--- 

# CCEverywhere 

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

The CCEverywhere object is the object returned (wrapped in a promise) when the SDK is initialized.

As of today, it exposes 5 methods:

1. `createDesign()`: Full editor component
2. `editDesign()`: Full editor component
3. `openQuickAction()`: Quick actions component
4. `close()`: Closes the active editor modal
5. `terminate()`: Un-initializes the active `CCEverywhere` instance
