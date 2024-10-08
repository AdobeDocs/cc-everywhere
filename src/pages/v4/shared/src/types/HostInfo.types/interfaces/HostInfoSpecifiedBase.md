# Interface: HostInfoSpecifiedBase

This interface describes the properties provided by client.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | For 3P - Client id generated from dev console. For 1P - Client id generated from IMSS portal. Environment(stage/prod) specific client id should be passed). |
| `appName` | `string` | Client's application name. This name may be used in creating folder for projects in target application. |
| `appVersion?` | [`Version`](../../Version.types/interfaces/Version.md) | Client's current version. |
| `platformCategory?` | [`PlatformCategory`](../enumerations/PlatformCategory.md) | Client's application type. |
