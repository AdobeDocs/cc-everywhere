---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# shared/src/types/HostInfo.types

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [Environment](enumerations/environment.md) | 1P only Default environment is prod. |
| [PIIPStatus](enumerations/piip-status.md) | Represents whether analytics are sent. By default analytics are sent. |
| [Locale](enumerations/locale.md) | List of supported locales. Default locale is ENGLISH (en_US). |
| [PlatformCategory](enumerations/platform-category.md) | - |
| [HostId](enumerations/host-id.md) | - |
| [HostType](enumerations/host-type.md) | - |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ConfigParamsBase](interfaces/config-params-base.md) | Params to configure the application. |
| [DeviceInfo](interfaces/device-info.md) | - |
| [HostInfoSession](interfaces/host-info-session.md) | - |
| [HostInfoComputed](interfaces/host-info-computed.md) | This interface describes the properties computed from host session. |
| [HostInfoSpecifiedBase](interfaces/host-info-specified-base.md) | This interface describes the properties provided by client. |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ConfigParams](type-aliases/config-params.md) | Config params for 1P and 3P. It is a union of ConfigParams1P and [ConfigParams3P](../3p/host-info-types/type-aliases/config-params.md). |
| [HostInfoSpecified](type-aliases/host-info-specified.md) | Host info for 1P and 3P. It is a union of HostInfo1P and [HostInfo3P](../3p/host-info-types/type-aliases/host-info.md). |
| [HostInfo](type-aliases/host-info.md) | Host info for 1P and 3P. It is a union of [HostInfoSpecifiedBase](interfaces/host-info-specified-base.md) and [HostInfo3P](../3p/host-info-types/type-aliases/host-info.md). |
| [HostInfoExtended](type-aliases/host-info-extended.md) | Extended host information that includes both computed and specified properties. It is a union of [HostInfoComputed](interfaces/host-info-computed.md) for computed properties and [HostInfoSpecified](type-aliases/host-info-specified.md) for client-specified properties. |

## Variables

| Variable | Description |
| ------ | ------ |
| [HostTypeName](variables/host-type-name.md) | - |
