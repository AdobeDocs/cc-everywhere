---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDEEditDesignAppConfig

App config for editDesign (FDE MXP editor entry).

## Extends

- [`FDEBaseAppConfig`](fde-base-app-config.md)

## Extended by

- [`FDEEditDesignAppConfig`](../../../3p/module/app-config-types/interfaces/fde-edit-design-app-config.md)

## Properties

| Property | Type | Description | Inherited from |
| ------ | ------ | ------ | ------ |
| `appVersion?` | [`V1`](../enumerations/fde-app-version.md#v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`appVersion`](fde-base-app-config.md#appversion) |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`allowedFileTypes`](fde-base-app-config.md#allowedfiletypes) |
| `variant?` | [`ExperienceVariant`](../enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` | [`FDEBaseAppConfig`](fde-base-app-config.md).[`variant`](fde-base-app-config.md#variant) |
