---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: MigrateAssetsResult

Result resolved by the headless asset-migration workflow. Contains one
[MigrateAssetsMapping](../type-aliases/migrate-assets-mapping.md) per input document; inspect each entry's `status`
to tell which documents migrated and which failed. The workflow resolves this
result whenever migration ran to completion — even when some (or all)
individual documents failed — and only rejects on a systemic failure (auth
exchange, target-repository resolution, or timeout) that prevents migration
from running at all.

## See

[MigrateAssetsMapping](../type-aliases/migrate-assets-mapping.md) for the shape of each mapping entry.

## Properties

| Property | Type |
| ------ | ------ |
| `mappings` | [`MigrateAssetsMapping`](../type-aliases/migrate-assets-mapping.md)[] |
