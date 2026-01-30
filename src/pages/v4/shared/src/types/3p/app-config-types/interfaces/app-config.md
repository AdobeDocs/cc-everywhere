---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: AppConfig

## Extends

- [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md)

## Extended by

- [`TextToImageAppConfig`](../../module/app-config-types/interfaces/text-to-image-app-config.md)
- [`EditImageAppConfig`](../../module/app-config-types/interfaces/edit-image-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `analyticsData?` | [`BaseAnalyticsData`](../../../app-config-types/interfaces/base-analytics-data.md) | Property to pass analytics data to the host app | - |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`useClientAuth`](../../../design-config-types/interfaces/base-app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../callbacks-types/interfaces/callbacks.md) | - | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`callbacks`](../../../design-config-types/interfaces/base-app-config.md#callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`BaseAppConfig`](../../../design-config-types/interfaces/base-app-config.md).[`metaData`](../../../design-config-types/interfaces/base-app-config.md#metadata) |
