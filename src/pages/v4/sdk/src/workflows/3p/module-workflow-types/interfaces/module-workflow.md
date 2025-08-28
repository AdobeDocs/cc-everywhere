[**cc-everywhere**](../../../../../../index.md)

---

# Interface: ModuleWorkflow

## Methods

### editImage()

```ts
editImage(
   docConfig,
   appConfig?,
   exportConfig?,
   containerConfig?): void;
```

#### Parameters

| Parameter          | Type                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `docConfig`        | [`EditImageDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md) |
| `appConfig?`       | [`EditImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) |
| `exportConfig?`    | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md)               |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md)        |

#### Returns

`void`

---

### createImageFromText()

```ts
createImageFromText(
   appConfig?,
   exportConfig?,
   containerConfig?): void;
```

#### Parameters

| Parameter          | Type                                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `appConfig?`       | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) |
| `exportConfig?`    | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md)                    |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md)             |

#### Returns

`void`

---

### startFromContent()

```ts
startFromContent(
   appConfig?,
   exportConfig?,
   containerConfig?): void;
```

This field is internal and not ready for public SDK exposure

#### Parameters

| Parameter          | Type                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `appConfig?`       | [`StartFromContentAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/start-from-content-app-config.md) |
| `exportConfig?`    | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md)                              |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md)                       |

#### Returns

`void`

#### Ignore
