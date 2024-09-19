[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / shared/src/types/editor/AppConfig.types

# shared/src/types/editor/AppConfig.types

## Interfaces

### BaseEditorAppConfig

#### Extends

- [`BaseAppConfig`](../DesignConfig.md#baseappconfig)

#### Extended by

- [`EditorAppConfig`](../1p/editor/AppConfig.md#editorappconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../Callbacks.md#callbacks) | - | [`BaseAppConfig`](../DesignConfig.md#baseappconfig).`callbacks` |
| `selectedCategory?` | [`EditorPanelView`](../AppConfig.md#editorpanelview) | Category to show by default **Default** [[`EditorPanelView.TEMPLATES`]] | - |
| `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | - |
| `templateType?` | [`TemplateType`](../AppConfig.md#templatetype) | Canvas template type | - |
| `multiPage?` | `boolean` | Multi page export supported **Default** `true` | - |
| `allowedFileTypes?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per file types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | - |

## Type Aliases

### AppConfig

```ts
type AppConfig: EditorAppConfig & EditorAppConfig;
```
