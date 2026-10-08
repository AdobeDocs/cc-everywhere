---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# sdk/src/context/modules/DesignContext

## Classes

| Class | Description |
| ------ | ------ |
| [DesignContextImpl](classes/design-context-impl.md) | Stateless capability facade over the launched ActionContext. Lifetime and request queues remain owned by the action's internal WorkflowContext. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [DesignContext](interfaces/design-context.md) | Module-specific context returned by `sdk.module.createDesign()` and `sdk.module.editDesign()` after the module has loaded, in both the 1P and 3P SDKs. |
