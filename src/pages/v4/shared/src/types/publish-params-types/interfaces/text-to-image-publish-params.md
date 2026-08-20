---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: TextToImagePublishParams

Asset related information received with onPublish callback.

## Extends

- [`PublishParams`](publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Asset which is exported | [`PublishParams`](publish-params.md).[`asset`](publish-params.md#asset) |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](publish-params.md).[`exportButtonId`](publish-params.md#exportbuttonid) |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](publish-params.md).[`documentId`](publish-params.md#documentid) |
| `assetPreview?` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Additional preview assets generated during export, alongside the primary export, if requested via PublishAction.previewConfig. | [`PublishParams`](publish-params.md).[`assetPreview`](publish-params.md#assetpreview) |
| `prompt` | `string` | prompt used to generate the image. | - |
| `currentScreen?` | `TextToImageScreen` | current screen where the publish action was initiated. | - |
