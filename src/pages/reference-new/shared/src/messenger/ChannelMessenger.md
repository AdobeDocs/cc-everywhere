[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/messenger/ChannelMessenger.types

# shared/src/messenger/ChannelMessenger.types

## Enumerations

### MessageChannel

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `CC_EVERYWHERE_SELF` | `"CC_EVERYWHERE_SELF"` |
| `CC_EVERYWHERE_AGENT` | `"CC_EVERYWHERE_AGENT"` |
| `CC_EVERYWHERE_SDK` | `"CC_EVERYWHERE_SDK"` |

## Interfaces

### ChannelMessage\<T\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

#### Properties

| Property | Type |
| ------ | ------ |
| `sourceChannel` | [`MessageChannel`](ChannelMessenger.md#messagechannel) |
| `requestId?` | `string` |
| `message` | [`Message`](Message.md#messaget)\<`T`\> |

***

### TargetChannelInfo

#### Properties

| Property | Type |
| ------ | ------ |
| `origin` | `string` |
| `target` | `Window` |

***

### IChannelMessengerDelegate

#### Properties

| Property | Type |
| ------ | ------ |
| `didGetMessage` | \<`T`\>(`message`: [`Message`](Message.md#messaget)\<`T`\>, `requestId`?: `string`) => `void` |

## Type Aliases

### MessageTarget

```ts
type MessageTarget: Window;
```

***

### TargetAddedCallback()

```ts
type TargetAddedCallback: () => void;
```

#### Returns

`void`

***

### MessageListener()

```ts
type MessageListener: <T>(event) => void;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `MessageEvent`\<[`ChannelMessage`](ChannelMessenger.md#channelmessaget)\<`T`\>\> |

#### Returns

`void`

***

### MessageFilter()

```ts
type MessageFilter: <T>(message) => boolean;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`MessageType`](Message.md#messagetype) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`Message`](Message.md#messaget)\<`T`\> |

#### Returns

`boolean`
