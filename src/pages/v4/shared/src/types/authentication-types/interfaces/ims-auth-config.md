[**cc-everywhere**](../../../../../index.md)

***

# Interface: IMSAuthConfig

## Extends

- [`PreSignedInAuthConfig`](../../authentication-types/interfaces/pre-signed-in-auth-config.md)

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="piipstatus"></a> `piipStatus?` | [`PIIPStatus`](../../host-info-types/enumerations/piip-status.md) | Represents whether analytics are sent. By default analytics are sent. | - | [`PreSignedInAuthConfig`](../../authentication-types/interfaces/pre-signed-in-auth-config.md).[`piipStatus`](../../authentication-types/interfaces/pre-signed-in-auth-config.md#piipstatus) |
| <a id="accesstoken"></a> `accessToken` | `string` | - | - | - |
| <a id="userid"></a> `userId` | `string` | IMS userId corresponding to `accessToken` | [`PreSignedInAuthConfig`](../../authentication-types/interfaces/pre-signed-in-auth-config.md).[`userId`](../../authentication-types/interfaces/pre-signed-in-auth-config.md#userid) | - |
| <a id="forcejumpcheck"></a> `forceJumpCheck?` | `boolean` | Valid for desktop clients. If sign in should be always done through jump, pass true. The default behavior is that once SSO is done through jump,the next sign in doesn't use jump url and assumes the cookies are present and still valid. | - | - |
