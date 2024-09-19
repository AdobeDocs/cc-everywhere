[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/Action.types

# sdk/src/actions/Action.types

## Enumerations

### ActionState

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `NOT_STARTED` | `0` |
| `STARTED` | `1` |
| `TERMINATING` | `2` |
| `TERMINATED` | `3` |

## Interfaces

### ActionProperties

#### Properties

| Property | Modifier | Type |
| ------ | ------ | ------ |
| `shouldCloseOnPublishOrCancel` | `readonly` | `boolean` |
| `containerProperties` | `readonly` | `ContainerProperties` |

## Type Aliases

### ActionConstructor()\<T\>

```ts
type ActionConstructor<T>: (context) => Action<ActionContext<T>>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../shared/src/types/DesignConfig.md#designconfig) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ActionContext`](ActionContext.md#actioncontextt)\<`T`\> |

#### Returns

[`Action`](Action.md#actiont)\<[`ActionContext`](ActionContext.md#actioncontextt)\<`T`\>\>
