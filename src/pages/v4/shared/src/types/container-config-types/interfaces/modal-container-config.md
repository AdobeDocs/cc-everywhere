[**cc-everywhere**](..\..\..\..\..\index.md)

***

# Interface: ModalContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`backgroundColor`](inline-or-modal-container-config.md#backgroundcolor) |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`showLoader`](inline-or-modal-container-config.md#showloader) |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`loadTimeout`](inline-or-modal-container-config.md#loadtimeout) |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`hideCloseButton`](inline-or-modal-container-config.md#hideclosebutton) |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`zIndex`](inline-or-modal-container-config.md#zindex) |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`showReaderView`](inline-or-modal-container-config.md#showreaderview) |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`showExpressIconWithText`](inline-or-modal-container-config.md#showexpressiconwithtext) |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`showDarkerBackgroundForLoader`](inline-or-modal-container-config.md#showdarkerbackgroundforloader) |
| `iframeTitle?` | `public` | `string` | Title of the iframe for accessibility | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`iframeTitle`](inline-or-modal-container-config.md#iframetitle) |
| `size?` | `public` | [`PixelSize`](..\..\asset-types\interfaces\pixel-size.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`size`](inline-or-modal-container-config.md#size) |
| `minSize?` | `public` | [`PixelSize`](..\..\asset-types\interfaces\pixel-size.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`minSize`](inline-or-modal-container-config.md#minsize) |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`padding`](inline-or-modal-container-config.md#padding) |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).[`borderRadius`](inline-or-modal-container-config.md#borderradius) |
| `mode?` | `public` | [`MODAL`](..\enumerations\container-mode.md#modal) | - | - |
