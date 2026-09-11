---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: DesignViewerDocConfig

## Extends

- [`BaseDocConfig`](../../../design-config-types/interfaces/base-doc-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `asset?` | \| [`Asset`](../../../asset-types/type-aliases/asset.md) \| [`Asset`](../../../asset-types/type-aliases/asset.md)[] | The [Asset](../../../asset-types/type-aliases/asset.md) (or array of assets) to render in the design viewer. Optional: the viewer can be opened without an asset and populated later via IDesignViewerContext.updateDesignAssets. |
