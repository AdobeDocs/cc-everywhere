# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](publish-params/index.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../../Asset.types/interfaces/output-asset/index.md) | Asset which is exported | [`PublishParams`](publish-params/index.md).`asset` |
| `exportButtonId` | `string` | `id` passed in the `CustomExportButton` at time of invoking `openQuickAction`. | - |
| `targetInfo?` | [`TargetInfo`](../../../TargetInfo.types/interfaces/target-info/index.md) | This field is returned if `NativeExportTargetContext.NEW` is passed in `NativeExportTargetContext`. | - |
