[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Interface: PublishParams

Asset related information received with onPublish callback.

## Extended by

- [`QuickActionPublishParams`](quick-action-publish-params.md)
- [`TextToImagePublishParams`](text-to-image-publish-params.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](..\..\asset-types\interfaces\output-asset.md)[] | Asset which is exported |
| `exportButtonId` | `string` | id of the export option clicked |
| `documentId?` | `string` | Unique identifier for the assets created/edited. |
