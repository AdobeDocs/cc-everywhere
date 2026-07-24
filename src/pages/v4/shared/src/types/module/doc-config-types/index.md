---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# shared/src/types/module/DocConfig.types

## Interfaces

| Interface | Description |
| ------ | ------ |
| [EditImageDocConfig](interfaces/edit-image-doc-config.md) | - |
| [EditFromTemplateDocConfig](interfaces/edit-from-template-doc-config.md) | - |
| [FDEEditDesignDocConfig](interfaces/fde-edit-design-doc-config.md) | DocConfig for the Focused Design Editor (`module.editDesign()`). `templateId`, `docId` and `asset` are mutually exclusive — provide at most one. Passing more than one throws `INVALID_FDE_DOC_CONFIG` during validation. If `asset` is provided, the Focused Design Editor starts with this image placed on the canvas. If `docId` is provided, the Focused Design Editor opens the document with the given ID. If `templateId` is provided, the Focused Design Editor opens the template with the given ID. If none of the above are provided, the Focused Design Editor opens with a blank canvas. |
| [AnnotateImageDocConfig](interfaces/annotate-image-doc-config.md) | - |
| [DesignViewerDocConfig](interfaces/design-viewer-doc-config.md) | - |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [TemplateId](type-aliases/template-id.md) | Adobe Express template identifier (URN string, e.g. `urn:aaid:sc:VA6C2:…`). A distinct type so tooling (test-app widget map, generated JSON Schema `$ref`) can select a richer UI widget automatically. |
| [EditImageIntent](type-aliases/edit-image-intent.md) | Intent type for editing image. |
