# Interface: FeatureFlagConfig

Configuration interface for feature flags

## Properties

| Property | Type |
| ------ | ------ |
| `baseFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md), `Partial`<`Record`<[`HzFeatureFlag`](../../local-feature-flag-service/enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `firstPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md), `Partial`<`Record`<[`HzFeatureFlag`](../../local-feature-flag-service/enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `thirdPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md), `Partial`<`Record`<[`HzFeatureFlag`](../../local-feature-flag-service/enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `clientFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/action-intent-types/type-aliases/action-intent.md), [`ClientFeatureFlags`](../../local-feature-flag-service/type-aliases/client-feature-flags.md)\>\>\> |
