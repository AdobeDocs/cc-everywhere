# Class: `abstract` FeatureFlagService

Abstract class for feature flag services

## Extended by

- [`LocalFeatureFlagService`](../../local-feature-flag-service/classes/local-feature-flag-service.md)

## Constructors

### new FeatureFlagService()

```ts
new FeatureFlagService(): FeatureFlagService
```

#### Returns

[`FeatureFlagService`](feature-flag-service.md)

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
| `intent` | [`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md) |
| `isFirstParty` | `boolean` |
| `clientId` | `string` |
| `analyticsClientId`? | `string` |

#### Returns

`URLSearchParams`
