---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Class: WorkflowContext&lt;T&gt;

Represents the base workflow context for the SDK workflows
This should be extended by all the workflow contexts like EditorContext, GenStudioContext, etc.

## Extended by

- [`EditorContext`](../../3p/editor-context/classes/editor-context.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `SDKContext` |

## Constructors

### Constructor

```ts
new WorkflowContext<T>(context): WorkflowContext<T>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `T` |

#### Returns

`WorkflowContext`&lt;`T`&gt;

## Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `context` | `public` | `T` |

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
