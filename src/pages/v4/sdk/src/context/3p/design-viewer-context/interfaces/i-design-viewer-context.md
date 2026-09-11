---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: IDesignViewerContext

Interface for Design Viewer module context operations

## Methods

### updateDesignAssets()

```ts
updateDesignAssets(assets): void;
```

Updates the design asset(s) rendered in an already-open design viewer, re-rendering it in place
with the new [Asset](../../../../../../shared/src/types/asset-types/type-aliases/asset.md)(s).
Fire-and-forget: the message is dispatched to the agent and this returns immediately.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `assets` | [`Asset`](../../../../../../shared/src/types/asset-types/type-aliases/asset.md)[] | The new [Asset](../../../../../../shared/src/types/asset-types/type-aliases/asset.md) (or array of assets) to render in the open viewer |

#### Returns

`void`
