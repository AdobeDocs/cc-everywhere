[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/auth/BaseAuthController

# sdk/src/auth/BaseAuthController

## Classes

### `abstract` BaseAuthController

#### Extended by

- [`AuthController`](3p/AuthController.md#authcontroller)

#### Constructors

##### new BaseAuthController()

```ts
new BaseAuthController(
   authStore, 
   _analyticsManager, 
   _performanceLogger, 
   _channelMessageListener, 
   _hostInfo, 
   _locale): BaseAuthController
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `authStore` | [`AuthStore`](AuthStore.md#authstore) |
| `_analyticsManager` | [`AnalyticsManager`](../analytics/AnalyticsManager.md#analyticsmanager) |
| `_performanceLogger` | [`PerformanceLogger`](../performance/PerformanceLogger.md#performancelogger) |
| `_channelMessageListener` | [`ChannelMessageListener`](../../../shared/src/messenger/ChannelMessageListener.md#channelmessagelistener) |
| `_hostInfo` | [`HostInfoExtended`](../../../shared/src/types/HostInfo.md#hostinfoextended) |
| `_locale` | `string` |

###### Returns

[`BaseAuthController`](BaseAuthController.md#baseauthcontroller)

#### Methods

##### getTargetUrl()

```ts
abstract getTargetUrl(targetInfo, skipJumpCheck): Promise<URL>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetInfo` | [`TargetInfo`](../../../shared/src/types/TargetInfo.md#targetinfo) |
| `skipJumpCheck` | `boolean` |

###### Returns

`Promise`\<`URL`\>

##### doesSupportSignInWorkflow()

```ts
abstract doesSupportSignInWorkflow(): boolean
```

###### Returns

`boolean`

##### setAuthProvider()

```ts
setAuthProvider(authProvider): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `authProvider` | [`AuthProvider`](AuthController.md#authprovider) |

###### Returns

`void`

##### refreshAuthOption()

```ts
refreshAuthOption(validatorFn): Promise<void>
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `validatorFn` | (`arg0`) => `void` |

###### Returns

`Promise`\<`void`\>

##### shouldSkipJump()

```ts
shouldSkipJump(_skipJumpCheck): boolean
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `_skipJumpCheck` | `boolean` |

###### Returns

`boolean`
