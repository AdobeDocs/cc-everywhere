# Interface: OutputAsset

Information related to output asset.

## Extends

- [`AssetBase`](asset-base.md) `AssetDataType.URL` \| `AssetDataType.BASE64`

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../enumerations/asset-type.md) | [`AssetBase`](asset-base.md).`type` |
| `name?` | `string` | [`AssetBase`](asset-base.md).`name` |
| `dataType` | `BASE64` \| `URL` | [`AssetBase`](asset-base.md).`dataType` |
| `data` | `string` | [`AssetBase`](asset-base.md).`data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](pixel-size.md) | - |
