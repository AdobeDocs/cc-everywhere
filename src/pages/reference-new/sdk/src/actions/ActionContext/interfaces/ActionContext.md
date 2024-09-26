[cc-everywhere](../../../../../index.md) / [sdk/src/actions/ActionContext](../index.md) / ActionContext

# Interface: ActionContext<T\>

Information that Action needs to be passed by the host.

## Extends

- [`SDKContext`](SDKContext.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`DesignConfig`](../../../../../shared/src/types/DesignConfig.types/interfaces/DesignConfig.md) |

## Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `authController` | [`BaseAuthController`](../../../auth/BaseAuthController/classes/BaseAuthController.md) | [`SDKContext`](SDKContext.md).`authController` |
| `analyticsManager` | [`AnalyticsManager`](../../../analytics/AnalyticsManager/classes/AnalyticsManager.md) | [`SDKContext`](SDKContext.md).`analyticsManager` |
| `channelMessageListener` | [`ChannelMessageListener`](../../../../../shared/src/messenger/ChannelMessageListener/classes/ChannelMessageListener.md) | [`SDKContext`](SDKContext.md).`channelMessageListener` |
| `containerManager` | `ContainerManager` | [`SDKContext`](SDKContext.md).`containerManager` |
| `performanceLogger` | [`PerformanceLogger`](../../../performance/PerformanceLogger/classes/PerformanceLogger.md) | [`SDKContext`](SDKContext.md).`performanceLogger` |
| `validator` | `BaseValidator` | [`SDKContext`](SDKContext.md).`validator` |
| `authStore` | [`AuthStore`](../../../auth/AuthStore/classes/AuthStore.md) | [`SDKContext`](SDKContext.md).`authStore` |
| `hostInfo` | [`HostInfoExtended`](../../../../../shared/src/types/HostInfo.types/type-aliases/HostInfoExtended.md) | [`SDKContext`](SDKContext.md).`hostInfo` |
| `params` | [`ContextParams`](ContextParams.md)<`T`\> | - |
