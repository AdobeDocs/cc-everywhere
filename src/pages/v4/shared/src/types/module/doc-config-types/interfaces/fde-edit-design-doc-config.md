---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDEEditDesignDocConfig

DocConfig for the Focused Design Editor (`module.editDesign()`).
`templateId`, `docId` and `asset` are mutually exclusive — provide at most one.
Passing more than one throws `INVALID_FDE_DOC_CONFIG` during validation.
If `asset` is provided, the Focused Design Editor starts with this image placed on the canvas.
If `docId` is provided, the Focused Design Editor opens the document with the given ID.
If `templateId` is provided, the Focused Design Editor opens the template with the given ID.
If none of the above are provided, the Focused Design Editor opens with a blank canvas.

## Extends

- [`BaseDocConfig`](../../../design-config-types/interfaces/base-doc-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `templateId?` | `string` | The ID of the template to be edited. Mutually exclusive with `docId` and `asset`. **See** [TemplateId](../type-aliases/template-id.md) |
| `docId?` | `string` | The ID of the document to be edited. Mutually exclusive with `templateId` and `asset`. |
| `asset?` | [`Asset`](../../../asset-types/type-aliases/asset.md) | An image asset to open the editor with. When provided, the Focused Design Editor starts with this image placed on the canvas. Mutually exclusive with `templateId` and `docId`. |
