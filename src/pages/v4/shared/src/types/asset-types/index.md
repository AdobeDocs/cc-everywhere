# shared/src/types/Asset.types

## Index

### Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AssetType](../asset-types/enumerations/asset-type.md) | File format supported for design operations |
| [AssetDataType](../asset-types/enumerations/asset-data-type.md) | - |
| [SizeUnit](../asset-types/enumerations/size-unit.md) | - |
| [ImageFileType](../asset-types/enumerations/image-file-type.md) | - |
| [VideoFileType](../asset-types/enumerations/video-file-type.md) | - |
| [PdfFileType](../asset-types/enumerations/pdf-file-type.md) | - |
| [SubFileType](../asset-types/enumerations/sub-file-type.md) | - |

### Interfaces

| Interface | Description |
| ------ | ------ |
| [Blob](../asset-types/interfaces/blob.md) | Custom interface that represents a Blob object. Should be used instead of default Blob type. |
| [DataTypeMap](../asset-types/interfaces/data-type-map.md) | Represents a mapping of data types for assets. |
| [AssetBase](../asset-types/interfaces/asset-base.md) | Base interface for all asset types. |
| [Size](../asset-types/interfaces/size.md) | - |
| [PixelSize](../asset-types/interfaces/pixel-size.md) | - |
| [OutputAsset](../asset-types/interfaces/output-asset.md) | Information related to output asset. |

### Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ImageModuleFileTypes](../asset-types/type-aliases/image-module-file-types.md) | - |
| [FileType](../asset-types/type-aliases/file-type.md) | - |
| [Base64Asset](../asset-types/type-aliases/base64-asset.md) | Represents an Asset object containing Base64 encoded data. |
| [UrlAsset](../asset-types/type-aliases/url-asset.md) | Represents an Asset object containing video data within a presinged URL. |
| [BlobAsset](../asset-types/type-aliases/blob-asset.md) | Represents an Asset object containing blob/file data. |
| [Asset](../asset-types/type-aliases/asset.md) | Asset interface used as an input data for all SDK workflows. |
| [AspectRatio](../asset-types/type-aliases/aspect-ratio.md) | - |
| [ImageDimensions](../asset-types/type-aliases/image-dimensions.md) | Represents the dimensions of an image. It takes the size of the image in pixels along with the aspect ratio. |
| [ProcessedImageDimensions](../asset-types/type-aliases/processed-image-dimensions.md) | Represents the processed image dimensions. It includes the size of the image in pixels along with the aspect ratio. It would have computed the aspect ratio value if it was provided as a number in ImageDimensions by bucketing it into one of the predefined aspect ratios. |

### Variables

| Variable | Description |
| ------ | ------ |
| [ImageModuleFileTypes](../asset-types/variables/image-module-file-types.md) | - |
| [FileType](../asset-types/variables/file-type.md) | - |
