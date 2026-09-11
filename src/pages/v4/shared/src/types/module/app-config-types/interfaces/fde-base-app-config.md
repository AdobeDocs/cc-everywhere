---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: FDEBaseAppConfig

FDE session fields shared by createDesign and editDesign (FDE path).
Lives in the shared module package (not 1P-only).

## Extended by

- [`FDEEditDesignAppConfig`](fde-edit-design-app-config.md)
- [`FDECreateDesignAppConfig`](fde-create-design-app-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `appVersion?` | [`V1`](../enumerations/fde-app-version.md#enumeration-member-v1) | FDE experience version for template browser and editor surfaces. **Default** `FDEAppVersion.V1` |
| `allowedFileTypes?` | ( \| [`JPEG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-jpeg) \| [`PNG`](../../../asset-types/enumerations/image-file-type.md#enumeration-member-png) \| [`PDF`](../../../asset-types/enumerations/pdf-file-type.md#enumeration-member-pdf))[] | Specify the list of file types that the user can publish. **Default** `Enable all formats (PNG, JPEG and PDF)` |
| `variant?` | [`ExperienceVariant`](../enumerations/experience-variant.md) | Specifies the experience variant to use when launching the module. **Default** `ExperienceVariant.DEFAULT` |
