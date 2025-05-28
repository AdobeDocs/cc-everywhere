# Interface: EditImageAppConfig

## Extends

- `AppConfig`

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | `FirstParty.AppConfig.callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../AppConfig.types/type-aliases/BaseAnalyticsData.md) | Analytics data that can be provided by the host app | `FirstParty.AppConfig.analyticsData` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. PDF is deprecated in the Edit Image V2 experience, it would default to PNG if specified. **Default** `Enable all formats (PNG and JPEG)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../Asset.types/enumerations/SubFileType.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available. **Default** `Enable all types (pdf and pdfPrint)` | - |
| `appVersion?` | [`EditImageAppVersion`](../enumerations/EditImageAppVersion.md) | Specifies the version of the Edit Image experience to be enabled. **Default** `V1` | - |
