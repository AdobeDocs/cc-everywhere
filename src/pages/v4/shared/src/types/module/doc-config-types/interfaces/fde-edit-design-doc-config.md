---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDEEditDesignDocConfig

DocConfig for the Focused Design Editor (`module.editDesign()`).
The supported startup sources are `templateId`, `docId`, `asset`, or an `asset`
paired with `documentUrl`. Provide at most one startup source.
Invalid combinations throw `INVALID_FDE_DOC_CONFIG` during validation.
If `documentUrl` and `asset` are provided, the Focused Design Editor opens the
document URL and uses the asset as its seed image.
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
| `documentUrl?` | `string` | URL of a fetchable Artemis-style JSON payload containing `docModel`, `docMetadata`, and `resourcesList`, opened with `asset` as the seed image. This is not an Adobe Express `/id/&lt;URN&gt;` page URL or a `docId`. Requires `asset` and is mutually exclusive with `templateId` and `docId`. **Example** `https://sdc-tmp-store.s3.amazonaws.com/artemis-template-document.json Illustrative only; this URL is not guaranteed to be live.` |
