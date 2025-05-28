# Interface: OutputAsset

Information related to output asset.

## Extends

- [`AssetBase`](../../asset-types/interfaces/asset-base.md)<`AssetDataType.URL` \| `AssetDataType.BASE64`\>

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../../asset-types/enumerations/asset-type.md) | [`AssetBase`](../../asset-types/interfaces/asset-base.md).`type` |
| `name?` | `string` | [`AssetBase`](../../asset-types/interfaces/asset-base.md).`name` |
| `dataType` | `BASE64` \| `URL` | [`AssetBase`](../../asset-types/interfaces/asset-base.md).`dataType` |
| `data` | `string` | [`AssetBase`](../../asset-types/interfaces/asset-base.md).`data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | - |
