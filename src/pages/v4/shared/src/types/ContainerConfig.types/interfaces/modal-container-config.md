# Interface: ModalContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`zIndex` |
| `size?` | [`PixelSize`](../../Asset.types/interfaces/pixel-size/index.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`size` |
| `minSize?` | [`PixelSize`](../../Asset.types/interfaces/pixel-size/index.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`minSize` |
| `padding?` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`padding` |
| `borderRadius?` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](inline-or-modal-container-config.md).`borderRadius` |
| `mode?` | `MODAL` | - | - |
