[cc-everywhere](../../../../../index.md) / [shared/src/types/ContainerConfig.types](../index.md) / BaseContainerConfig

# Interface: BaseContainerConfig

## Extended by

- [`InlineOrModalContainerConfig`](InlineOrModalContainerConfig.md)
- [`FillContainerConfig`](FillContainerConfig.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `backgroundColor?` | `string` | Override the background color of the iframe. By default this is as per theme. |
| `showLoader?` | `boolean` | Show spinner while loading target app. Default is true. |
| `loadTimeout?` | `number` | If target app does't open within this time (in ms, same as of setTimeout), the error callback is invoked with error code TARGET_LOAD_TIMED_OUT. |
| `hideCloseButton?` | `boolean` | Don't show close button for container and header bars |
| `zIndex?` | `number` | Set the z-index of of the root container |