[**cc-everywhere**](../../../../../index.md)

***

# Interface: ModalContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="backgroundcolor"></a> `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`backgroundColor`](../../container-config-types/interfaces/inline-or-modal-container-config.md#backgroundcolor) |
| <a id="showloader"></a> `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`showLoader`](../../container-config-types/interfaces/inline-or-modal-container-config.md#showloader) |
| <a id="loadtimeout"></a> `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`loadTimeout`](../../container-config-types/interfaces/inline-or-modal-container-config.md#loadtimeout) |
| <a id="hideclosebutton"></a> `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`hideCloseButton`](../../container-config-types/interfaces/inline-or-modal-container-config.md#hideclosebutton) |
| <a id="zindex"></a> `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`zIndex`](../../container-config-types/interfaces/inline-or-modal-container-config.md#zindex) |
| <a id="showreaderview"></a> `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`showReaderView`](../../container-config-types/interfaces/inline-or-modal-container-config.md#showreaderview) |
| <a id="showexpressiconwithtext"></a> `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`showExpressIconWithText`](../../container-config-types/interfaces/inline-or-modal-container-config.md#showexpressiconwithtext) |
| <a id="showdarkerbackgroundforloader"></a> `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`showDarkerBackgroundForLoader`](../../container-config-types/interfaces/inline-or-modal-container-config.md#showdarkerbackgroundforloader) |
| <a id="size"></a> `size?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`size`](../../container-config-types/interfaces/inline-or-modal-container-config.md#size) |
| <a id="minsize"></a> `minSize?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`minSize`](../../container-config-types/interfaces/inline-or-modal-container-config.md#minsize) |
| <a id="padding"></a> `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`padding`](../../container-config-types/interfaces/inline-or-modal-container-config.md#padding) |
| <a id="borderradius"></a> `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).[`borderRadius`](../../container-config-types/interfaces/inline-or-modal-container-config.md#borderradius) |
| <a id="mode"></a> `mode?` | `public` | [`MODAL`](../../container-config-types/enumerations/container-mode.md#modal) | - | - |
