[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/actions/ActionMessageListenerDelegate](../index.md) / ActionMessageListenerDelegate

# Class: ActionMessageListenerDelegate

## Constructors

### new ActionMessageListenerDelegate()

```ts
new ActionMessageListenerDelegate(
   channelMessageListener, 
   messageTypesArr, 
   messageListener): ActionMessageListenerDelegate
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelMessageListener` | [`ChannelMessageListener`](../../../../../shared/src/messenger/ChannelMessageListener/classes/ChannelMessageListener.md) |
| `messageTypesArr` | [`MessageType`](../../../../../shared/src/messenger/Message.types/enumerations/MessageType.md)[] |
| `messageListener` | [`Listener`](../../../../../shared/src/messenger/ChannelMessageListener/type-aliases/Listener.md) |

#### Returns

[`ActionMessageListenerDelegate`](ActionMessageListenerDelegate.md)

## Methods

### attachListeners()

```ts
attachListeners(): void
```

#### Returns

`void`

***

### detachListeners()

```ts
detachListeners(): void
```

#### Returns

`void`
