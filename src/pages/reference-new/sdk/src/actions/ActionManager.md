[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/ActionManager

# sdk/src/actions/ActionManager

## Classes

### ActionManager

#### Constructors

##### new ActionManager()

```ts
new ActionManager(
   _context, 
   _configParams, 
   _messageListener?): ActionManager
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `_context` | [`SDKContext`](ActionContext.md#sdkcontext) |
| `_configParams` | [`ConfigParams`](../../../shared/src/types/HostInfo.md#configparams) |
| `_messageListener`? | [`ActionMessageListenerDelegate`](ActionMessageListenerDelegate.md#actionmessagelistenerdelegate) |

###### Returns

[`ActionManager`](ActionManager.md#actionmanager)

#### Accessors

##### activeAction

```ts
get activeAction(): undefined | Action<SDKContext>
```

```ts
set activeAction(action): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | `undefined` \| [`Action`](Action.md#actiont)\<[`SDKContext`](ActionContext.md#sdkcontext)\> |

###### Returns

`undefined` \| [`Action`](Action.md#actiont)\<[`SDKContext`](ActionContext.md#sdkcontext)\>

#### Methods

##### launch()

```ts
launch<T>(
   actionConstructor, 
   intent, 
designConfig): Promise<void>
```

###### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../shared/src/types/DesignConfig.md#designconfig) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionConstructor` | [`ActionConstructor`](Action.md#actionconstructort)\<`T`\> |
| `intent` | [`ActionIntent`](../../../shared/src/types/ActionIntent.md#actionintent) |
| `designConfig` | `T` |

###### Returns

`Promise`\<`void`\>

##### isActive()

```ts
isActive(): boolean
```

###### Returns

`boolean`

##### isActionTerminating()

```ts
isActionTerminating(): boolean
```

###### Returns

`boolean`

##### close()

```ts
close(closeReason): boolean
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `closeReason` | `ContainerCloseReason` |

###### Returns

`boolean`
