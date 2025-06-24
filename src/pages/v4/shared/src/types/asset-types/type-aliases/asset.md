[**cc-everywhere**](../../../../../index.md)

***

# Type Alias: Asset

```ts
type Asset = 
  | Base64Asset
  | UrlAsset
  | BlobAsset;
```

Asset interface used as an input data for all SDK workflows.

This union type includes:

- [Base64Asset](../../asset-types/type-aliases/base64-asset.md) - Asset containing Base64 encoded data
- [UrlAsset](../../asset-types/type-aliases/url-asset.md) - Asset containing data within a presigned URL
- [BlobAsset](../../asset-types/type-aliases/blob-asset.md) - Asset containing blob/file data
