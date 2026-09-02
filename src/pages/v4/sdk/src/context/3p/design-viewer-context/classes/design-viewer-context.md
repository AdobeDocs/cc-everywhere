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
| `context` | `public` | `ActionContext` | [`WorkflowContext`](../../../workflow-context/classes/workflow-context.md).[`context`](../../../workflow-context/classes/workflow-context.md#context) |

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

#### Implementation of

[`IDesignViewerContext`](../interfaces/i-design-viewer-context.md).[`updateDocConfig`](../interfaces/i-design-viewer-context.md#updatedocconfig)

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
