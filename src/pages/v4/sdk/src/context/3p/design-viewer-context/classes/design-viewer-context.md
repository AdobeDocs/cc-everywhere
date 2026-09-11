---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Class: DesignViewerContext

Context for Design Viewer module operations

## Extends

- [`WorkflowContext`](../../../workflow-context/classes/workflow-context.md)&lt;`ActionContext`&lt;[`DesignViewerDesignConfig`](../../../../../../shared/src/types/module/design-config-types/interfaces/design-viewer-design-config.md)&gt;&gt;

## Implements

- [`IDesignViewerContext`](../interfaces/i-design-viewer-context.md)

## Constructors

### Constructor

```ts
new DesignViewerContext(context): DesignViewerContext;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `ActionContext`&lt;[`DesignViewerDesignConfig`](../../../../../../shared/src/types/module/design-config-types/interfaces/design-viewer-design-config.md)&gt; |

#### Returns

`DesignViewerContext`

#### Overrides

[`WorkflowContext`](../../../workflow-context/classes/workflow-context.md).[`constructor`](../../../workflow-context/classes/workflow-context.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `ActionContext` | [`WorkflowContext`](../../../workflow-context/classes/workflow-context.md).[`context`](../../../workflow-context/classes/workflow-context.md#property-context) |

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

#### Implementation of

[`IDesignViewerContext`](../interfaces/i-design-viewer-context.md).[`updateDesignAssets`](../interfaces/i-design-viewer-context.md#updatedesignassets)

<HorizontalLine />

### sendCustomMessage()

```ts
sendCustomMessage(data): void;
```

Sends a message to the SDK Agent to update the state of current running  workflow.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `unknown` | incoming data coming from client to update the workflow. Note - Type of data is limited to what postMessage supports. |

#### Returns

`void`

#### Inherited from

[`WorkflowContext`](../../../workflow-context/classes/workflow-context.md).[`sendCustomMessage`](../../../workflow-context/classes/workflow-context.md#sendcustommessage)
