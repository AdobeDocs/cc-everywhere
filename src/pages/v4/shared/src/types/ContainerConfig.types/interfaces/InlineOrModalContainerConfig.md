# Interface: InlineOrModalContainerConfig

## Extends

- [`BaseContainerConfig`](BaseContainerConfig.md)

## Extended by

- [`InlineContainerConfig`](InlineContainerConfig.md)
- [`ModalContainerConfig`](ModalContainerConfig.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](BaseContainerConfig.md).`backgroundColor` |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](BaseContainerConfig.md).`showLoader` |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](BaseContainerConfig.md).`loadTimeout` |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](BaseContainerConfig.md).`hideCloseButton` |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](BaseContainerConfig.md).`zIndex` |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`BaseContainerConfig`](BaseContainerConfig.md).`showReaderView` |
| `size?` | `public` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Maximum size boundary of the iframe. | - |
| `minSize?` | `public` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Minimum size boundary of the iframe. | - |
| `padding?` | `public` | `number` | Padding applied to the iframe in pixels. | - |
| `borderRadius?` | `public` | `number` | Border Radius applied to the iframe in pixels. | - |
