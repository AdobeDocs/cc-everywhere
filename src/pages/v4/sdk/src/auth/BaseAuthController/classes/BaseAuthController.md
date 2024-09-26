[cc-everywhere](../../../../../index.md) / [sdk/src/auth/BaseAuthController](../index.md) / BaseAuthController

# Class: `abstract` BaseAuthController

## Extended by

- [`AuthController`](../../3p/AuthController/classes/AuthController.md)

## Constructors

### new BaseAuthController()

```ts
new BaseAuthController(
   authStore, 
   _analyticsManager, 
   _performanceLogger, 
   _channelMessageListener, 
   _hostInfo, 
   _locale): BaseAuthController
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authStore` | [`AuthStore`](../../AuthStore/classes/AuthStore.md) |
| `_analyticsManager` | [`AnalyticsManager`](../../../analytics/AnalyticsManager/classes/AnalyticsManager.md) |
| `_performanceLogger` | [`PerformanceLogger`](../../../performance/PerformanceLogger/classes/PerformanceLogger.md) |
| `_channelMessageListener` | [`ChannelMessageListener`](../../../../../shared/src/messenger/ChannelMessageListener/classes/ChannelMessageListener.md) |
| `_hostInfo` | [`HostInfoExtended`](../../../../../shared/src/types/HostInfo.types/type-aliases/HostInfoExtended.md) |
| `_locale` | `string` |

#### Returns

[`BaseAuthController`](BaseAuthController.md)

## Methods

### getTargetUrl()

```ts
abstract getTargetUrl(targetInfo, skipJumpCheck): Promise<URL>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetInfo` | [`TargetInfo`](../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md) |
| `skipJumpCheck` | `boolean` |

#### Returns

`Promise`<`URL`\>

***

### doesSupportSignInWorkflow()

```ts
abstract doesSupportSignInWorkflow(): boolean
```

#### Returns

`boolean`

***

### setAuthProvider()

```ts
setAuthProvider(authProvider): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authProvider` | [`AuthProvider`](../../AuthController.types/interfaces/AuthProvider.md) |

#### Returns

`void`

***

### refreshAuthOption()

```ts
refreshAuthOption(validatorFn): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `validatorFn` | (`arg0`) => `void` |

#### Returns

`Promise`<`void`\>

***

### shouldSkipJump()

```ts
shouldSkipJump(_skipJumpCheck): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `_skipJumpCheck` | `boolean` |

#### Returns

`boolean`
