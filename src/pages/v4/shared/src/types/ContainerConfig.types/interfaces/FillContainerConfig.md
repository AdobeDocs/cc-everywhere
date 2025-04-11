# Interface: FillContainerConfig

## Extends

- [`BaseContainerConfig`](BaseContainerConfig.md)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `backgroundColor?` | `public` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](BaseContainerConfig.md).`backgroundColor` |
| `showLoader?` | `public` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](BaseContainerConfig.md).`showLoader` |
| `loadTimeout?` | `public` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](BaseContainerConfig.md).`loadTimeout` |
| `hideCloseButton?` | `public` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](BaseContainerConfig.md).`hideCloseButton` |
| `zIndex?` | `public` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](BaseContainerConfig.md).`zIndex` |
| `showReaderView?` | `readonly` | `boolean` | Show Reader Loading View | [`BaseContainerConfig`](BaseContainerConfig.md).`showReaderView` |
| `showExpressIconWithText?` | `readonly` | `boolean` | Show new express icon with text | [`BaseContainerConfig`](BaseContainerConfig.md).`showExpressIconWithText` |
| `showDarkerBackgroundForLoader?` | `readonly` | `boolean` | Show darker background for loader | [`BaseContainerConfig`](BaseContainerConfig.md).`showDarkerBackgroundForLoader` |
| `mode` | `public` | `FILL` | - | - |
| `parentElementId?` | `public` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |
