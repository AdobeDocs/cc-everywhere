[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BrowseSearchBaseConfig&lt;T&gt;

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`InspireCategory`](../enumerations/inspire-category.md) |

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `category` | `T` | Determines what type of content should be displayed in the Browse Search |
| `collectionId?` | `string` | Represents the Id of collection, which contains list of categories to be displayed in the Browse Search on launch. If not provided, the default collection will be used. |
| `rootCollectionId?` | `string` | Root collection ID. The default collection is of Express. |
| `collectionItemsSortOrder?` | `string`[] | Property to sort the collection items. If not provided, the items will be sorted by default order of the collection. If any non existing item is provided, it will be ignored. |
