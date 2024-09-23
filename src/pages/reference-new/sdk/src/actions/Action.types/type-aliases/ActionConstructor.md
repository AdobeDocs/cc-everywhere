[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/actions/Action.types](../index.md) / ActionConstructor

# Type Alias: ActionConstructor()\<T\>

```ts
type ActionConstructor<T>: (context) => Action<ActionContext<T>>;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../../shared/src/types/DesignConfig.types/interfaces/DesignConfig.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](../../ActionContext/interfaces/ActionContext.md)\<`T`\> |

## Returns

[`Action`](../../Action/classes/Action.md)\<[`ActionContext`](../../ActionContext/interfaces/ActionContext.md)\<`T`\>\>
