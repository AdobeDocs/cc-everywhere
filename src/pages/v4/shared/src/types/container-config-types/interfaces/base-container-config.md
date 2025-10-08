[**cc-everywhere**](../../../../../index.md)

***

# Interface: BaseContainerConfig

## Extended by

- [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md)
- [`FillContainerConfig`](../../container-config-types/interfaces/fill-container-config.md)

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader |
| `iframeTitle?` | `public` | `string` | Title of the iframe for accessibility |
