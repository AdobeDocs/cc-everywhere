# Interface: OutputAsset

Information related to output asset.

## Extends

- [`AssetBase`](AssetBase.md)<`AssetDataType.URL` \| `AssetDataType.BASE64`\>

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../enumerations/AssetType.md) | [`AssetBase`](AssetBase.md).`type` |
| `name?` | `string` | [`AssetBase`](AssetBase.md).`name` |
| `dataType` | `BASE64` \| `URL` | [`AssetBase`](AssetBase.md).`dataType` |
| `data` | `string` | [`AssetBase`](AssetBase.md).`data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](pixel-size/index.md) | - |
