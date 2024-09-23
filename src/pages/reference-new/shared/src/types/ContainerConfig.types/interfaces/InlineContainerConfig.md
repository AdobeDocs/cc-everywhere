[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/types/ContainerConfig.types](../index.md) / InlineContainerConfig

# Interface: InlineContainerConfig

## Extends

- [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`zIndex` |
| `size?` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`size` |
| `minSize?` | [`PixelSize`](../../Asset.types/interfaces/PixelSize.md) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`minSize` |
| `padding?` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`padding` |
| `borderRadius?` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md).`borderRadius` |
| `mode` | `INLINE` | - | - |
| `parentElementId` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |
