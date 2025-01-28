# Interface: TextToImagePublishParams

Asset related information received with onPublish callback.

## Extends

- [`PublishParams`](publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/output-asset.md)[] | Asset which is exported | [`PublishParams`](publish-params.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](publish-params.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](publish-params.md).`documentId` |
| `prompt` | `string` | prompt used to generate the image. | - |