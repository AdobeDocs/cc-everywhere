# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](../../publish-params-types/interfaces/publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../asset-types/interfaces/output-asset.md)[] | Asset which is exported | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](../../publish-params-types/interfaces/publish-params.md).`documentId` |
| `targetInfo?` | [`AssetTargetInfo`](../../publish-params-types/interfaces/asset-target-info.md) | This field is returned if current quick actions supports opening asset in express via project id. It contains the target information required to open the asset in Express Editor. | - |
