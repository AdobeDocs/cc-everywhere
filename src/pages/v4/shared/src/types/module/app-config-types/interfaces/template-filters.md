---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: TemplateFilters

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `behaviors?` | [`TemplateMediaType`](../../../app-config-types/enumerations/template-media-type.md)[] | Which template kinds to include. Maps to Inspire `behaviors` filter. |
| `dimensions?` | [`Size`](../../../asset-types/interfaces/size.md) | Width / height / unit for filtering templates and blank canvas on start-from-scratch. |
| `templateType?` | [`BrowseTemplateType`](../enumerations/browse-template-type.md) | Product line → template task name (kebab-case). Restricted to [BrowseTemplateType](../enumerations/browse-template-type.md). |
