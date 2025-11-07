[**cc-everywhere**](..\..\..\..\..\..\index.md)

***

# Class: EditorContext

Represents the base workflow context for the SDK workflows
This should be extended by all the workflow contexts like EditorContext, GenStudioContext, etc.

## Extends

- [`WorkflowContext`](..\..\..\workflow-context\classes\workflow-context.md)&lt; `ActionContext`&lt; [`DesignConfig`](..\..\..\..\..\..\shared\src\types\editor\design-config-types\type-aliases\design-config.md)\ &gt;\ &gt;

## Constructors

### Constructor

```ts
new EditorContext(context): EditorContext;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `ActionContext` |

#### Returns

`EditorContext`

#### Inherited from

[`WorkflowContext`](..\..\..\workflow-context\classes\workflow-context.md).[`constructor`](..\..\..\workflow-context\classes\workflow-context.md#constructor)

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `ActionContext` | [`WorkflowContext`](..\..\..\workflow-context\classes\workflow-context.md).[`context`](..\..\..\workflow-context\classes\workflow-context.md#context) |

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

[`WorkflowContext`](..\..\..\workflow-context\classes\workflow-context.md).[`sendCustomMessage`](..\..\..\workflow-context\classes\workflow-context.md#sendcustommessage)
