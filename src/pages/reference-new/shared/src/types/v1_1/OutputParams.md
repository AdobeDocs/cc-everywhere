[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/v1\_1/OutputParams.types

# shared/src/types/v1\_1/OutputParams.types

## Interfaces

### PublishParams

Asset related information received with onPublish callback.

#### Extended by

- [`QuickActionPublishParams`](OutputParams.md#quickactionpublishparams)
- [`CCXPublishParams`](OutputParams.md#ccxpublishparams)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../Asset.md#outputasset) | Asset which is exported |

***

### QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

#### Extends

- [`PublishParams`](OutputParams.md#publishparams)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../Asset.md#outputasset) | Asset which is exported | [`PublishParams`](OutputParams.md#publishparams).`asset` |
| `exportButtonId` | `string` | [[`id`]] passed in the [[`CustomExportButton`]] at time of invoking [[`openQuickAction`]]. | - |
| `targetInfo?` | [`TargetInfo`](../TargetInfo.md#targetinfo) | This field is returned if [[`NativeExportTargetContext.NEW`]] is passed in [[`NativeExportTargetContext`]]. | - |

***

### CCXPublishParams

Asset related information received with onPublish callback.

#### Extends

- [`PublishParams`](OutputParams.md#publishparams)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](../Asset.md#outputasset) | Asset which is exported | [`PublishParams`](OutputParams.md#publishparams).`asset` |
| `projectId` | `string` | Unique identifier for the assets created/edited. | - |
