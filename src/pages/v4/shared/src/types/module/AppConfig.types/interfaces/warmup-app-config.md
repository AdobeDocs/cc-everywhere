# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `analyticsData?` | [`BaseAnalyticsData`](../../../AppConfig.types/type-aliases/BaseAnalyticsData.md) | Analytics data that can be provided by the host app | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`analyticsData` |
| `warmupIntent?` | [`ActionIntent`](../../../ActionIntent.types/type-aliases/ActionIntent.md) | The intent to warmup the target. | - |
| `warmupUrls?` | `string`[] | The list of urls to warmup to enable faster loading of the target. **Default** `[]` | - |
