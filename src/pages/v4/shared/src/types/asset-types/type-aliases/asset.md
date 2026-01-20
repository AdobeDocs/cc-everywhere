[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: Asset

```ts
type Asset = 
  | Base64Asset
  | UrlAsset
  | BlobAsset;
```

Asset interface used as an input data for all SDK workflows.

This union type includes:
- [Base64Asset](base64-asset.md) - Asset containing Base64 encoded data
- [UrlAsset](url-asset.md) - Asset containing data within a presigned URL
- [BlobAsset](blob-asset.md) - Asset containing blob/file data
