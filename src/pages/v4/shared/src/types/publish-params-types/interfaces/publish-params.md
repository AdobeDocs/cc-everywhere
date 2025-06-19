# Interface: PublishParams

Asset related information received with onPublish callback.

## Extended by

- [`QuickActionPublishParams`](../../publish-params-types/interfaces/quick-action-publish-params.md)
- [`TextToImagePublishParams`](../../publish-params-types/interfaces/text-to-image-publish-params.md)
- [`EditorPublishParams`](../../publish-params-types/interfaces/editor-publish-params.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Asset which is exported |
| `exportButtonId` | `string` | id of the export option clicked |
| `documentId?` | `string` | Unique identifier for the assets created/edited. |
