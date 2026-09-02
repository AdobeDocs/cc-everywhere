---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: IDesignViewerContext

Interface for Design Viewer module context operations

## Methods

### updateDocConfig()

```ts
updateDocConfig(docConfig): void;
```

Pushes a new docConfig to an already-open viewer, re-rendering it with the new asset.
Fire-and-forget: the message is dispatched to the agent and this returns immediately.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `docConfig` | [`DesignViewerDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/design-viewer-doc-config.md) | The new document configuration to render in the open viewer |

#### Returns

`void`
