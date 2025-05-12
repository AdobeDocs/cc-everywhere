# Interface: FeatureFlagConfig

Configuration interface for feature flags

## Properties

| Property | Type |
| ------ | ------ |
| `baseFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/HzFeatureFlag.md), `boolean`\>\>\>\>\> |
| `firstPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/HzFeatureFlag.md), `boolean`\>\>\>\>\> |
| `thirdPartyFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), `Partial`<`Record`<[`HzFeatureFlag`](../enumerations/HzFeatureFlag.md), `boolean`\>\>\>\>\> |
| `clientFeatureFlags` | `Partial`<`Partial`<`Record`<[`ActionIntent`](../../../../../shared/src/types/ActionIntent.types/type-aliases/ActionIntent.md), [`ClientFeatureFlags`](../type-aliases/ClientFeatureFlags.md)\>\>\> |
