[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/actions/ActionManager](../index.md) / ActionManager

# Class: ActionManager

## Constructors

### new ActionManager()

```ts
new ActionManager(
   _context, 
   _configParams, 
   _messageListener?): ActionManager
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_context` | [`SDKContext`](../../ActionContext/interfaces/SDKContext.md) |
| `_configParams` | [`ConfigParams`](../../../../../shared/src/types/HostInfo.types/type-aliases/ConfigParams.md) |
| `_messageListener`? | [`ActionMessageListenerDelegate`](../../ActionMessageListenerDelegate/classes/ActionMessageListenerDelegate.md) |

#### Returns

[`ActionManager`](ActionManager.md)

## Accessors

### activeAction

```ts
get activeAction(): undefined | Action<SDKContext>
```

```ts
set activeAction(action): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `action` | `undefined` \| [`Action`](../../Action/classes/Action.md)\<[`SDKContext`](../../ActionContext/interfaces/SDKContext.md)\> |

#### Returns

`undefined` \| [`Action`](../../Action/classes/Action.md)\<[`SDKContext`](../../ActionContext/interfaces/SDKContext.md)\>

## Methods

### launch()

```ts
launch<T>(
   actionConstructor, 
   intent, 
designConfig): Promise<void>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../../shared/src/types/DesignConfig.types/interfaces/DesignConfig.md) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `actionConstructor` | [`ActionConstructor`](../../Action.types/type-aliases/ActionConstructor.md)\<`T`\> |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |
| `designConfig` | `T` |

#### Returns

`Promise`\<`void`\>

***

### isActive()

```ts
isActive(): boolean
```

#### Returns

`boolean`

***

### isActionTerminating()

```ts
isActionTerminating(): boolean
```

#### Returns

`boolean`

***

### close()

```ts
close(closeReason): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `closeReason` | `ContainerCloseReason` |

#### Returns

`boolean`
