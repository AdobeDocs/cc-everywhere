---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Abstract Class: RequestResponseWorkflowContext&lt;T&gt;

Base class for workflow contexts that send a WORKFLOW_CONTEXT message to the
agent and await a matching CUSTOM_EVENT reply. Encapsulates the single-flight
guard, per-call requestId matching, timeout, listener registration, and cleanup.

## Extends

- [`WorkflowContext`](../../workflow-context/classes/workflow-context.md)&lt;`T`&gt;

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ActionContext`&lt;[`DesignConfig`](../../../../../shared/src/types/design-config-types/interfaces/design-config.md)&gt; |

## Constructors

### Constructor

```ts
new RequestResponseWorkflowContext<T>(context): RequestResponseWorkflowContext<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `T` |

#### Returns

`RequestResponseWorkflowContext`&lt;`T`&gt;

#### Inherited from

[`WorkflowContext`](../../workflow-context/classes/workflow-context.md).[`constructor`](../../workflow-context/classes/workflow-context.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `T` | [`WorkflowContext`](../../workflow-context/classes/workflow-context.md).[`context`](../../workflow-context/classes/workflow-context.md#context) |

## Methods

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

[`WorkflowContext`](../../workflow-context/classes/workflow-context.md).[`sendCustomMessage`](../../workflow-context/classes/workflow-context.md#sendcustommessage)
