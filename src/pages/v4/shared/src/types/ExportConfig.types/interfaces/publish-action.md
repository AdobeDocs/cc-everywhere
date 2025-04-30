# Interface: PublishAction

## Extends

- [`BaseAction`](base-action.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `target` | `PublishTarget` | - | [`BaseAction`](base-action.md).`target` |
| `publishFileType?` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | The file type of asset to be published | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](../../Asset.types/enumerations/asset-data-type.md) | Desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |
