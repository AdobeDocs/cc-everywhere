---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: PublishAction

Action for publishing content to the host application.

## See

 - [BaseAction](base-action.md) for the base interface
 - [PublishExportOption](publish-export-option.md) for options that use this action

## Extends

- [`BaseAction`](base-action.md)

## Properties

| Property | Type | Description | Overrides |
| ------ | ------ | ------ | ------ |
| `target` | [`PUBLISH`](../enumerations/publish-target.md#enumeration-member-publish) | - | [`BaseAction`](base-action.md).[`target`](base-action.md#property-target) |
| `publishFileType?` | \| [`JPEG`](../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf) \| [`MP4`](../../asset-types/enumerations/video-file-type.md#enumeration-member-mp4) \| [`MP3`](../../asset-types/enumerations/audio-file-type.md#enumeration-member-mp3) \| [`M4A`](../../asset-types/enumerations/audio-file-type.md#enumeration-member-m4a) \| [`WAV`](../../asset-types/enumerations/audio-file-type.md#enumeration-member-wav) | The file type of asset to be published | - |
| `publishSubFileType?` | [`SubFileType`](../../asset-types/enumerations/sub-file-type.md) | When [PublishAction.publishFileType](#property-publishfiletype) is a PDF file type, selects which PDF flavor to publish — [SubFileType.pdf](../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdf) (plain) or [SubFileType.pdfPrint](../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdfprint) (print-ready). Ignored for non-PDF file types. **Default** [SubFileType.pdf](../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdf) | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](../../asset-types/enumerations/asset-data-type.md) | Desired asset data type for images. For image output types, host can set this property to either base64, url or blob. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |
| `enableByDefault?` | `boolean` | Whether to enable the export option by default. **Default** `false` | - |
| `publishModalTitle?` | `string` | Property to configure the Publish Modal title. This allows to change the Publish Modal title from the default title to a custom title based on the publish action. This takes precedence over the EditImageAppConfig.publishModalTitle if the current workflow is Edit Image. | - |
| `blockEditingDuringExport?` | `boolean` | When true, the export progress dialog will not allow the user to dismiss it and continue editing while a video export is in progress. The OK button will be hidden and the dialog acts as a blocking modal until export completes or is cancelled. This is only applicable to video exports (MP4). **Default** `false` | - |
| `previewConfig?` | [`AssetPreviewConfig`](asset-preview-config.md) | Configuration for generating an additional preview of the exported asset. See [AssetPreviewConfig](asset-preview-config.md). | - |
