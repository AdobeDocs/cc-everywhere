[**cc-everywhere**](../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../index.md) / [shared/src/types/v1\_1/OutputParams.types](../index.md) / QuickActionPublishParams

# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](PublishParams.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../../Asset.types/interfaces/OutputAsset.md) | Asset which is exported | [`PublishParams`](PublishParams.md).`asset` |
| `exportButtonId` | `string` | [[`id`]] passed in the [[`CustomExportButton`]] at time of invoking [[`openQuickAction`]]. | - |
| `targetInfo?` | [`TargetInfo`](../../../TargetInfo.types/interfaces/TargetInfo.md) | This field is returned if [[`NativeExportTargetContext.NEW`]] is passed in [[`NativeExportTargetContext`]]. | - |
