[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/types/Asset.types](../index.md) / OutputAsset

# Interface: OutputAsset

Information related to output asset.

## Extends

- `AssetBase`\<`AssetDataType.URL` \| `AssetDataType.BASE64`\>

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../enumerations/AssetType.md) | `AssetBase.type` |
| `name?` | `string` | `AssetBase.name` |
| `dataType` | `BASE64` \| `URL` | `AssetBase.dataType` |
| `data` | `string` | `AssetBase.data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](PixelSize.md) | - |
