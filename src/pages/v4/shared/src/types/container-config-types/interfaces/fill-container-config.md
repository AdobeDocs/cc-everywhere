[**cc-everywhere**](../../../../../index.md)

***

# Interface: FillContainerConfig

## Extends

- [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`backgroundColor`](../../container-config-types/interfaces/base-container-config.md#backgroundcolor) |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`showLoader`](../../container-config-types/interfaces/base-container-config.md#showloader) |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`loadTimeout`](../../container-config-types/interfaces/base-container-config.md#loadtimeout) |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`hideCloseButton`](../../container-config-types/interfaces/base-container-config.md#hideclosebutton) |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`zIndex`](../../container-config-types/interfaces/base-container-config.md#zindex) |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`showReaderView`](../../container-config-types/interfaces/base-container-config.md#showreaderview) |
| `showExpressIconWithoutText?` | `readonly` | `boolean` | Show new express icon without text | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`showExpressIconWithoutText`](../../container-config-types/interfaces/base-container-config.md#showexpressiconwithouttext) |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`showDarkerBackgroundForLoader`](../../container-config-types/interfaces/base-container-config.md#showdarkerbackgroundforloader) |
| `iframeTitle?` | `public` | `string` | Title of the iframe for accessibility | [`BaseContainerConfig`](../../container-config-types/interfaces/base-container-config.md).[`iframeTitle`](../../container-config-types/interfaces/base-container-config.md#iframetitle) |
| `mode` | `public` | [`FILL`](../../container-config-types/enumerations/container-mode.md#fill) | - | - |
| `parentElementId?` | `public` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |
