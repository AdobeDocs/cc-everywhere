---
keywords:
  - CCEverywhere
  - v3
title: CCEverywhere object
description: This is the reference page for CCEverywhere object
contributors:
  - https://github.com/amandahuarng
  - https://github.com/undavide
--- 

# CCEverywhere

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving new integrations using SDK v3, which will be deprecated in 2024.

Please migrate to V4 as soon as possible: we've created a [Migration Guide](../../../guides/concepts/migration_v3_v4.md) to help you with the transition.

The CCEverywhere object is the object returned (wrapped in a promise) when the SDK is initialized.

As of today, it exposes 5 methods:

1. `createDesign()`: Full editor component
2. `editDesign()`: Full editor component
3. `openQuickAction()`: Quick actions component
4. `close()`: Closes the active editor modal
5. `terminate()`: Un-initializes the active `CCEverywhere` instance
