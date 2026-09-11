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
| `type` | [`AssetType`](../enumerations/asset-type.md) | [`AssetBase`](asset-base.md).[`type`](asset-base.md#property-type) |
| `name?` | `string` | [`AssetBase`](asset-base.md).[`name`](asset-base.md#property-name) |
| `dataType` | [`AssetDataType`](../enumerations/asset-data-type.md) | [`AssetBase`](asset-base.md).[`dataType`](asset-base.md#property-datatype) |
| `data` | `string` \| [`Blob`](blob.md) | [`AssetBase`](asset-base.md).[`data`](asset-base.md#property-data) |
| `fileType` | \| [`JPEG`](../enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../enumerations/pdf-file-type.md#enumeration-member-pdf) \| [`MP4`](../enumerations/video-file-type.md#enumeration-member-mp4) \| [`MP3`](../enumerations/audio-file-type.md#enumeration-member-mp3) \| [`M4A`](../enumerations/audio-file-type.md#enumeration-member-m4a) \| [`WAV`](../enumerations/audio-file-type.md#enumeration-member-wav) | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](pixel-size.md) | - |
