---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: MigrateAssetsDocConfig

Internal-only doc config carrying the client's document ids to the Focused
Design Editor agent for the headless migration workflow. Assembled by
[MigrateAssetsDesignConfig](migrate-assets-design-config.md); not part of the public API surface.

## Extends

- [`BaseDocConfig`](../../../design-config-types/interfaces/base-doc-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `documentIds` | `string`[] | Client-supplied documents to migrate from guest to signed-in account. |
