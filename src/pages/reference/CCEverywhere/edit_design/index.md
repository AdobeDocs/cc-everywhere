---
keywords:
  - editDesign
  - Edit existing project
  - Edit project
  - projectId
  - v3
title: editDesign reference
description: This is the reference page for the editDesign API
contributors:
  - https://github.com/amandahuarng
--- 

# editDesign()

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

This API is used for editing an existing project in the embedded full editor.

```ts
editDesign: (editDesignParams: EditDesignParams): void
```

## EditDesignParams

All the properties in this object are optional.

| Property | Type| Description
| :-- | :-- | :--
| callbacks | [Callbacks](../../types/index.md#callbacks) | Callback methods
| modalParams | [ModalParams](../../types/index.md#modalparams) | Parameters to configure editor/modal UI
| inputParams | [EditInputParams](#editinputparams) | Input parameters when editing a design.
| outputParams | [CCXOutputParams](../../types/index.md#ccxoutputparams) | Desired output options when exporting assets from the editor.

### EditInputParams

`EditInputParams` is where you pass the associated projectId to launch in an editor component.
  
| Property | Type | Description
| :-- | :--| :--
| projectId| string | Project ID of the asset returned from `onPublish` callback when `createDesign` was invoked.
| editorPanelView | [EditorPanelView](../../types/index.md#editorpanelview) | Determines which panel view to open by default.
| exportOptions | [ExportOptions](../../types/index.md#exportoptions)[] | Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.
| panelSearchText | string | Search text to pass in the editor for selected panel.

When a user completes their workflow in the editor, the associated **projectId** is sent back in [publishParams](../../types/index.md#publishparams) from the `onPublish` callback.
