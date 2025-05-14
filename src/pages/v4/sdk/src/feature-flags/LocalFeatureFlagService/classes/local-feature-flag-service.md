# Class: LocalFeatureFlagService

Service class for managing feature flags

## Extends

- [`FeatureFlagService`](../../FeatureFlagService/classes/feature-flag-service.md)

## Constructors

### new LocalFeatureFlagService()

```ts
new LocalFeatureFlagService(_config): LocalFeatureFlagService
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `_config` | [`FeatureFlagConfig`](../interfaces/feature-flag-config.md) | `DEFAULT_FEATURE_FLAG_CONFIG` |

#### Returns

[`LocalFeatureFlagService`](local-feature-flag-service.md)

#### Overrides

[`FeatureFlagService`](../../FeatureFlagService/classes/feature-flag-service.md).[`constructor`](../../FeatureFlagService/classes/feature-flag-service.md#constructors)

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

[`FeatureFlagService`](../../FeatureFlagService/classes/feature-flag-service.md).[`getFeatureFlagsParams`](../../FeatureFlagService/classes/feature-flag-service.md#getfeatureflagsparams)
