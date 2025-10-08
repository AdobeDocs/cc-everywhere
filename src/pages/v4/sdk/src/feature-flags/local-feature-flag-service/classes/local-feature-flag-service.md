[**cc-everywhere**](../../../../../index.md)

***

# Class: LocalFeatureFlagService

Service class for managing feature flags

## Extends

- [`FeatureFlagService`](../../feature-flag-service/classes/feature-flag-service.md)

## Constructors

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

### getFeatureFlagsParams()

```ts
getFeatureFlagsParams(
   intent, 
   hostInfo, 
   appConfig?): URLSearchParams;
```

Generates URL-encoded feature flag parameters for a specific client and intent

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md) |
| `hostInfo` | [`HostInfoExtended`](../../../../../shared/src/types/host-info-types/type-aliases/host-info-extended.md) |
| `appConfig?` | `AppConfig` |

#### Returns

`URLSearchParams`

#### Inherited from

[`FeatureFlagService`](../../feature-flag-service/classes/feature-flag-service.md).[`getFeatureFlagsParams`](../../feature-flag-service/classes/feature-flag-service.md#getfeatureflagsparams)
