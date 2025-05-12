# Interface: FeatureFlagConfig

Configuration interface for feature flags

## Properties

| Property | Type |
| ------ | ------ |
| `baseFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `firstPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `thirdPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/hz-feature-flag.md), `boolean`\>\>\>\>\> |
| `clientFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), [`ClientFeatureFlags`](../type-aliases/client-feature-flags.md)\>\>\> |
