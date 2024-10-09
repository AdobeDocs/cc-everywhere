# Interface: WarmupAppConfig

## Extends

- [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `callbacks?` | [`Callbacks`](../../../Callbacks.types/interfaces/Callbacks.md) | - | [`BaseAppConfig`](../../../DesignConfig.types/interfaces/BaseAppConfig.md).`callbacks` |
| `warmupIntent?` | [`ActionIntent`](../../../ActionIntent.types/type-aliases/ActionIntent.md) | The intent to warmup the target. | - |
| `warmupUrls?` | `string`[] | The list of urls to warmup to enable faster loading of the target. **Default** `[]` | - |
