# Class: LocalFeatureFlagService

Service class for managing feature flags

## Extends

- [`FeatureFlagService`](../../FeatureFlagService/classes/FeatureFlagService.md)

## Constructors

### new LocalFeatureFlagService()

```ts
new LocalFeatureFlagService(_config): LocalFeatureFlagService
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `_config` | [`FeatureFlagConfig`](../interfaces/FeatureFlagConfig.md) | `DEFAULT_FEATURE_FLAG_CONFIG` |

#### Returns

[`LocalFeatureFlagService`](LocalFeatureFlagService.md)

#### Overrides

[`FeatureFlagService`](../../FeatureFlagService/classes/FeatureFlagService.md).[`constructor`](../../FeatureFlagService/classes/FeatureFlagService.md#constructors)

## Methods

### getFeatureFlagsParams()

```ts
getFeatureFlagsParams(
   intent, 
   isFirstParty, 
   clientId, 
   analyticsClientId?): URLSearchParams
```

Generates URL-encoded feature flag parameters for a specific client and intent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md) |
| `isFirstParty` | `boolean` |
| `clientId` | `string` |
| `analyticsClientId`? | `string` |

#### Returns

`URLSearchParams`

#### Inherited from

[`FeatureFlagService`](../../FeatureFlagService/classes/FeatureFlagService.md).[`getFeatureFlagsParams`](../../FeatureFlagService/classes/FeatureFlagService.md#getfeatureflagsparams)
