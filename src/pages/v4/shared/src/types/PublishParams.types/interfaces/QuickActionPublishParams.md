# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](PublishParams.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../Asset.types/interfaces/OutputAsset.md)[] | Asset which is exported | [`PublishParams`](PublishParams.md).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](PublishParams.md).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](PublishParams.md).`documentId` |
| `targetInfo?` | [`AssetTargetInfo`](AssetTargetInfo.md) | This field is returned if current quick actions supports opening asset in express via project id. It contains the target information required to open the asset in Express Editor. | - |
