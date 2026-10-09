---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Class: DesignContextImpl&lt;T&gt;

Stateless capability facade over the launched ActionContext. Lifetime and
request queues remain owned by the action's internal WorkflowContext.

## Hidden

## Extends

- [`ActionWorkflowContext`](../../../action-workflow-context/classes/action-workflow-context.md)&lt;`ActionContext`&lt;`T`&gt;&gt;

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../../../shared/src/types/design-config-types/interfaces/design-config.md) |

## Implements

- [`DesignContext`](../interfaces/design-context.md)

## Constructors

### Constructor

```ts
new DesignContextImpl<T>(context): DesignContextImpl<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `ActionContext` |

#### Returns

`DesignContextImpl`&lt;`T`&gt;

#### Inherited from

[`ActionWorkflowContext`](../../../action-workflow-context/classes/action-workflow-context.md).[`constructor`](../../../action-workflow-context/classes/action-workflow-context.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `ActionContext` | [`ActionWorkflowContext`](../../../action-workflow-context/classes/action-workflow-context.md).[`context`](../../../action-workflow-context/classes/action-workflow-context.md#property-context) |

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

[`ActionWorkflowContext`](../../../action-workflow-context/classes/action-workflow-context.md).[`sendCustomMessage`](../../../action-workflow-context/classes/action-workflow-context.md#sendcustommessage)

<HorizontalLine />

### showToast()

```ts
showToast(type, message): void;
```

Requests a notification without waiting for a display acknowledgement.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`ToastType`](../../../toast-capability/type-aliases/toast-type.md) |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

[`DesignContext`](../interfaces/design-context.md).[`showToast`](../interfaces/design-context.md#showtoast)
