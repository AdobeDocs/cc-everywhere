[cc-everywhere](../../../../../index.md) / [shared/src/types/HostInfo.types](../index.md) / HostInfoSpecifiedBase

# Interface: HostInfoSpecifiedBase

This interface describes the properties provided by client.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | Client id generated from dev console. |
| `appName` | `string` | Client's application name. This name may be used in creating folder for projects in target application. |
| `appVersion?` | [`Version`](../../Version.types/interfaces/Version.md) | Client's current version. |
| `platformCategory?` | [`PlatformCategory`](../enumerations/PlatformCategory.md) | Client's application type. |
