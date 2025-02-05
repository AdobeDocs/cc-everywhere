# Interface: TextToImagePublishParams

Asset related information received with onPublish callback.

## Extends

- [`PublishParams`](PublishParams.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/OutputAsset.md)[] | Asset which is exported | [`PublishParams`](PublishParams.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](PublishParams.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](PublishParams.md).`documentId` |
| `prompt` | `string` | prompt used to generate the image. | - |
