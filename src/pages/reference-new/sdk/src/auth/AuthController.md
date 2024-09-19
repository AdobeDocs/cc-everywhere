[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/auth/AuthController.types

# sdk/src/auth/AuthController.types

## Interfaces

### AuthProvider()

```ts
interface AuthProvider(): Promise<AuthOption>
```

#### Returns

`Promise`\<[`AuthOption`](../../../shared/src/types/Authentication.md#authoption)\>

## Type Aliases

### AuthControllerConstructor()

```ts
type AuthControllerConstructor: (authStore, analyticsManager, performanceLogger, channelMessageListener, hostInfo, locale) => BaseAuthController;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authStore` | [`AuthStore`](AuthStore.md#authstore) |
| `analyticsManager` | [`AnalyticsManager`](../analytics/AnalyticsManager.md#analyticsmanager) |
| `performanceLogger` | [`PerformanceLogger`](../performance/PerformanceLogger.md#performancelogger) |
| `channelMessageListener` | [`ChannelMessageListener`](../../../shared/src/messenger/ChannelMessageListener.md#channelmessagelistener) |
| `hostInfo` | [`HostInfoExtended`](../../../shared/src/types/HostInfo.md#hostinfoextended) |
| `locale` | `string` |

#### Returns

[`BaseAuthController`](BaseAuthController.md#baseauthcontroller)

## Variables

### IMS\_REQUEST\_OPTIONS

```ts
const IMS_REQUEST_OPTIONS: object;
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `method` | `string` | 'POST' |
| `headers` | `object` | - |
| `headers.Content-Type` | `string` | 'application/x-www-form-urlencoded' |
