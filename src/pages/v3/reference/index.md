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
  - https://github.com/undavide
--- 

# Overview

<InlineAlert variant="error" slots="header, text1, text2, text3" />

### IMPORTANT: Deprecation Warning

We are no longer approving integrations using using SDK V1, V2, or V3.

V1 and V2 are deprecated and V3 will be deprecated in 2024.

Please migrate to V4 as soon as possible: we've created a [Migration Guide](../../guides/concepts/migration_v3_v4.md) to help you with the transition.

## Embed and initialize the SDK

1. Follow the steps in the quickstart guide to [embed the SDK](../../guides/quickstart/index.md#step-2-embed-the-sdk) in your application.
2. After you have imported the SDK to your application, you need to call the `initialize` API first. View the full reference for that [API](./initialize/index.md) here.

## CCEverywhere

Once you have successfully initialized the SDK, a Promise will be returned containing the [CCEverywhere](./CCEverywhere/index.md) object.

As of today, it exposes 5 methods:

1. `createDesign()`: Full editor component
2. `editDesign()`: Full editor component
3. `openQuickAction()`: Quick actions component
4. `close()`: Closes the active editor modal
5. `terminate()`: Un-initializes the active `CCEverywhere` instance

## Types

The [types](./types/index.md) reference page contains details about objects that are shared across the SDK.
