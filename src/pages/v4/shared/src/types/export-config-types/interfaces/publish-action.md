[**cc-everywhere**](../../../../../index.md)

***

# Interface: PublishAction

## Extends

- [`BaseAction`](../../export-config-types/interfaces/base-action.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `target` | [`PUBLISH`](../../export-config-types/enumerations/publish-target.md#publish) | - | [`BaseAction`](../../export-config-types/interfaces/base-action.md).[`target`](../../export-config-types/interfaces/base-action.md#target) |
| `publishFileType?` | \| [`JPEG`](../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../asset-types/enumerations/pdf-file-type.md#pdf) \| [`MP4`](../../asset-types/enumerations/video-file-type.md#mp4) | The file type of asset to be published | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](../../asset-types/enumerations/asset-data-type.md) | Desired asset data type for images. For image output types, host can set this property to either base64 or url. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |
| `enableByDefault?` | `boolean` | Whether to enable the export option by default. **Default** `false` | - |
