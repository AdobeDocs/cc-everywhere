# Interface: EditImageAppConfig

## Extends

- `AppConfig`

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | `FirstParty.AppConfig.callbacks` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. **Default** `Enable all formats (PNG, JPEG, and PDF)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../Asset.types/enumerations/SubFileType.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available. **Default** `Enable all types (pdf and pdfPrint)` | - |
