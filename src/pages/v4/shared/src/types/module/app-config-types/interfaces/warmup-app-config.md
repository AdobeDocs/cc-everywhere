[**cc-everywhere**](../../../../../../index.md)

***

# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="callbacks"></a> `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| <a id="analyticsdata"></a> `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/type-aliases/base-analytics-data.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`analyticsData`](../../../design-config-types/interfaces/base-app-config.md#analyticsdata) |
| <a id="warmupintent"></a> `warmupIntent` | [`ActionIntent`](../../../action-intent-types/type-aliases/action-intent.md) | The intent to warmup the target. | - |
| <a id="warmupmode"></a> `warmupMode` | [`WarmupMode`](../../../app-config-types/enumerations/warmup-mode.md) | Configuration options for controlling how warmup behavior is handled. The partner invoking warmup can select one of these modes to control the warmup lifecycle. **Default** `WarmupMode.STANDARD` | - |
