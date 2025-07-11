[**cc-everywhere**](../../../../../../index.md)

***

# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](../../../v1-1/output-params-types/interfaces/publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="asset"></a> `asset` | [`OutputAsset`](../../../asset-types/interfaces/output-asset.md) | Asset which is exported | [`PublishParams`](../../../v1-1/output-params-types/interfaces/publish-params.md).[`asset`](../../../v1-1/output-params-types/interfaces/publish-params.md#asset) |
| <a id="exportbuttonid"></a> `exportButtonId` | `string` | `id` passed in the `CustomExportButton` at time of invoking `openQuickAction`. | - |
| <a id="targetinfo"></a> `targetInfo?` | [`TargetInfo`](../../../target-info-types/interfaces/target-info.md) | This field is returned if `NativeExportTargetContext.NEW` is passed in `NativeExportTargetContext`. | - |
