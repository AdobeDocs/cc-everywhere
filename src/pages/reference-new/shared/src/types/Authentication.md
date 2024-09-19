[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/Authentication.types

# shared/src/types/Authentication.types

## Enumerations

### ValidateTokenError

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `UNKNOWN` | `"UNKNOWN"` |
| `BAD_SIGNATURE` | `"BAD_SIGNATURE"` |
| `INVALID_TOKEN` | `"INVALID_TOKEN"` |
| `TIMEOUT` | `"TIMEOUT"` |

***

### AuthMode

Enum representing different authentication modes.

#### Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `UPFRONT` | `"upfront"` | User authentication is upfront. |
| `DELAYED` | `"delayed"` | Authentication is delayed. |
| `PRE_SIGNED_IN` | `"pre-signed-in"` | User is pre-signed in. |
| `IMS_JUMP` | `"ims-jump"` | Authentication is through IMS jump. |

## Interfaces

### AuthConfig

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `authIdentifier` | `string` | Represents a user email or email domain. For example abc@xyz.com or xyz.com This is prefilled in the sign in screen. |

***

### PreSignedInAuthConfig

#### Extended by

- [`IMSAuthConfig`](Authentication.md#imsauthconfig)

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](HostInfo.md#piipstatus) | Represents whether analytics are sent. By default analytics are sent. |
| `userId?` | `string` | IMS userId Needed to avoid check token failure in scenarios with multiple profiles, enabling IMS to identify which profile is already signed in |

***

### IMSAuthConfig

#### Extends

- [`PreSignedInAuthConfig`](Authentication.md#presignedinauthconfig)

#### Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](HostInfo.md#piipstatus) | Represents whether analytics are sent. By default analytics are sent. | - | [`PreSignedInAuthConfig`](Authentication.md#presignedinauthconfig).`piipStatus` |
| `accessToken` | `string` | - | - | - |
| `userId` | `string` | IMS userId corresponding to [[`accessToken`]] | [`PreSignedInAuthConfig`](Authentication.md#presignedinauthconfig).`userId` | - |
| `forceJumpCheck?` | `boolean` | Valid for desktop clients. If sign in should be always done through jump, pass true. The default behavior is that once SSO is done through jump,the next sign in doesn't use jump url and assumes the cookies are present and still valid. | - | - |

***

### BaseAuthOption

#### Extended by

- [`UpfrontAuthOption`](Authentication.md#upfrontauthoption)
- [`DelayedAuthOption`](Authentication.md#delayedauthoption)
- [`PreSignedInAuthOption`](Authentication.md#presignedinauthoption)
- [`ImsJumpAuthOption`](Authentication.md#imsjumpauthoption)

#### Properties

| Property | Type |
| ------ | ------ |
| `mode` | [`AuthMode`](Authentication.md#authmode) |

***

### UpfrontAuthOption

#### Extends

- [`BaseAuthOption`](Authentication.md#baseauthoption)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | `UPFRONT` | [`BaseAuthOption`](Authentication.md#baseauthoption).`mode` |
| `config?` | [`AuthConfig`](Authentication.md#authconfig) | - |

***

### DelayedAuthOption

#### Extends

- [`BaseAuthOption`](Authentication.md#baseauthoption)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | `DELAYED` | [`BaseAuthOption`](Authentication.md#baseauthoption).`mode` |
| `config?` | [`AuthConfig`](Authentication.md#authconfig) | - |

***

### PreSignedInAuthOption

#### Extends

- [`BaseAuthOption`](Authentication.md#baseauthoption)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | `PRE_SIGNED_IN` | [`BaseAuthOption`](Authentication.md#baseauthoption).`mode` |
| `config?` | [`PreSignedInAuthConfig`](Authentication.md#presignedinauthconfig) | - |

***

### ImsJumpAuthOption

#### Extends

- [`BaseAuthOption`](Authentication.md#baseauthoption)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `mode` | `IMS_JUMP` | [`BaseAuthOption`](Authentication.md#baseauthoption).`mode` |
| `config` | [`IMSAuthConfig`](Authentication.md#imsauthconfig) | - |

***

### UserInfo

Base class for user related information.

#### Properties

| Property | Type |
| ------ | ------ |
| `userId?` | `string` |
| `piipStatus?` | [`PIIPStatus`](HostInfo.md#piipstatus) |

## Type Aliases

### AuthOption

```ts
type AuthOption: UpfrontAuthOption | DelayedAuthOption | ImsJumpAuthOption | PreSignedInAuthOption;
```

## Variables

### IMS\_JUMP\_ERROR\_KEY

```ts
const IMS_JUMP_ERROR_KEY: "error" = 'error';
```

***

### IMS\_JUMP\_ERROR\_DESCRIPTION\_KEY

```ts
const IMS_JUMP_ERROR_DESCRIPTION_KEY: "error_description" = 'error_description';
```
