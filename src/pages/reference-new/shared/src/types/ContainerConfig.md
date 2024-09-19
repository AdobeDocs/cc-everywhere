[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/ContainerConfig.types

# shared/src/types/ContainerConfig.types

## Enumerations

### ContainerMode

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `INLINE` | `"inline"` |
| `MODAL` | `"modal"` |
| `FILL` | `"fill"` |

## Interfaces

### BaseContainerConfig

#### Extended by

- [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig)
- [`FillContainerConfig`](ContainerConfig.md#fillcontainerconfig)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars |
| `zIndex?` | `number` | Set the z-index of of the root container |

***

### InlineOrModalContainerConfig

#### Extends

- [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig)

#### Extended by

- [`InlineContainerConfig`](ContainerConfig.md#inlinecontainerconfig)
- [`ModalContainerConfig`](ContainerConfig.md#modalcontainerconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`zIndex` |
| `size?` | [`PixelSize`](Asset.md#pixelsize) | Maximum size boundary of the iframe. | - |
| `minSize?` | [`PixelSize`](Asset.md#pixelsize) | Minimum size boundary of the iframe. | - |
| `padding?` | `number` | Padding applied to the iframe in pixels. | - |
| `borderRadius?` | `number` | Border Radius applied to the iframe in pixels. | - |

***

### InlineContainerConfig

#### Extends

- [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`zIndex` |
| `size?` | [`PixelSize`](Asset.md#pixelsize) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`size` |
| `minSize?` | [`PixelSize`](Asset.md#pixelsize) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`minSize` |
| `padding?` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`padding` |
| `borderRadius?` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`borderRadius` |
| `mode` | `INLINE` | - | - |
| `parentElementId` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |

***

### ModalContainerConfig

#### Extends

- [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`zIndex` |
| `size?` | [`PixelSize`](Asset.md#pixelsize) | Maximum size boundary of the iframe. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`size` |
| `minSize?` | [`PixelSize`](Asset.md#pixelsize) | Minimum size boundary of the iframe. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`minSize` |
| `padding?` | `number` | Padding applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`padding` |
| `borderRadius?` | `number` | Border Radius applied to the iframe in pixels. | [`InlineOrModalContainerConfig`](ContainerConfig.md#inlineormodalcontainerconfig).`borderRadius` |
| `mode?` | `MODAL` | - | - |

***

### FillContainerConfig

#### Extends

- [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig)

#### Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](ContainerConfig.md#basecontainerconfig).`zIndex` |
| `mode` | `FILL` | - | - |
| `parentElementId?` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |

## Type Aliases

### ContainerConfig

```ts
type ContainerConfig: InlineContainerConfig | ModalContainerConfig | FillContainerConfig;
```

Parameters to define target editor modal dialog UI constraints.
Default mode is ModalParams. The iframe would open in dialog.
