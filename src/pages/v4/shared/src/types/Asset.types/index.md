# shared/src/types/Asset.types

## Index

### Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AssetType](enumerations/AssetType.md) | File format supported for design operations |
| [AssetDataType](enumerations/AssetDataType.md) | - |
| [SizeUnit](enumerations/SizeUnit.md) | - |
| [ImageFileType](enumerations/ImageFileType.md) | - |
| [VideoFileType](enumerations/VideoFileType.md) | - |
| [PdfFileType](enumerations/PdfFileType.md) | - |

### Interfaces

| Interface | Description |
| ------ | ------ |
| [Size](interfaces/Size.md) | - |
| [PixelSize](interfaces/PixelSize.md) | - |
| [OutputAsset](interfaces/OutputAsset.md) | Information related to output asset. |

### Type Aliases

| Type alias | Description |
| ------ | ------ |
| [ImageModuleFileTypes](type-aliases/ImageModuleFileTypes.md) | - |
| [FileType](type-aliases/FileType.md) | - |
| [Base64Asset](type-aliases/Base64Asset.md) | Represents an Asset object containing Base64 encoded data. |
| [UrlAsset](type-aliases/UrlAsset.md) | Represents an Asset object containing video data within a presinged URL. |
| [BlobAsset](type-aliases/BlobAsset.md) | Represents an Asset object containing blob/file data. |
| [Asset](type-aliases/Asset.md) | Asset interface used as an input data for all SDK workflows. |
| [AspectRatio](type-aliases/AspectRatio.md) | - |
| [ImageDimensions](type-aliases/ImageDimensions.md) | Represents the dimensions of an image. It takes the size of the image in pixels along with the aspect ratio. |
| [ProcessedImageDimensions](type-aliases/ProcessedImageDimensions.md) | Represents the processed image dimensions. It includes the size of the image in pixels along with the aspect ratio. It would have computed the aspect ratio value if it was provided as a number in ImageDimensions by bucketing it into one of the predefined aspect ratios. |

### Variables

| Variable | Description |
| ------ | ------ |
| [ImageModuleFileTypes](variables/ImageModuleFileTypes.md) | - |
| [FileType](variables/FileType.md) | - |
