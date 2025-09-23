[**cc-everywhere**](../../../../index.md)

***

# shared/src/types/Asset.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AssetType](enumerations/asset-type.md) | File format supported for design operations |
| [AssetDataType](enumerations/asset-data-type.md) | - |
| [SizeUnit](enumerations/size-unit.md) | - |
| [ImageFileType](enumerations/image-file-type.md) | - |
| [VideoFileType](enumerations/video-file-type.md) | - |
| [PdfFileType](enumerations/pdf-file-type.md) | - |
| [SubFileType](enumerations/sub-file-type.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [Blob](interfaces/blob.md) | Custom interface that represents a Blob object. Should be used instead of default Blob type. |
| [DataTypeMap](interfaces/data-type-map.md) | Represents a mapping of data types for assets. |
| [AssetBase](interfaces/asset-base.md) | Base interface for all asset types. |
| [Size](interfaces/size.md) | - |
| [PixelSize](interfaces/pixel-size.md) | - |
| [OutputAsset](interfaces/output-asset.md) | Information related to output asset. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ImageModuleFileTypes](type-aliases/image-module-file-types.md) | - |
| [FileType](type-aliases/file-type.md) | - |
| [Base64Asset](type-aliases/base64-asset.md) | Represents an Asset object containing Base64 encoded data. |
| [UrlAsset](type-aliases/url-asset.md) | Represents an Asset object containing video data within a presigned URL. |
| [BlobAsset](type-aliases/blob-asset.md) | Represents an Asset object containing blob/file data. |
| [Asset](type-aliases/asset.md) | Asset interface used as an input data for all SDK workflows. |
| [AspectRatio](type-aliases/aspect-ratio.md) | - |
| [ImageDimensions](type-aliases/image-dimensions.md) | Represents the dimensions of an image. It takes the size of the image in pixels along with the aspect ratio. |
| [ProcessedImageDimensions](type-aliases/processed-image-dimensions.md) | Represents the processed image dimensions. It includes the size of the image in pixels along with the aspect ratio. It would have computed the aspect ratio value if it was provided as a number in ImageDimensions by bucketing it into one of the predefined aspect ratios. |

## Variables

| Variable | Description |
| ------ | ------ |
| [ImageModuleFileTypes](variables/image-module-file-types.md) | - |
| [FileType](variables/file-type.md) | - |
