[**cc-everywhere**](../../../../../index.md)

***

# Interface: TextToImagePublishParams

Asset related information received with onPublish callback.

## Extends

- [`PublishParams`](publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Asset which is exported | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).[`asset`](../../publish-params-types/interfaces/publish-params.md#asset) |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).[`exportButtonId`](../../publish-params-types/interfaces/publish-params.md#exportbuttonid) |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).[`documentId`](../../publish-params-types/interfaces/publish-params.md#documentid) |
| `prompt` | `string` | prompt used to generate the image. | - |
| `currentScreen?` | `TextToImageScreen` | current screen where the publish action was initiated. | - |
