---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: ContentBrowseConfig

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `headerText?` | `string` | The text to be displayed in the header of the Start From Content module. **Default** `empty string` |
| `searchQuery?` | `string` | Search Query to be used to search across all browse search categories **Default** `empty string` |
| `hideSearchBar?` | `boolean` | Property to hide the search bar in the Browse Search **Default** `false` |
| `hideFilters?` | `boolean` | Property to hide the filters in the Browse Search **Default** `false` |
| `shortcutPillTerms?` | `string`[] | Property to set the shortcut search terms. These terms will be displayed as a list of suggestions below the search bar. **Default** `empty array` |
| `categoriesConfig` | [`BrowseSearchConfigUnion`](../../../browse-search-config-types/type-aliases/browse-search-config-union.md)[] | Configuration for browse search functionality. Can be configured for templates or photos based on the category. |
