---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ContainerConfig

```ts
type ContainerConfig = 
  | InlineContainerConfig
  | ModalContainerConfig
  | FillContainerConfig;
```

Parameters to define target editor modal dialog UI constraints.
Default mode is ModalParams. The iframe would open in dialog.
Union of all container configurations, [InlineContainerConfig](../interfaces/inline-container-config.md), [ModalContainerConfig](../interfaces/modal-container-config.md), and [FillContainerConfig](../interfaces/fill-container-config.md).
