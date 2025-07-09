[**cc-everywhere**](../../../../../../index.md)

***

# Interface: EditImageAppConfig

## Extends

- `AppConfig`

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="callbacks"></a> `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | `FirstParty.AppConfig.callbacks` |
| <a id="analyticsdata"></a> `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | `FirstParty.AppConfig.analyticsData` |
| <a id="allowedfiletypes"></a> `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#pdf))[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. PDF is deprecated in the Edit Image V2 experience, it would default to PNG if specified. **Default** `Enable all formats (PNG and JPEG)` | - |
| <a id="allowedsubfiletypes"></a> `allowedSubFileTypes?` | [`SubFileType`](../../../asset-types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available. **Default** `Enable all types (pdf and pdfPrint)` | - |
| <a id="appversion"></a> `appVersion?` | [`EditImageAppVersion`](../../app-config-types/enumerations/edit-image-app-version.md) | Specifies the version of the Edit Image experience to be enabled. **Default** `V1` | - |
