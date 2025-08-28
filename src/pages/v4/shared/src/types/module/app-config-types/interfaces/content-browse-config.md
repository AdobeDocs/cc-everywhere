[**cc-everywhere**](../../../../../../index.md)

***

# Interface: ContentBrowseConfig

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="headertext"></a> `headerText?` | `string` | The text to be displayed in the header of the Start From Content module. **Default** `empty string` |
| <a id="searchquery"></a> `searchQuery?` | `string` | Search Query to be used to search across all browse search categories **Default** `empty string` |
| <a id="hidesearchbar"></a> `hideSearchBar?` | `boolean` | Property to hide the search bar in the Browse Search **Default** `false` |
| <a id="hidefilters"></a> `hideFilters?` | `boolean` | Property to hide the filters in the Browse Search **Default** `false` |
| <a id="shortcutpillterms"></a> `shortcutPillTerms?` | `string`[] | Property to set the shortcut search terms. These terms will be displayed as a list of suggestions below the search bar. **Default** `empty array` |
| <a id="categoriesconfig"></a> `categoriesConfig` | [`BrowseSearchConfigUnion`](../../../browse-search-config-types/type-aliases/browse-search-config-union.md)[] | Configuration for browse search functionality. Can be configured for templates or photos based on the category. |
