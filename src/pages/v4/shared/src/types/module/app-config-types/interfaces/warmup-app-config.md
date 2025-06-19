# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).`analyticsData` |
| `warmupIntent` | [`ActionIntent`](../../../action-intent-types/type-aliases/action-intent.md) | The intent to warmup the target. | - |
| `warmupMode` | [`WarmupMode`](../../../app-config-types/enumerations/warmup-mode.md) | Configuration options for controlling how warmup behavior is handled. The partner invoking warmup can select one of these modes to control the warmup lifecycle. **Default** `WarmupMode.STANDARD` | - |
