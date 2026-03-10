---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: ContinueEditingAction

```ts
type ContinueEditingAction = EditFurtherAction & object;
```

Action used when continuing editing in another experience.
It extends [EditFurtherAction](../interfaces/edit-further-action.md) and always includes an [EditFurtherIntent](../enumerations/edit-further-intent.md).

## Type Declaration

### intent

```ts
intent: EditFurtherIntent;
```
