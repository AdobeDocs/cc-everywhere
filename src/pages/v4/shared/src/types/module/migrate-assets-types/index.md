---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# shared/src/types/module/MigrateAssets.types

## Interfaces

| Interface | Description |
| ------ | ------ |
| [MigrateAssetsDocConfig](interfaces/migrate-assets-doc-config.md) | Internal-only doc config carrying the client's document ids to the Focused Design Editor agent for the headless migration workflow. Assembled by [MigrateAssetsDesignConfig](interfaces/migrate-assets-design-config.md); not part of the public API surface. |
| [MigrateAssetsDesignConfig](interfaces/migrate-assets-design-config.md) | Internal design config for the headless asset-migration action. Not part of the public API surface — assembled internally from the `documentIds` array. `appConfig`, `exportConfig` and `containerConfig` are always undefined. |
| [MigrateAssetsMapping](interfaces/migrate-assets-mapping.md) | One input to output document mapping produced by migration. |
| [MigrateAssetsResult](interfaces/migrate-assets-result.md) | Result resolved by the headless asset-migration workflow. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [MigrateAssetsCompleteData](type-aliases/migrate-assets-complete-data.md) | Payload carried by the migration-completion message. Success and failure are mutually exclusive and enforced by this union: on success, `mappings` is populated and `error` is absent; on failure, `error` is populated and `mappings` is absent. |
