[**cc-everywhere**](../../../../../index.md)

***

# Interface: BrowseSearchBaseConfig<T\>

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`InspireCategory`](../../browse-search-config-types/enumerations/inspire-category.md) |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="category"></a> `category` | `T` | Determines what type of content should be displayed in the Browse Search |
| <a id="collectionid"></a> `collectionId?` | `string` | Represents the Id of collection, which contains list of categories to be displayed in the Browse Search on launch. If not provided, the default collection will be used. |
| <a id="collectionitemssortorder"></a> `collectionItemsSortOrder?` | `string`[] | Property to sort the collection items. If not provided, the items will be sorted by default order of the collection. If any non existing item is provided, it will be ignored. |
