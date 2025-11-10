[**cc-everywhere**](../../../../../../index.md)

***

# Interface: EditImageAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Extended by

- [`EditImageAppConfig`](../../../3p/module/app-config-types/interfaces/edit-image-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#pdf))[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. PDF is deprecated in the Edit Image V2 experience, it would default to PNG if specified. **Default** `Enable all formats (PNG and JPEG)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../asset-types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available. **Default** `Enable all types (pdf and pdfPrint)` | - |
| `appVersion?` | [`EditImageAppVersion`](../../app-config-types/enumerations/edit-image-app-version.md) | Specifies the version of the Edit Image experience to be enabled. **Default** `V1` | - |
| `inlineTOUConsent?` | `boolean` | Property to configure whether inline Terms Of User consent will be displayed | - |
