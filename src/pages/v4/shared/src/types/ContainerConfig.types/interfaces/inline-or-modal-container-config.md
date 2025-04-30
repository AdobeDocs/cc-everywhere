# Interface: InlineOrModalContainerConfig

## Extends

- [`BaseContainerConfig`](base-container-config.md)

## Extended by

- [`InlineContainerConfig`](inline-container-config.md)
- [`ModalContainerConfig`](modal-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](base-container-config.md).`backgroundColor` |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](base-container-config.md).`showLoader` |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](base-container-config.md).`loadTimeout` |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](base-container-config.md).`hideCloseButton` |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](base-container-config.md).`zIndex` |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`BaseContainerConfig`](base-container-config.md).`showReaderView` |
| `size?` | `public` | [`PixelSize`](../../Asset.types/interfaces/pixel-size.md) | Maximum size boundary of the iframe. | - |
| `minSize?` | `public` | [`PixelSize`](../../Asset.types/interfaces/pixel-size.md) | Minimum size boundary of the iframe. | - |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | - |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | - |
