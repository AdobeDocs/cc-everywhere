[**cc-everywhere**](..\..\..\..\..\index.md)

<HorizontalLine />

# Type Alias: BrowseSearchConfigUnion

```ts
type BrowseSearchConfigUnion = { [K in InspireCategory]: BrowseSearchBaseConfig<K> }[InspireCategory];
```

Union type representing all possible browse search configurations.

This mapped type creates a union of [BrowseSearchBaseConfig](..\interfaces\browse-search-base-config.md) instances
for each category defined in [InspireCategory](..\enumerations\inspire-category.md).

## See

 - [BrowseSearchBaseConfig](..\interfaces\browse-search-base-config.md) for the base configuration interface
 - [InspireCategory](..\enumerations\inspire-category.md) for available categories
