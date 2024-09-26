[cc-everywhere](../../../../../index.md) / [shared/src/types/ExportConfig.types](../index.md) / PublishAction

# Interface: PublishAction

## Extends

- [`BaseAction`](BaseAction.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `target` | `PublishTarget` | - | [`BaseAction`](BaseAction.md).`target` |
| `publishFileType?` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | The file type of asset to be published | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](../../Asset.types/enumerations/AssetDataType.md) | Desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |
