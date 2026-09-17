---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Type Alias: MigrateAssetsCompleteData

```ts
type MigrateAssetsCompleteData = 
  | {
  mappings: MigrateAssetsMapping[];
  error?: undefined;
}
  | {
  mappings?: undefined;
  error: ErrorData<ErrorCode>;
};
```

Payload carried by the migration-completion message. Success and failure are
mutually exclusive and enforced by this union: on success, `mappings` is
populated and `error` is absent; on failure, `error` is populated and
`mappings` is absent.

## See

 - [MigrateAssetsMapping](../interfaces/migrate-assets-mapping.md) for the per-document mapping shape.
 - [ErrorData](../../../../error/error-data/interfaces/error-data.md) for the transported error shape.
