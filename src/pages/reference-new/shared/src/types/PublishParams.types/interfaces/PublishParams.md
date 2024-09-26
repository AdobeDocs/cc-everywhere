[cc-everywhere](../../../../../index.md) / [shared/src/types/PublishParams.types](../index.md) / PublishParams

# Interface: PublishParams

Asset related information received with onPublish callback.

## Extended by

- [`QuickActionPublishParams`](QuickActionPublishParams.md)
- [`EditorPublishParams`](EditorPublishParams.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/OutputAsset.md)[] | Asset which is exported |
| `exportButtonId` | `string` | id of the export option clicked |
| `documentId?` | `string` | Unique identifier for the assets created/edited. |
