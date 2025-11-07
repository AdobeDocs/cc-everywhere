[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Class: TestEditorContext

Test-specific extension of EditorContext that includes testing utilities.
This class should only be used in test environments and not in production code.

## Extends

- `EditorContext`

## Constructors

### Constructor

```ts
new TestEditorContext(context): TestEditorContext;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | `ActionContext` |

#### Returns

`TestEditorContext`

#### Inherited from

```ts
EditorContext.constructor
```

## Properties

| Property | Modifier | Type | Inherited from |
| ------ | ------ | ------ | ------ |
| `context` | `public` | `ActionContext` | `EditorContext.context` |

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

```ts
EditorContext.sendCustomMessage
```

***

### showToast()

```ts
showToast(message, options?): Promise<void>;
```

This method is for testing purposes only and should not be used in production.
This is a demo usecase to shows a toast message by sending a custom message to the agent side.
The agent will handle displaying the toast.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | The message to display in the toast |
| `options?` | \{ `duration?`: `number`; `type?`: `"error"` \| `"success"` \| `"info"` \| `"warning"`; \} | Optional toast configuration |
| `options.duration?` | `number` | - |
| `options.type?` | `"error"` \| `"success"` \| `"info"` \| `"warning"` | - |

#### Returns

`Promise`&lt; `void`\ &gt;

Promise that resolves when the toast is displayed
