[**cc-everywhere**](../../../../../index.md)

***

# Interface: HostInfoSpecifiedBase

This interface describes the properties provided by client.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="clientid"></a> `clientId` | `string` | For 3P - Client id generated from dev console. For 1P - Client id generated from IMSS portal. Environment(stage/prod) specific client id should be passed). |
| <a id="appname"></a> `appName` | `string` | Client's application name. This name may be used in creating folder for projects in target application. |
| <a id="appversion"></a> `appVersion?` | [`Version`](../../version-types/interfaces/version.md) | Client's current version. |
| <a id="platformcategory"></a> `platformCategory?` | [`PlatformCategory`](../../host-info-types/enumerations/platform-category.md) | Client's application type. |
