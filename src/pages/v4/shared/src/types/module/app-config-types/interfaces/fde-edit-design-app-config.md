---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDEEditDesignAppConfig

App config for editDesign (FDE MXP editor entry).

## Extends

- [`FDEBaseAppConfig`](fde-base-app-config.md)

## Extended by

- [`FDEEditDesignAppConfig`](../../../3p/module/app-config-types/interfaces/fde-edit-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `appVersion?` | [`V1`](../enumerations/fde-app-version.md#enumeration-member-v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`appVersion`](fde-base-app-config.md#property-appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`allowedFileTypes`](fde-base-app-config.md#property-allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`variant`](fde-base-app-config.md#property-variant) |
| `pdfPrintConfig?` | [`PdfPrintConfig`](pdf-print-config.md) | Settings controlling print-ready PDF export. It only takes effect when a Publish action's [PublishAction.publishSubFileType](../../../export-config-types/interfaces/publish-action.md#property-publishsubfiletype) is [SubFileType.pdfPrint](../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdfprint) — if it is [SubFileType.pdf](../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdf) (or unset), this is ignored and the export stays plain PDF. See [PdfPrintConfig](pdf-print-config.md) for the individual field defaults. | - |
| `editorGuideConfig?` | [`EditorGuideConfig`](editor-guide-config.md) | Settings controlling the guides displayed in the editor canvas. | - |
