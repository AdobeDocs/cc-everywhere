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
| [MigrateAssetsResult](interfaces/migrate-assets-result.md) | Result resolved by the headless asset-migration workflow. Contains one [MigrateAssetsMapping](type-aliases/migrate-assets-mapping.md) per input document; inspect each entry's `status` to tell which documents migrated and which failed. The workflow resolves this result whenever migration ran to completion — even when some (or all) individual documents failed — and only rejects on a systemic failure (auth exchange, target-repository resolution, or timeout) that prevents migration from running at all. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [MigrateAssetsStatus](type-aliases/migrate-assets-status.md) | Per-document migration outcome. |
| [MigrateAssetsMapping](type-aliases/migrate-assets-mapping.md) | One input-document migration outcome. Migration is per-document: each entry reports its own [MigrateAssetsStatus](type-aliases/migrate-assets-status.md), so a mixed result (some documents migrated, others failed) is expressed as a mix of `'success'` and `'failure'` entries rather than failing the whole workflow. |
| [MigrateAssetsCompleteData](type-aliases/migrate-assets-complete-data.md) | Payload carried by the migration-completion message. `mappings` and `error` are mutually exclusive and enforced by this union: - Per-document outcome (the normal path, including partial or total per-document failure): `mappings` is populated — each entry carries its own `status` — and `error` is absent. - Systemic failure that prevented migration from running at all (auth exchange, target-repository resolution, timeout): `error` is populated and `mappings` is absent. |
