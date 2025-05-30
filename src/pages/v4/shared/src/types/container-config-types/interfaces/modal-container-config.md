# Interface: ModalContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`backgroundColor` |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`showLoader` |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`loadTimeout` |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`hideCloseButton` |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`zIndex` |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`showReaderView` |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`showExpressIconWithText` |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`showDarkerBackgroundForLoader` |
| `size?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`size` |
| `minSize?` | `public` | [`PixelSize`](../../asset-types/interfaces/pixel-size.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`minSize` |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`padding` |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](../../container-config-types/interfaces/inline-or-modal-container-config.md).`borderRadius` |
| `mode?` | `public` | `MODAL` | - | - |
