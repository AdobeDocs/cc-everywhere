[cc-everywhere](../../../../../../../index.md) / [shared/src/types/1p/editor/AppConfig.types](../index.md) / EditorAppConfig

# Interface: EditorAppConfig

## Extends

- `AppConfig`.[`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `publishModalTitle?` | `string` | Property to configure the Modal titles | - |
| `publishErrorModalTitle?` | `string` | - | - |
| `callbacks?` | [`Callbacks`](../../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`callbacks` |
| `selectedCategory?` | [`EditorPanelView`](../../../../AppConfig.types/enumerations/EditorPanelView.md) | Category to show by default **Default** `EditorPanelView.TEMPLATES` | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`selectedCategory` |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`categorySearchText` |
| `templateType?` | [`TemplateType`](../../../../AppConfig.types/enumerations/TemplateType.md) | Canvas template type | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`templateType` |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`multiPage` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | [`BaseEditorAppConfig`](../../../../editor/AppConfig.types/interfaces/BaseEditorAppConfig.md).`allowedFileTypes` |
