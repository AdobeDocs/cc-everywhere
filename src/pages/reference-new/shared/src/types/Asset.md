[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/Asset.types

# shared/src/types/Asset.types

**********************************************************************
  ADOBE CONFIDENTIAL

  Copyright 2021 Adobe
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe and its suppliers, if any. The intellectual
  and technical concepts contained herein are proprietary to Adobe
  and its suppliers and are protected by all applicable intellectual
  property laws, including trade secret and copyright laws.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe.
  
************************************************************************

## Enumerations

### AssetType

File format supported for design operations

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `IMAGE` | `"image"` |
| `VIDEO` | `"video"` |
| `PDF` | `"pdf"` |
| `PSD` | `"psd"` |

***

### AssetDataType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `BASE64` | `"base64"` |
| `URL` | `"url"` |
| `BLOB` | `"blob"` |

***

### SizeUnit

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `PIXELS` | `"px"` |
| `MILLIMETERS` | `"mm"` |
| `INCHES` | `"in"` |
| `CENTIMETERS` | `"cm"` |

***

### ImageFileType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `JPEG` | `"image/jpeg"` |
| `PNG` | `"image/png"` |

***

### VideoFileType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `MP4` | `"video/mp4"` |

***

### PdfFileType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `PDF` | `"application/pdf"` |

## Interfaces

### Size

#### Extended by

- [`PixelSize`](Asset.md#pixelsize)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `width` | `number` | **Minimum** 0 |
| `height` | `number` | **Minimum** 0 |
| `unit` | [`SizeUnit`](Asset.md#sizeunit) | - |

***

### PixelSize

#### Extends

- [`Size`](Asset.md#size)

#### Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `width` | `number` | **Minimum** 0 | - | [`Size`](Asset.md#size).`width` |
| `height` | `number` | **Minimum** 0 | - | [`Size`](Asset.md#size).`height` |
| `unit` | `PIXELS` | - | [`Size`](Asset.md#size).`unit` | - |

***

### OutputAsset

Information related to output asset.

#### Extends

- `AssetBase`\<`AssetDataType.URL` \| `AssetDataType.BASE64`\>

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `type` | [`AssetType`](Asset.md#assettype) | `AssetBase.type` |
| `name?` | `string` | `AssetBase.name` |
| `dataType` | `BASE64` \| `URL` | `AssetBase.dataType` |
| `data` | `string` | `AssetBase.data` |
| `fileType` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `fileName?` | `string` | - |
| `size?` | [`PixelSize`](Asset.md#pixelsize) | - |

## Type Aliases

### ImageModuleFileTypes

```ts
type ImageModuleFileTypes: typeof ImageModuleFileTypes[number];
```

***

### FileType

```ts
type FileType: typeof FileType[number];
```

***

### Base64Asset

```ts
type Base64Asset: AssetBase<AssetDataType.BASE64>;
```

Represents an Asset object containing Base64 encoded data.

***

### UrlAsset

```ts
type UrlAsset: AssetBase<AssetDataType.URL>;
```

Represents an Asset object containing video data within a presinged URL.

***

### BlobAsset

```ts
type BlobAsset: AssetBase<AssetDataType.BLOB>;
```

Represents an Asset object containing blob/file data.

***

### Asset

```ts
type Asset: Base64Asset | UrlAsset | BlobAsset;
```

Asset interface used as an input data for all SDK workflows.

## Variables

### ImageModuleFileTypes

```ts
const ImageModuleFileTypes: (JPEG | PNG | PDF)[];
```

***

### FileType

```ts
const FileType: (JPEG | PNG | PDF | MP4)[];
```
