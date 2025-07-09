[**cc-everywhere**](../../../../../index.md)

***

# Interface: BaseContainerConfig

## Extended by

- [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md)
- [`FillContainerConfig`](../../container-config-types/interfaces/fill-container-config.md)

## Properties

| Property | Modifier | Type | Description |
| ------ | ------ | ------ | ------ |
| <a id="backgroundcolor"></a> `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. |
| <a id="showloader"></a> `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. |
| <a id="loadtimeout"></a> `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. |
| <a id="hideclosebutton"></a> `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars |
| <a id="zindex"></a> `zIndex?` | `public` | `number` | Set the z-index of of the root container |
| <a id="showreaderview"></a> `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View |
| <a id="showexpressiconwithtext"></a> `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text |
| <a id="showdarkerbackgroundforloader"></a> `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader |
