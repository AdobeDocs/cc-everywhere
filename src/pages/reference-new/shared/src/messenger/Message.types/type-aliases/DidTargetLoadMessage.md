[cc-everywhere](../../../../../index.md) / [shared/src/messenger/Message.types](../index.md) / DidTargetLoadMessage

# Type Alias: DidTargetLoadMessage<T\>

```ts
type DidTargetLoadMessage<T>: T extends LoadStatus.FAILURE ? object : object;
```

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \`$\{LoadStatus\}\` |
