[**cc-everywhere**](../../../../../../index.md)

***

# Interface: BaseEditorAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="callbacks"></a> `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| <a id="selectedcategory"></a> `selectedCategory?` | [`EditorPanelView`](../../../app-config-types/enumerations/editor-panel-view.md) | Category to show by default **Default** `EditorPanelView.TEMPLATES` | - |
| <a id="categorysearchtext"></a> `categorySearchText?` | `string` | Search text to pass in the editor for selected panel. | - |
| <a id="assetcollection"></a> `assetCollection?` | `string` | Asset collection to filter templates | - |
| <a id="templatetype"></a> `templateType?` | [`TemplateType`](../../../app-config-types/enumerations/template-type.md) | Canvas template type | - |
| <a id="multipage"></a> `multiPage?` | `boolean` | Multi page export supported **Default** `true` | - |
| <a id="allowedfiletypes"></a> `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#pdf) \| [`MP4`](../../../asset-types/enumerations/video-file-type.md#mp4))[] | Specify the list of file types that the user can publish. This can be used to limit the publish options as per mime types for end users. Only applicable for Editor workflows and Edit Image Module. Does not affect Quick Action export. **Default** `Enable all formats (PNG, JPEG, MP4 and PDF)` | - |
| <a id="allowedsubfiletypes"></a> `allowedSubFileTypes?` | [`SubFileType`](../../../asset-types/enumerations/sub-file-type.md)[] | Specify the list of sub-file types that the user can publish. This can be used to limit the publish options as per file types for end users. Currently, only PDF sub-file types are available, and hence used only if pdf mime type is specified in 'allowedFileTypes'. **Default** `Enable all types (pdf and pdfPrint)` | - |
| <a id="showpagemargin"></a> `showPageMargin?` | `boolean` | Show page margin **Default** `false` | - |
| <a id="showbleedarea"></a> `showBleedArea?` | `boolean` | Show bleed area **Default** `false` | - |
