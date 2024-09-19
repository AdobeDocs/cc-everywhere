[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/HostInfo.types

# shared/src/types/HostInfo.types

## Enumerations

### Environment

1P only
Default environment is prod.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `DEV` | `"dev"` |
| `STAGE` | `"stage"` |
| `PREPROD` | `"preprod"` |
| `PRODUCTION` | `"prod"` |

***

### PIIPStatus

Represents whether analytics are sent.
By default analytics are sent.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `OPTED_IN` | `1` |
| `OPTED_OUT` | `2` |

***

### Locale

List of supported locales.
Default locale is ENGLISH (en_US).

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `ENGLISH` | `"en_US"` |
| `FRENCH` | `"fr_FR"` |
| `GERMAN` | `"de_DE"` |
| `JAPANESE` | `"ja_JP"` |
| `ITALIAN` | `"it_IT"` |
| `SPANISH` | `"es_ES"` |
| `PORTUGUESE` | `"pt_BR"` |
| `KOREAN` | `"ko_KR"` |
| `DANISH` | `"da_DK"` |
| `DUTCH` | `"nl_NL"` |
| `NORWEGIAN` | `"nb_NO"` |
| `SWEDISH` | `"sv_SE"` |
| `FINNISH` | `"fi_FI"` |
| `CHINESE_SIMPLIFIED` | `"zh_Hans_CN"` |
| `CHINESE_TRADITIONAL` | `"zh_Hant_TW"` |

***

### PlatformCategory

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `WEB` | `"web"` |
| `DESKTOP` | `"desktop"` |

***

### HostId

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `OTHER` | `"Other"` |
| `ACROBAT` | `"Acrobat"` |
| `CCD` | `"CCD"` |
| `CONTENT_CAL` | `"CONTENT_CAL"` |
| `STOCK` | `"STOCK"` |
| `AEM_ASSETS` | `"AEM_ASSETS"` |
| `AEM_ASSETS_CONTENT_HUB` | `"AEM_ASSETS_CONTENT_HUB"` |
| `A_DOT_COM` | `"A_DOT_COM"` |
| `BRIDGE` | `"BRIDGE"` |

***

### HostType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `THIRD_PARTY` | `"THIRD_PARTY"` |
| `FIRST_PARTY` | `"FIRST_PARTY"` |

## Interfaces

### ConfigParamsBase

Params to configure the application.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `env?` | [`Environment`](HostInfo.md#environment) | 1P only |
| `locale?` | `string` | @TJS-pattern ^[a-z]{2}([_-]([A-Za-z]{2,4}))?([_-][A-Z]{2})?$ |
| `skipBrowserSupportCheck?` | `boolean` | **Default** `false` |

***

### HostInfoSession

#### Properties

| Property | Type |
| ------ | ------ |
| `clientId` | `string` |
| `referrer` | `string` |

***

### HostInfoComputed

This interface describes the properties computed from host session.

#### Properties

| Property | Type |
| ------ | ------ |
| `referrer` | `string` |
| `id` | [`HostId`](HostInfo.md#hostid) |
| `type` | [`HostType`](HostInfo.md#hosttype) |
| `isFirstPartyHost` | `boolean` |

***

### HostInfoSpecifiedBase

This interface describes the properties provided by client.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | For 3P - Client id generated from dev console. For 1P - Client id generated from IMSS portal. Environment(stage/prod) specific client id should be passed). |
| `appName` | `string` | Client's application name. This name may be used in creating folder for projects in target application. |
| `appVersion?` | [`Version`](Version.md#version) | Client's current version. |
| `platformCategory?` | [`PlatformCategory`](HostInfo.md#platformcategory) | Client's application type. |

## Type Aliases

### ConfigParams

```ts
type ConfigParams: ConfigParams1P & ConfigParams;
```

***

### HostInfoSpecified

```ts
type HostInfoSpecified: HostInfo1P & HostInfo;
```

***

### HostInfo

```ts
type HostInfo: HostInfo1P & HostInfo;
```

***

### HostInfoExtended

```ts
type HostInfoExtended: HostInfoComputed & HostInfoSpecified;
```

## Variables

### HostTypeName

```ts
const HostTypeName: Record<HostType, string>;
```
