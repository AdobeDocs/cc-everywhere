# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/output-asset.md)[] | Asset which is exported | [`PublishParams`](publish-params.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](publish-params.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](publish-params.md).`documentId` |
| `targetInfo?` | [`AssetTargetInfo`](asset-target-info.md) | This field is returned if current quick actions supports opening asset in express via project id. It contains the target information required to open the asset in Express Editor. | - |