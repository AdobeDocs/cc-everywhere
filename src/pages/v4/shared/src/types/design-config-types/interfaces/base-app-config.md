[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: BaseAppConfig

## Extended by

- [`AppConfig`](../../3p/app-config-types/interfaces/app-config.md)
- [`BaseEditorAppConfig`](../../editor/app-config-types/interfaces/base-editor-app-config.md)
- [`TextToImageAppConfig`](../../module/app-config-types/interfaces/text-to-image-app-config.md)
- [`StartFromContentAppConfig`](../../module/app-config-types/interfaces/start-from-content-app-config.md)
- [`EditImageAppConfig`](../../module/app-config-types/interfaces/edit-image-app-config.md)
- [`WarmupAppConfig`](../../module/app-config-types/interfaces/warmup-app-config.md)
- [`AppConfig`](../../quick-action/app-config-types/interfaces/app-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `useClientAuth?` | `boolean` | Flag to explicitly opt-in to use client authentication. When true, client access token will be fetched from the partner and used in the module. This is only relevant for Edit Image and Text to Image modules. Should not be passed for other workflows. **Default** `false` |
| `callbacks?` | [`Callbacks`](../../callbacks-types/interfaces/callbacks.md) | - |
| `metaData?` | `Record`&lt;`string`, `string`&gt; | Property to pass metadata to target application |
