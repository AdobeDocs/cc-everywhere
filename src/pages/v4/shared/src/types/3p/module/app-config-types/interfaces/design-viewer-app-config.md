---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../../index.md)

<HorizontalLine />

# Interface: DesignViewerAppConfig

App config for 3P.

## See

[BaseAppConfig](../../../../design-config-types/interfaces/base-app-config.md)

## Extends

- [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`DesignViewerAppConfig`](../../../../module/app-config-types/interfaces/design-viewer-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `analyticsData?` | [`BaseAnalyticsData`](../../../../app-config-types/interfaces/base-analytics-data.md) | Property to pass analytics data to the host app | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`analyticsData`](../../../app-config-types/interfaces/app-config.md#analyticsdata) |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`useClientAuth`](../../../app-config-types/interfaces/app-config.md#useclientauth) |
| `callbacks?` | [`Callbacks`](../../../../callbacks-types/interfaces/callbacks.md) | - | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`callbacks`](../../../app-config-types/interfaces/app-config.md#callbacks) |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application | [`AppConfig`](../../../app-config-types/interfaces/app-config.md).[`metaData`](../../../app-config-types/interfaces/app-config.md#metadata) |
| `previewThumbnails?` | [`PreviewThumbnailsConfig`](../../../../module/app-config-types/interfaces/preview-thumbnails-config.md) | Configuration for the preview thumbnails component that displays design previews from a collection or an explicit list of design IDs. | [`DesignViewerAppConfig`](../../../../module/app-config-types/interfaces/design-viewer-app-config.md).[`previewThumbnails`](../../../../module/app-config-types/interfaces/design-viewer-app-config.md#previewthumbnails) |
| `designTitle?` | `string` | The text to be displayed as the title of the design. **Default** `empty string` | [`DesignViewerAppConfig`](../../../../module/app-config-types/interfaces/design-viewer-app-config.md).[`designTitle`](../../../../module/app-config-types/interfaces/design-viewer-app-config.md#designtitle) |
