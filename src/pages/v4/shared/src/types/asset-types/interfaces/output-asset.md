[**cc-everywhere**](../../../../../index.md)

***

# Interface: OutputAsset

Information related to output asset.

## Extends

- [`AssetBase`](../../asset-types/interfaces/asset-base.md)<
  \| [`URL`](../../asset-types/enumerations/asset-data-type.md#url)
  \| [`BASE64`](../../asset-types/enumerations/asset-data-type.md#base64)\>

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| <a id="type"></a> `type` | [`AssetType`](../../asset-types/enumerations/asset-type.md) | [`AssetBase`](../../asset-types/interfaces/asset-base.md).[`type`](../../asset-types/interfaces/asset-base.md#type) |
| <a id="name"></a> `name?` | `string` | [`AssetBase`](../../asset-types/interfaces/asset-base.md).[`name`](../../asset-types/interfaces/asset-base.md#name) |
| <a id="datatype"></a> `dataType` | \| [`BASE64`](../../asset-types/enumerations/asset-data-type.md#base64) \| [`URL`](../../asset-types/enumerations/asset-data-type.md#url) | [`AssetBase`](../../asset-types/interfaces/asset-base.md).[`dataType`](../../asset-types/interfaces/asset-base.md#datatype) |
| <a id="data"></a> `data` | `string` | [`AssetBase`](../../asset-types/interfaces/asset-base.md).[`data`](../../asset-types/interfaces/asset-base.md#data) |
| <a id="filetype"></a> `fileType` | \| [`JPEG`](../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../asset-types/enumerations/pdf-file-type.md#pdf) \| [`MP4`](../../asset-types/enumerations/video-file-type.md#mp4) | - |
| <a id="filename"></a> `fileName?` | `string` | - |
| <a id="size"></a> `size?` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | - |
