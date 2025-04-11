# Interface: BaseEditorAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../AppConfig.types/type-aliases/BaseAnalyticsData.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`analyticsData` |
| `selectedCategory?` | [`EditorPanelView`](../../../AppConfig.types/enumerations/EditorPanelView.md) | Category to show by default **Default** `EditorPanelView.TEMPLATES` | - |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | - |
| `templateType?` | [`TemplateType`](../../../AppConfig.types/enumerations/TemplateType.md) | Canvas template type | - |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | - |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../Asset.types/enumerations/SubFileType.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available, and hence used only if pdf mime type is specified in 'allowedFileTypes'. **Default** `Enable all types (pdf and pdfPrint)` | - |
