[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/actions/ActionContext

# sdk/src/actions/ActionContext

## Interfaces

### ContextParams\<T\>

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../shared/src/types/DesignConfig.md#designconfig) |

#### Properties

| Property | Type |
| ------ | ------ |
| `requestId` | `string` |
| `configParams` | [`ConfigParams`](../../../shared/src/types/HostInfo.md#configparams) |
| `intent` | [`ActionIntent`](../../../shared/src/types/ActionIntent.md#actionintent) |
| `designConfig` | `T` |

***

### SDKContext

Information that Action needs to be passed by the host.

#### Extended by

- [`ActionContext`](ActionContext.md#actioncontextt)

#### Properties

| Property | Type |
| ------ | ------ |
| `authController` | [`BaseAuthController`](../auth/BaseAuthController.md#baseauthcontroller) |
| `analyticsManager` | [`AnalyticsManager`](../analytics/AnalyticsManager.md#analyticsmanager) |
| `channelMessageListener` | [`ChannelMessageListener`](../../../shared/src/messenger/ChannelMessageListener.md#channelmessagelistener) |
| `containerManager` | `ContainerManager` |
| `performanceLogger` | [`PerformanceLogger`](../performance/PerformanceLogger.md#performancelogger) |
| `validator` | `BaseValidator` |
| `authStore` | [`AuthStore`](../auth/AuthStore.md#authstore) |
| `hostInfo` | [`HostInfoExtended`](../../../shared/src/types/HostInfo.md#hostinfoextended) |

***

### ActionContext\<T\>

Information that Action needs to be passed by the host.

#### Extends

- [`SDKContext`](ActionContext.md#sdkcontext)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../shared/src/types/DesignConfig.md#designconfig) |

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `authController` | [`BaseAuthController`](../auth/BaseAuthController.md#baseauthcontroller) | [`SDKContext`](ActionContext.md#sdkcontext).`authController` |
| `analyticsManager` | [`AnalyticsManager`](../analytics/AnalyticsManager.md#analyticsmanager) | [`SDKContext`](ActionContext.md#sdkcontext).`analyticsManager` |
| `channelMessageListener` | [`ChannelMessageListener`](../../../shared/src/messenger/ChannelMessageListener.md#channelmessagelistener) | [`SDKContext`](ActionContext.md#sdkcontext).`channelMessageListener` |
| `containerManager` | `ContainerManager` | [`SDKContext`](ActionContext.md#sdkcontext).`containerManager` |
| `performanceLogger` | [`PerformanceLogger`](../performance/PerformanceLogger.md#performancelogger) | [`SDKContext`](ActionContext.md#sdkcontext).`performanceLogger` |
| `validator` | `BaseValidator` | [`SDKContext`](ActionContext.md#sdkcontext).`validator` |
| `authStore` | [`AuthStore`](../auth/AuthStore.md#authstore) | [`SDKContext`](ActionContext.md#sdkcontext).`authStore` |
| `hostInfo` | [`HostInfoExtended`](../../../shared/src/types/HostInfo.md#hostinfoextended) | [`SDKContext`](ActionContext.md#sdkcontext).`hostInfo` |
| `params` | [`ContextParams`](ActionContext.md#contextparamst)\<`T`\> | - |
