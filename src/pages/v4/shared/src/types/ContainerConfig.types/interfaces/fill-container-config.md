# Interface: FillContainerConfig

## Extends

- [`BaseContainerConfig`](base-container-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. | [`BaseContainerConfig`](base-container-config.md).`backgroundColor` |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. | [`BaseContainerConfig`](base-container-config.md).`showLoader` |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. | [`BaseContainerConfig`](base-container-config.md).`loadTimeout` |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars | [`BaseContainerConfig`](base-container-config.md).`hideCloseButton` |
| `zIndex?` | `number` | Set the z-index of of the root container | [`BaseContainerConfig`](base-container-config.md).`zIndex` |
| `mode` | `FILL` | - | - |
| `parentElementId?` | `string` | Id of element to which iframe must be appended. By default it is appended to body. | - |
