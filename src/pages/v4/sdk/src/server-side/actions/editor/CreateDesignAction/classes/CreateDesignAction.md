[cc-everywhere](../../../../../../../index.md) / [sdk/src/server-side/actions/editor/CreateDesignAction](../index.md) / CreateDesignAction

# Class: CreateDesignAction

## Constructors

### new CreateDesignAction()

```ts
new CreateDesignAction(_designConfig, _validator): CreateDesignAction
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_designConfig` | [`CreateDesignConfig`](../../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md) |
| `_validator` | `Validator` |

#### Returns

[`CreateDesignAction`](CreateDesignAction.md)

## Methods

### execute()

```ts
execute(): URL
```

#### Returns

`URL`

***

### initializeDefaultParams()

```ts
initializeDefaultParams(designConfig): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `designConfig` | [`CreateDesignConfig`](../../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md) |

#### Returns

`void`

***

### \_getParamsToSkipValidationCheck()

```ts
_getParamsToSkipValidationCheck(): CreateDesignConfig
```

#### Returns

[`CreateDesignConfig`](../../../../../../../shared/src/types/editor/DesignConfig.types/interfaces/CreateDesignConfig.md)
