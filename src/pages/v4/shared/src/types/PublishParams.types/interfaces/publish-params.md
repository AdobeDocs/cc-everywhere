# Interface: PublishParams

Asset related information received with onPublish callback.

## Extended by

- [`QuickActionPublishParams`](QuickActionpublish-params.md)
- [`TextToImagePublishParams`](TextToImagepublish-params.md)
- [`EditorPublishParams`](editor-publish-params.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/output-asset/index.md)[] | Asset which is exported |
| `exportButtonId` | `string` | id of the export option clicked |
| `documentId?` | `string` | Unique identifier for the assets created/edited. |
