---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: CreateGuidedDesignAppConfig

App config for createGuidedDesign (FDE MXP — guided design creation entry).

## Extends

- [`FDEBaseAppConfig`](fde-base-app-config.md)

## Extended by

- [`CreateGuidedDesignAppConfig`](../../../3p/module/app-config-types/interfaces/create-guided-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `appVersion?` | [`V1`](../enumerations/fde-app-version.md#enumeration-member-v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`appVersion`](fde-base-app-config.md#property-appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`allowedFileTypes`](fde-base-app-config.md#property-allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`variant`](fde-base-app-config.md#property-variant) |
| `guidedWorkflowVariant?` | [`SUBS_BOARD`](../enumerations/guided-workflow-variant.md#enumeration-member-subs_board) | Specifies which guided-creation experience variant to launch. | - |
| `previewThumbnails?` | [`PreviewThumbnailsConfig`](preview-thumbnails-config.md) | Configuration for the preview thumbnails component that displays design previews from a collection or an explicit list of design IDs. | - |
