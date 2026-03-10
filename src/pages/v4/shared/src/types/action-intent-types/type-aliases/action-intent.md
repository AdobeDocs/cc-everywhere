---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ActionIntent

```ts
type ActionIntent = 
  | EditorIntent
  | ModuleIntent
  | QuickActionIntent
  | WarmupIntent;
```

Intent type used to specify the action for SDK workflows. It includes [EditorIntent](../enumerations/editor-intent.md) for editor operations,
[ModuleIntent](../enumerations/module-intent.md) for module operations, [QuickActionIntent](quick-action-intent.md) for quick actions,
and [WarmupIntent](../enumerations/warmup-intent.md) for warmup operations.
