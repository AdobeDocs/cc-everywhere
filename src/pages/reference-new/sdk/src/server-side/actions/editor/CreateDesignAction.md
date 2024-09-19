[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / sdk/src/server-side/actions/editor/CreateDesignAction

# sdk/src/server-side/actions/editor/CreateDesignAction

## Classes

### CreateDesignAction

#### Constructors

##### new CreateDesignAction()

```ts
new CreateDesignAction(_designConfig, _validator): CreateDesignAction
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `_designConfig` | [`CreateDesignConfig`](../../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig) |
| `_validator` | `Validator` |

###### Returns

[`CreateDesignAction`](CreateDesignAction.md#createdesignaction)

#### Methods

##### execute()

```ts
execute(): URL
```

###### Returns

`URL`

##### initializeDefaultParams()

```ts
initializeDefaultParams(designConfig): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `designConfig` | [`CreateDesignConfig`](../../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig) |

###### Returns

`void`

##### \_getParamsToSkipValidationCheck()

```ts
_getParamsToSkipValidationCheck(): CreateDesignConfig
```

###### Returns

[`CreateDesignConfig`](../../../../../shared/src/types/editor/DesignConfig.md#createdesignconfig)
