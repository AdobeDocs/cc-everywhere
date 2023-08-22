---
keywords:
  - v3
  - Full editor
  - Template library
  - Embedded editor
  - Embed editor component
title: Embed full editor
description: This is the overview page for the full editor component.
contributors:
  - https://github.com/amandahuarng
  - https://github.com/pklaschka
---

# Full editor

<InlineAlert variant="warning" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

Using the full editor, developers can give end-users an easy way to start a creative design workflow from within their own applications.

## What is the full editor?

The SDK allows you to embed the full Adobe Express editor as an iframe in your own application. Users can work within this modal editor as they would in Adobe Express, and their designs can be saved back to the integrating application as images. Each project created using the full editor is automatically saved into the user's Adobe Express account.

## Read our guides

Users can access Adobe Express's huge template and asset library when starting to create in the editor. You can also launch the editor with a starting asset passed from your application. The editor can also load previous projects (created using your integration) by taking an existing project ID as input.

* [Launch an embedded editor in your application](create_project/index.md)
* [Load a previous project in the editor](edit_project/index.md)

![Full editor](editor.png)

If you are more interested in learning about the quick actions component, refer to our quick action [guides](../quick_actions/index.md).
