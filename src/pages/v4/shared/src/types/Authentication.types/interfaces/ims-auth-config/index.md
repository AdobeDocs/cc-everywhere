# Interface: IMSAuthConfig

## Extends

- [`PreSignedInAuthConfig`](PreSignedInauth-config.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](../../HostInfo.types/enumerations/PIIPstatus.md) | Represents whether analytics are sent. By default analytics are sent. | - | [`PreSignedInAuthConfig`](PreSignedInauth-config.md).`piipStatus` |
| `accessToken` | `string` | - | - | - |
| `userId` | `string` | IMS userId corresponding to `accessToken` | [`PreSignedInAuthConfig`](PreSignedInauth-config.md).`userId` | - |
| `forceJumpCheck?` | `boolean` | Valid for desktop clients. If sign in should be always done through jump, pass true. The default behavior is that once SSO is done through jump,the next sign in doesn't use jump url and assumes the cookies are present and still valid. | - | - |
