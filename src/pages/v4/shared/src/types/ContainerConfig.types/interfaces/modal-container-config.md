# Interface: ModalContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`backgroundColor` |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`showLoader` |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`loadTimeout` |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`hideCloseButton` |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`zIndex` |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`showReaderView` |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`showExpressIconWithText` |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`showDarkerBackgroundForLoader` |
| `size?` | `public` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`size` |
| `minSize?` | `public` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`minSize` |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`padding` |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`borderRadius` |
| `mode?` | `public` | `MODAL` | - | - |
