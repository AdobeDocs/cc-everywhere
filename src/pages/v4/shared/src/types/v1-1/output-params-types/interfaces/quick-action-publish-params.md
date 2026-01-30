---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

## Extends

- [`PublishParams`](publish-params.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../../../asset-types/interfaces/output-asset.md) | Asset which is exported | [`PublishParams`](publish-params.md).[`asset`](publish-params.md#asset) |
| `exportButtonId` | `string` | `id` passed in the `CustomExportButton` at time of invoking `openQuickAction`. | - |
| `targetInfo?` | [`TargetInfo`](../../../target-info-types/interfaces/target-info.md) | This field is returned if `NativeExportTargetContext.NEW` is passed in `NativeExportTargetContext`. | - |
