# Interface: IMSAuthConfig

## Extends

- [`PreSignedInAuthConfig`](pre-signed-in-auth-config.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](../../host-info-types/enumerations/piip-status.md) | Represents whether analytics are sent. By default analytics are sent. | - | [`PreSignedInAuthConfig`](pre-signed-in-auth-config.md).`piipStatus` |
| `accessToken` | `string` | - | - | - |
| `userId` | `string` | IMS userId corresponding to `accessToken` | [`PreSignedInAuthConfig`](pre-signed-in-auth-config.md).`userId` | - |
| `forceJumpCheck?` | `boolean` | Valid for desktop clients. If sign in should be always done through jump, pass true. The default behavior is that once SSO is done through jump,the next sign in doesn't use jump url and assumes the cookies are present and still valid. | - | - |
