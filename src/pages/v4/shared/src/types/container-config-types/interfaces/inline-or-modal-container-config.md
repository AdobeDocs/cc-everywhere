[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: InlineOrModalContainerConfig

## Extends

- [`BaseContainerConfig`](base-container-config.md)

## Extended by

- [`InlineContainerConfig`](inline-container-config.md)
- [`ModalContainerConfig`](modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](base-container-config.md).[`backgroundColor`](base-container-config.md#backgroundcolor) |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](base-container-config.md).[`showLoader`](base-container-config.md#showloader) |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](base-container-config.md).[`loadTimeout`](base-container-config.md#loadtimeout) |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](base-container-config.md).[`hideCloseButton`](base-container-config.md#hideclosebutton) |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](base-container-config.md).[`zIndex`](base-container-config.md#zindex) |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`BaseContainerConfig`](base-container-config.md).[`showReaderView`](base-container-config.md#showreaderview) |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`BaseContainerConfig`](base-container-config.md).[`showExpressIconWithText`](base-container-config.md#showexpressiconwithtext) |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`BaseContainerConfig`](base-container-config.md).[`showDarkerBackgroundForLoader`](base-container-config.md#showdarkerbackgroundforloader) |
| `iframeTitle?` | `public` | `string` | Title of the iframe for accessibility | [`BaseContainerConfig`](base-container-config.md).[`iframeTitle`](base-container-config.md#iframetitle) |
| `size?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Maximum size boundary of the iframe. | - |
| `minSize?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Minimum size boundary of the iframe. | - |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | - |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | - |
