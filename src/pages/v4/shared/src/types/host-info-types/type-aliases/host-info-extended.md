---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Type Alias: HostInfoExtended

```ts
type HostInfoExtended = HostInfoComputed & HostInfoSpecified;
```

Extended host information that includes both computed and specified properties. It is a union of [HostInfoComputed](../interfaces/host-info-computed.md)
for computed properties and [HostInfoSpecified](host-info-specified.md) for client-specified properties.
