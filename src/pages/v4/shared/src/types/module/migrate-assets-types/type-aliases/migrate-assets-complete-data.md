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

Payload carried by the migration-completion message. `mappings` and `error`
are mutually exclusive and enforced by this union:
- Per-document outcome (the normal path, including partial or total
  per-document failure): `mappings` is populated — each entry carries its own
  `status` — and `error` is absent.
- Systemic failure that prevented migration from running at all (auth
  exchange, target-repository resolution, timeout): `error` is populated and
  `mappings` is absent.

## See

 - [MigrateAssetsMapping](migrate-assets-mapping.md) for the per-document mapping shape.
 - [ErrorData](../../../../error/error-data/interfaces/error-data.md) for the transported error shape.
