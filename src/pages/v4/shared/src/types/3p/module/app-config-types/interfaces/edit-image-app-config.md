---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../../../index.md)

<HorizontalLine />

# Interface: EditImageAppConfig

## Extends

- [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`EditImageAppConfig`](../../../../module/app-config-types/interfaces/edit-image-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `analyticsData?` | [`BaseAnalyticsData`](../../../../app-config-types/interfaces/base-analytics-data.md) | Property to pass analytics data to the host app | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`analyticsData`](../../../app-config-types/interfaces/app-config.md#analyticsdata) |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`useClientAuth`](../../../app-config-types/interfaces/app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../../callbacks-types/interfaces/callbacks.md) | - | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`callbacks`](../../../app-config-types/interfaces/app-config.md#callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`metaData`](../../../app-config-types/interfaces/app-config.md#metadata) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../../asset-types/enumerations/pdf-file-type.md#pdf))[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. PDF is deprecated in the Edit Image V2 experience, it would default to PNG if specified. **Default** `Enable all formats (PNG and JPEG)` | [`EditImageAppConfig`](../../../../module/app-config-types/interfaces/edit-image-app-config.md).[`allowedFileTypes`](../../../../module/app-config-types/interfaces/edit-image-app-config.md#allowedfiletypes) |
| `allowedSubFileTypes?` | [`SubFileType`](../../../../asset-types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available. **Default** `Enable all types (pdf and pdfPrint)` | [`EditImageAppConfig`](../../../../module/app-config-types/interfaces/edit-image-app-config.md).[`allowedSubFileTypes`](../../../../module/app-config-types/interfaces/edit-image-app-config.md#allowedsubfiletypes) |
| `appVersion?` | [`EditImageAppVersion`](../../../../module/app-config-types/enumerations/edit-image-app-version.md) | Specifies the version of the Edit Image experience to be enabled. **Default** `V1` | [`EditImageAppConfig`](../../../../module/app-config-types/interfaces/edit-image-app-config.md).[`appVersion`](../../../../module/app-config-types/interfaces/edit-image-app-config.md#appversion) |
| `inlineTOUConsent?` | `boolean` | Property to configure whether inline Terms Of User consent will be displayed | [`EditImageAppConfig`](../../../../module/app-config-types/interfaces/edit-image-app-config.md).[`inlineTOUConsent`](../../../../module/app-config-types/interfaces/edit-image-app-config.md#inlinetouconsent) |
