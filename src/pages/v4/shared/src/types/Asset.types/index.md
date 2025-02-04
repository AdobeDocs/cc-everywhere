# shared/src/types/Asset.types

## Index

### Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AssetType](enumerations/asset-type/index.md) | File format supported for design operations |
| [AssetDataType](enumerations/asset-data-type/index.md) | - |
| [SizeUnit](enumerations/size-unit/index.md) | - |
| [ImageFileType](enumerations/image-file-type/index.md) | - |
| [VideoFileType](enumerations/video-file-type/index.md) | - |
| [PdfFileType](enumerations/pdf-file-type/index.md) | - |

### Interfaces

| Interface | Description |
| ------ | ------ |
| [Size](interfaces/size/index.md) | - |
| [PixelSize](interfaces/pixel-size/index.md) | - |
| [OutputAsset](interfaces/output-asset/index.md) | Information related to output asset. |

### Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ImageModuleFileTypes](type-aliases/image-module-file-types/index.md) | - |
| [FileType](type-aliases/file-type/index.md) | - |
| [Base64Asset](type-aliases/base64-asset/index.md) | Represents an Asset object containing Base64 encoded data. |
| [UrlAsset](type-aliases/Urlasset.md) | Represents an Asset object containing video data within a presinged URL. |
| [BlobAsset](type-aliases/blob-asset/index.md) | Represents an Asset object containing blob/file data. |
| [Asset](type-aliases/asset/index.md) | Asset interface used as an input data for all SDK workflows. |
| [AspectRatio](type-aliases/aspect-ratio/index.md) | - |
| [ImageDimensions](type-aliases/image-dimensions/index.md) | Represents the dimensions of an image. It takes the size of the image in pixels along with the aspect ratio. |
| [ProcessedImageDimensions](type-aliases/processed-image-dimensions/index.md) | Represents the processed image dimensions. It includes the size of the image in pixels along with the aspect ratio. It would have computed the aspect ratio value if it was provided as a number in ImageDimensions by bucketing it into one of the predefined aspect ratios. |

### Variables

| Variable | Description |
| ------ | ------ |
| [ImageModuleFileTypes](variables/image-module-file-types/index.md) | - |
| [FileType](variables/file-type/index.md) | - |
