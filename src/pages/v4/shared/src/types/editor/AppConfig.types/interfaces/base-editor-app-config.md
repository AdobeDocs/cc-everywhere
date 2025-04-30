# Interface: BaseEditorAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md).`callbacks` |
| `selectedCategory?` | [`EditorPanelView`](../../../AppConfig.types/enumerations/editor-panel-view.md) | Category to show by default **Default** `EditorPanelView.TEMPLATES` | - |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | - |
| `templateType?` | [`TemplateType`](../../../AppConfig.types/enumerations/template-type.md) | Canvas template type | - |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | - |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | - |
| `allowedSubFileTypes?` | [`SubFileType`](../../../Asset.types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available, and hence used only if pdf mime type is specified in 'allowedFileTypes'. **Default** `Enable all types (pdf and pdfPrint)` | - |
