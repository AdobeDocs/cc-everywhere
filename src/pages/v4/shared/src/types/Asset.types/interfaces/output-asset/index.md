# Interface: OutputAsset

Information related to output asset.

## Extends

- `AssetBase`<`AssetDataType.URL` \| `AssetDataType.BASE64`\>

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../enumerations/asset-type/index.md) | `AssetBase.type` |
| `name?` | `string` | `AssetBase.name` |
| `dataType` | `BASE64` \| `URL` | `AssetBase.dataType` |
| `data` | `string` | `AssetBase.data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](pixel-size/index.md) | - |
