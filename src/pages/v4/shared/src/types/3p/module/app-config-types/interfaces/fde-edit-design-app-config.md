---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../../index.md)

<HorizontalLine />

# Interface: FDEEditDesignAppConfig

App config for 3P.

## See

[BaseAppConfig](../../../../design-config-types/interfaces/base-app-config.md)

## Extends

- [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `analyticsData?` | [`BaseAnalyticsData`](../../../../app-config-types/interfaces/base-analytics-data.md) | Property to pass analytics data to the host app | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`analyticsData`](../../../app-config-types/interfaces/app-config.md#property-analyticsdata) |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`useClientAuth`](../../../app-config-types/interfaces/app-config.md#property-useclientauth) |
| `callbacks?` | [`Callbacks`](../../../../callbacks-types/interfaces/callbacks.md) | - | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`callbacks`](../../../app-config-types/interfaces/app-config.md#property-callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`metaData`](../../../app-config-types/interfaces/app-config.md#property-metadata) |
| `appVersion?` | [`V1`](../../../../module/app-config-types/enumerations/fde-app-version.md#enumeration-member-v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md).[`appVersion`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md#property-appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md).[`allowedFileTypes`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md#property-allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../../../../module/app-config-types/enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md).[`variant`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md#property-variant) |
| `pdfPrintConfig?` | [`PdfPrintConfig`](../../../../module/app-config-types/interfaces/pdf-print-config.md) | Settings controlling print-ready PDF export. It only takes effect when a Publish action's [PublishAction.publishSubFileType](../../../../export-config-types/interfaces/publish-action.md#property-publishsubfiletype) is [SubFileType.pdfPrint](../../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdfprint) — if it is [SubFileType.pdf](../../../../asset-types/enumerations/sub-file-type.md#enumeration-member-pdf) (or unset), this is ignored and the export stays plain PDF. See [PdfPrintConfig](../../../../module/app-config-types/interfaces/pdf-print-config.md) for the individual field defaults. | [`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md).[`pdfPrintConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md#property-pdfprintconfig) |
| `editorGuideConfig?` | [`EditorGuideConfig`](../../../../module/app-config-types/interfaces/editor-guide-config.md) | Settings controlling the guides displayed in the editor canvas. | [`FDEEditDesignAppConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md).[`editorGuideConfig`](../../../../module/app-config-types/interfaces/fde-edit-design-app-config.md#property-editorguideconfig) |
