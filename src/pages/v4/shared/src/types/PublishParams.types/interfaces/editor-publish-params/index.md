# Interface: EditorPublishParams

Asset related information received with onPublish callback.

## Extends

- [`PublishParams`](publish-params/index.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/output-asset/index.md)[] | Asset which is exported | [`PublishParams`](publish-params/index.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](publish-params/index.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](publish-params/index.md).`documentId` |
