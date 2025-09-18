[**cc-everywhere**](../../../../../index.md)

***

# Type Alias: BrowseSearchConfigUnion

```ts
type BrowseSearchConfigUnion = { [K in InspireCategory]: BrowseSearchBaseConfig<K> }[InspireCategory];
```

Union type representing all possible browse search configurations.

This mapped type creates a union of [BrowseSearchBaseConfig](../../browse-search-config-types/interfaces/browse-search-base-config.md) instances
for each category defined in [InspireCategory](../../browse-search-config-types/enumerations/inspire-category.md).

## See

 - [BrowseSearchBaseConfig](../../browse-search-config-types/interfaces/browse-search-base-config.md) for the base configuration interface
 - [InspireCategory](../../browse-search-config-types/enumerations/inspire-category.md) for available categories
