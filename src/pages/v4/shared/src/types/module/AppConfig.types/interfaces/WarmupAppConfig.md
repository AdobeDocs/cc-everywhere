# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../AppConfig.types/type-aliases/BaseAnalyticsData.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`analyticsData` |
| `warmupIntent` | [`ActionIntent`](../../../ActionIntent.types/type-aliases/ActionIntent.md) | The intent to warmup the target. | - |
| `warmupMode` | [`WarmupMode`](../../../AppConfig.types/enumerations/WarmupMode.md) | Configuration options for controlling how warmup behavior is handled. The partner invoking warmup can select one of these modes to control the warmup lifecycle. **Default** `WarmupMode.STANDARD` | - |
