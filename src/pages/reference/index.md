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
--- 

# Overview

## Embed and initialize the SDK

1. Follow the steps in the quickstart guide to [embed the SDK](../guides/quickstart/index.md#step-2-embed-the-sdk) in your application.
2. After you have imported the SDK to your application, you need to call the `initialize` API first. View the full reference for that [API](./initialize/index.md) here.

## CCEverywhere

Once you have successfully initialized the SDK, a Promise will be returned containing the [CCEverywhere](./CCEverywhere/index.md) object.

As of today, it exposes:

1. `editor`: Contains APIs for creating and editing in an embedded full editor
2. `quickAction`: Contains APIs for launching quick actions
3. `module`: Contains APIs for launching modules (Generate Image, edit image)


## Types

The [types](./types/index.md) reference page contains details about objects that are shared across the SDK.
