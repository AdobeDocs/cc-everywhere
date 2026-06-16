---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: OutputAsset

Information related to output asset.

## Extends

- [`AssetBase`](asset-base.md)&lt;[`AssetDataType`](../enumerations/asset-data-type.md)&gt;

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](../enumerations/asset-type.md) | [`AssetBase`](asset-base.md).[`type`](asset-base.md#type) |
| `name?` | `string` | [`AssetBase`](asset-base.md).[`name`](asset-base.md#name) |
| `dataType` | [`AssetDataType`](../enumerations/asset-data-type.md) | [`AssetBase`](asset-base.md).[`dataType`](asset-base.md#datatype) |
| `data` | `string` \| [`Blob`](blob.md) | [`AssetBase`](asset-base.md).[`data`](asset-base.md#data) |
| `fileType` | \| [`JPEG`](../enumerations/image-file-type.md#jpeg) \| [`PNG`](../enumerations/image-file-type.md#png) \| [`PDF`](../enumerations/pdf-file-type.md#pdf) \| [`MP4`](../enumerations/video-file-type.md#mp4) | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](pixel-size.md) | - |
