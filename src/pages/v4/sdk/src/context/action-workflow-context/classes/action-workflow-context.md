---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Class: ActionWorkflowContext&lt;T&gt;

Base context for structured messages addressed to a running action.

## Extends

- [`WorkflowContext`](../../workflow-context/classes/workflow-context.md)&lt;`T`&gt;

## Extended by

- [`QuickActionContextImpl`](../../quick-action-context/classes/quick-action-context-impl.md)
- [`RequestResponseWorkflowContext`](../../request-response-workflow-context/classes/request-response-workflow-context.md)
- [`DesignContextImpl`](../../modules/design-context/classes/design-context-impl.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ActionContext`&lt;[`DesignConfig`](../../../../../shared/src/types/design-config-types/interfaces/design-config.md)&gt; |

## Constructors

### Constructor

```ts
new ActionWorkflowContext<T>(context): ActionWorkflowContext<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `T` |

#### Returns

`ActionWorkflowContext`&lt;`T`&gt;

#### Inherited from

[`WorkflowContext`](../../workflow-context/classes/workflow-context.md).[`constructor`](../../workflow-context/classes/workflow-context.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `T` | [`WorkflowContext`](../../workflow-context/classes/workflow-context.md).[`context`](../../workflow-context/classes/workflow-context.md#property-context) |

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
