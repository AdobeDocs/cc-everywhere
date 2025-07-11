[**cc-everywhere**](../../../../../../index.md)

***

# Interface: ModuleWorkflow

## Methods

<a id="editimage"></a>

### editImage()

```ts
editImage(
   docConfig, 
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `docConfig` | [`EditImageDocConfig`](../../../../../../shared/src/types/module/doc-config-types/interfaces/edit-image-doc-config.md) |
| `appConfig?` | [`EditImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/edit-image-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`

***

<a id="createimagefromtext"></a>

### createImageFromText()

```ts
createImageFromText(
   appConfig?, 
   exportConfig?, 
   containerConfig?): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `appConfig?` | [`TextToImageAppConfig`](../../../../../../shared/src/types/module/app-config-types/interfaces/text-to-image-app-config.md) |
| `exportConfig?` | [`ExportOptions`](../../../../../../shared/src/types/export-config-types/type-aliases/export-options.md) |
| `containerConfig?` | [`ContainerConfig`](../../../../../../shared/src/types/container-config-types/type-aliases/container-config.md) |

#### Returns

`void`
