[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/ActionMessageListenerDelegate

# sdk/src/actions/ActionMessageListenerDelegate

## Classes

### ActionMessageListenerDelegate

#### Constructors

##### new ActionMessageListenerDelegate()

```ts
new ActionMessageListenerDelegate(
   channelMessageListener, 
   messageTypesArr, 
   messageListener): ActionMessageListenerDelegate
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `channelMessageListener` | [`ChannelMessageListener`](../../../shared/src/messenger/ChannelMessageListener.md#channelmessagelistener) |
| `messageTypesArr` | [`MessageType`](../../../shared/src/messenger/Message.md#messagetype)[] |
| `messageListener` | [`Listener`](../../../shared/src/messenger/ChannelMessageListener.md#listener) |

###### Returns

[`ActionMessageListenerDelegate`](ActionMessageListenerDelegate.md#actionmessagelistenerdelegate)

#### Methods

##### attachListeners()

```ts
attachListeners(): void
```

###### Returns

`void`

##### detachListeners()

```ts
detachListeners(): void
```

###### Returns

`void`
