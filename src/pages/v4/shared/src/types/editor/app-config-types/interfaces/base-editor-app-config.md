# Interface: BaseEditorAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`analyticsData` |
| `selectedCategory?` | [`EditorPanelView`](../../../app-config-types/enumerations/editor-panel-view.md) | Category to show by default **Default** `EditorPanelView.TEMPLATES` | - |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | - |
| `assetCollection?` | `string` | Asset collection to filter templates | - |
| `templateType?` | [`TemplateType`](../../../app-config-types/enumerations/template-type.md) | Canvas template type | - |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | - |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../asset-types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available, and hence used only if pdf mime type is specified in 'allowedFileTypes'. **Default** `Enable all types (pdf and pdfPrint)` | - |
| `showPageMargin?` | `boolean` | Show page margin **Default** `false` | - |
| `showBleedArea?` | `boolean` | Show bleed area **Default** `false` | - |
