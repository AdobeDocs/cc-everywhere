[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / shared/src/types/1p/editor/AppConfig.types

# shared/src/types/1p/editor/AppConfig.types

## Interfaces

### EditorAppConfig

#### Extends

- `AppConfig`.[`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `publishModalTitle?` | `string` | Property to configure the Modal titles | - |
| `publishErrorModalTitle?` | `string` | - | - |
| `callbacks?` | [`Callbacks`](../../Callbacks.md#callbacks) | - | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`callbacks` |
| `selectedCategory?` | [`EditorPanelView`](../../AppConfig.md#editorpanelview) | Category to show by default **Default** [[`EditorPanelView.TEMPLATES`]] | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`selectedCategory` |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`categorySearchText` |
| `templateType?` | [`TemplateType`](../../AppConfig.md#templatetype) | Canvas template type | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`templateType` |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`multiPage` |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | [`BaseEditorAppConfig`](../../editor/AppConfig.md#baseeditorappconfig).`allowedFileTypes` |
