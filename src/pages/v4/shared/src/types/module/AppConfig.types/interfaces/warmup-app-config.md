# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/base-app-config.md).`callbacks` |
| `warmupIntent?` | [`ActionIntent`](../../../ActionIntent.types/type-aliases/action-intent/index.md) | The intent to warmup the target. | - |
| `warmupUrls?` | `string`[] | The list of urls to warmup to enable faster loading of the target. **Default** `[]` | - |
