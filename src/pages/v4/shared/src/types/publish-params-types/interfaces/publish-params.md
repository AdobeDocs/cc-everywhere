[**cc-everywhere**](../../../../../index.md)

***

# Interface: PublishParams

Asset related information received with onPublish callback.

## Extended by

- [`QuickActionPublishParams`](../../publish-params-types/interfaces/quick-action-publish-params.md)
- [`TextToImagePublishParams`](../../publish-params-types/interfaces/text-to-image-publish-params.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="asset"></a> `asset` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Asset which is exported |
| <a id="exportbuttonid"></a> `exportButtonId` | `string` | id of the export option clicked |
| <a id="documentid"></a> `documentId?` | `string` | Unique identifier for the assets created/edited. |
