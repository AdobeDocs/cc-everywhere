[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/PublishParams.types

# shared/src/types/PublishParams.types

## Interfaces

### PublishParams

Asset related information received with onPublish callback.

#### Extended by

- [`QuickActionPublishParams`](PublishParams.md#quickactionpublishparams)
- [`EditorPublishParams`](PublishParams.md#editorpublishparams)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`OutputAsset`](Asset.md#outputasset)[] | Asset which is exported |
| `exportButtonId` | `string` | id of the export option clicked |
| `documentId?` | `string` | Unique identifier for the assets created/edited. |

***

### AssetTargetInfo

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | Client id of the application to navigate to. |
| `url` | `string` | URL of the application to navigate to. |

***

### QuickActionPublishParams

Asset related information received with onPublish callback in Quick Actions.

#### Extends

- [`PublishParams`](PublishParams.md#publishparams)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](Asset.md#outputasset)[] | Asset which is exported | [`PublishParams`](PublishParams.md#publishparams).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](PublishParams.md#publishparams).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](PublishParams.md#publishparams).`documentId` |
| `targetInfo?` | [`AssetTargetInfo`](PublishParams.md#assettargetinfo) | This field is returned if current quick actions supports opening asset in express via project id. It contains the target information required to open the asset in Express Editor. | - |

***

### EditorPublishParams

Asset related information received with onPublish callback.

#### Extends

- [`PublishParams`](PublishParams.md#publishparams)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `asset` | [`OutputAsset`](Asset.md#outputasset)[] | Asset which is exported | [`PublishParams`](PublishParams.md#publishparams).`asset` |
| `exportButtonId` | `string` | id of the export option clicked | [`PublishParams`](PublishParams.md#publishparams).`exportButtonId` |
| `documentId?` | `string` | Unique identifier for the assets created/edited. | [`PublishParams`](PublishParams.md#publishparams).`documentId` |
