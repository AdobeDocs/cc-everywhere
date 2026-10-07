---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Type Alias: MigrateAssetsMapping

```ts
type MigrateAssetsMapping = 
  | {
  inputDocumentId: string;
  status: "success";
  outputDocumentId: string;
  error?: undefined;
}
  | {
  inputDocumentId: string;
  status: "failure";
  outputDocumentId?: undefined;
  error: ErrorData<ErrorCode>;
};
```

One input-document migration outcome. Migration is per-document: each entry
reports its own [MigrateAssetsStatus](migrate-assets-status.md), so a mixed result (some documents
migrated, others failed) is expressed as a mix of `'success'` and `'failure'`
entries rather than failing the whole workflow.

This is a discriminated union on `status`:
- `'success'` → `outputDocumentId` is the migrated signed-in document id, and
  `error` is absent.
- `'failure'` → `error` describes why this document could not be migrated, and
  `outputDocumentId` is absent.

## Union Members

### Type Literal

```ts
{
  inputDocumentId: string;
  status: "success";
  outputDocumentId: string;
  error?: undefined;
}
```

#### inputDocumentId

```ts
inputDocumentId: string;
```

The client-supplied guest document id.

#### status

```ts
status: "success";
```

#### outputDocumentId

```ts
outputDocumentId: string;
```

The migrated signed-in document id.

#### error?

```ts
optional error?: undefined;
```

<HorizontalLine />

### Type Literal

```ts
{
  inputDocumentId: string;
  status: "failure";
  outputDocumentId?: undefined;
  error: ErrorData<ErrorCode>;
}
```

#### inputDocumentId

```ts
inputDocumentId: string;
```

The client-supplied guest document id.

#### status

```ts
status: "failure";
```

#### outputDocumentId?

```ts
optional outputDocumentId?: undefined;
```

#### error

```ts
error: ErrorData<ErrorCode>;
```

Why this specific document could not be migrated.

## See

[ErrorData](../../../../error/error-data/interfaces/error-data.md) for the transported per-document error shape.
