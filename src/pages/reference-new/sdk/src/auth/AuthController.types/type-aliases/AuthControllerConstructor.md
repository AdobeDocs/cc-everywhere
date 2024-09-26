[cc-everywhere](../../../../../index.md) / [sdk/src/auth/AuthController.types](../index.md) / AuthControllerConstructor

# Type Alias: AuthControllerConstructor()

```ts
type AuthControllerConstructor: (authStore, analyticsManager, performanceLogger, channelMessageListener, hostInfo, locale) => BaseAuthController;
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `authStore` | [`AuthStore`](../../AuthStore/classes/AuthStore.md) |
| `analyticsManager` | [`AnalyticsManager`](../../../analytics/AnalyticsManager/classes/AnalyticsManager.md) |
| `performanceLogger` | [`PerformanceLogger`](../../../performance/PerformanceLogger/classes/PerformanceLogger.md) |
| `channelMessageListener` | [`ChannelMessageListener`](../../../../../shared/src/messenger/ChannelMessageListener/classes/ChannelMessageListener.md) |
| `hostInfo` | [`HostInfoExtended`](../../../../../shared/src/types/HostInfo.types/type-aliases/HostInfoExtended.md) |
| `locale` | `string` |

## Returns

[`BaseAuthController`](../../BaseAuthController/classes/BaseAuthController.md)
