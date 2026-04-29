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
| `target` | [`PUBLISH`](../enumerations/publish-target.md#publish) | - | [`BaseAction`](base-action.md).[`target`](base-action.md#target) |
| `publishFileType?` | \| [`JPEG`](../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../asset-types/enumerations/pdf-file-type.md#pdf) \| [`MP4`](../../asset-types/enumerations/video-file-type.md#mp4) | The file type of asset to be published | - |
| `closeTargetOnExport?` | `boolean` | - | - |
| `outputType?` | [`AssetDataType`](../../asset-types/enumerations/asset-data-type.md) | Desired asset data type for images. For image output types, host can set this property to either base64, url or blob. Default type for images is base64. For videos, we will always send output as url irrespective of this property. **Default** `base64` | - |
| `enableByDefault?` | `boolean` | Whether to enable the export option by default. **Default** `false` | - |
| `publishModalTitle?` | `string` | Property to configure the Publish Modal title. This allows to change the Publish Modal title from the default title to a custom title based on the publish action. This takes precedence over the EditImageAppConfig.publishModalTitle if the current workflow is Edit Image. | - |
