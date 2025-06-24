[**cc-everywhere**](../../../../../index.md)

***

# Class: LocalFeatureFlagService

Service class for managing feature flags

## Extends

- [`FeatureFlagService`](../../feature-flag-service/classes/feature-flag-service.md)

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new LocalFeatureFlagService(_config): LocalFeatureFlagService;
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `_config` | [`FeatureFlagConfig`](../../local-feature-flag-service/interfaces/feature-flag-config.md) | `DEFAULT_FEATURE_FLAG_CONFIG` |

#### Returns

`LocalFeatureFlagService`

#### Overrides

[`FeatureFlagService`](../../feature-flag-service/classes/feature-flag-service.md).[`constructor`](../../feature-flag-service/classes/feature-flag-service.md#constructor)

## Methods

<a id="getfeatureflagsparams"></a>

### getFeatureFlagsParams()

```ts
getFeatureFlagsParams(
   intent, 
   isFirstParty, 
   clientId, 
   analyticsClientId?): URLSearchParams;
```

Generates URL-encoded feature flag parameters for a specific client and intent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md) |
| `isFirstParty` | `boolean` |
| `clientId` | `string` |
| `analyticsClientId?` | `string` |

#### Returns

`URLSearchParams`

#### Inherited from

[`FeatureFlagService`](../../feature-flag-service/classes/feature-flag-service.md).[`getFeatureFlagsParams`](../../feature-flag-service/classes/feature-flag-service.md#getfeatureflagsparams)
