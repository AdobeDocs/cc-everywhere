[**cc-everywhere**](../../../../../../index.md)

***

# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `warmupIntent` | [`ActionIntent`](../../../action-intent-types/type-aliases/action-intent.md) | The intent to warmup the target. | - |
| `warmupMode` | [`WarmupMode`](../../../app-config-types/enumerations/warmup-mode.md) | Configuration options for controlling how warmup behavior is handled. The partner invoking warmup can select one of these modes to control the warmup lifecycle. **Default** `WarmupMode.STANDARD` | - |
