---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: PreviewThumbnailsConfig

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `collectionConfig?` | [`CollectionConfig`](collection-config.md) | Configuration used to fetch preview thumbnails from a collection. Includes the collection ID and the number of previews to display. If `count` is not specified, a default of 5 thumbnails will be shown. |
| `previewIds?` | `string`[] | Explicit list of design IDs to be displayed as preview thumbnails. If provided, these IDs take precedence over fetching previews from `collectionId`. |
