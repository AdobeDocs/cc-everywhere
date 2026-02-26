---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: BrowseModeConfig

Configuration for browse mode - the default workflow where users see template gallery first.
This is the standard flow where users browse templates and then select one to preview.
Extends base config with browse-specific properties like search and filters.

## Extends

- [`ContentBrowseBaseConfig`](content-browse-base-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `headerText?` | `string` | The text to be displayed in the header of the Start From Content module. **Default** `empty string` | [`ContentBrowseBaseConfig`](content-browse-base-config.md).[`headerText`](content-browse-base-config.md#headertext) |
| `launchMode?` | `"browse"` | Launch mode for Start From Content. **Default** `'browse'` | - |
| `categoriesConfig` | [`BrowseSearchConfigUnion`](../../../browse-search-config-types/type-aliases/browse-search-config-union.md)[] | Configuration for browse search functionality. Can be configured for templates or photos based on the category. **Required** - Browse mode needs category to show assets | - |
| `searchQuery?` | `string` | Search Query to be used to search across all browse search categories **Default** `empty string` | - |
| `hideSearchBar?` | `boolean` | Property to hide the search bar in the Browse Search **Default** `false` | - |
| `hideFilters?` | `boolean` | Property to hide the filters in the Browse Search **Default** `false` | - |
| `shortcutPillTerms?` | `string`[] | Property to set the shortcut search terms. These terms will be displayed as a list of suggestions below the search bar. **Default** `empty array` | - |
