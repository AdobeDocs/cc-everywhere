---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: AssetPreviewConfig

Configuration for generating an additional preview of the exported asset
alongside the primary export.

## See

[PublishAction](publish-action.md) for the action that carries this config

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `enabled` | `boolean` | When `true`, requests that a preview be generated alongside the primary exported asset, returned via PublishParams.assetPreview. **Default** `false` |
| `fileType?` | [`ImageFileType`](../../asset-types/enumerations/image-file-type.md) | Desired [ImageFileType](../../asset-types/enumerations/image-file-type.md) for the generated preview. **Default** `ImageFileType.PNG` |
| `outputType?` | [`AssetDataType`](../../asset-types/enumerations/asset-data-type.md) | Desired asset data type for the generated preview, independent of primary asset's [PublishAction.outputType](publish-action.md#outputtype). **Default** `base64` |
| `scale?` | `number` | Scale of the preview relative to the primary asset, from `0` to `1`. For example, `0.5` generates a preview at half the size of the primary asset. Values outside this range are rejected at validation time. **Minimum** 0 **Maximum** 1 **Default** `0.5` |
