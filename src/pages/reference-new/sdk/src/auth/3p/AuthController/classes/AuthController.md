[**cc-everywhere**](../../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../../index.md) / [sdk/src/auth/3p/AuthController](../index.md) / AuthController

# Class: AuthController

## Extends

- [`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md)

## Constructors

### new AuthController()

```ts
new AuthController(
   authStore, 
   analyticsManager, 
   performanceLogger, 
   channelMessageListener, 
   hostInfo, 
   locale): AuthController
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authStore` | [`AuthStore`](../../../AuthStore/classes/AuthStore.md) |
| `analyticsManager` | [`AnalyticsManager`](../../../../analytics/AnalyticsManager/classes/AnalyticsManager.md) |
| `performanceLogger` | [`PerformanceLogger`](../../../../performance/PerformanceLogger/classes/PerformanceLogger.md) |
| `channelMessageListener` | [`ChannelMessageListener`](../../../../../../shared/src/messenger/ChannelMessageListener/classes/ChannelMessageListener.md) |
| `hostInfo` | [`HostInfoExtended`](../../../../../../shared/src/types/HostInfo.types/type-aliases/HostInfoExtended.md) |
| `locale` | `string` |

#### Returns

[`AuthController`](AuthController.md)

#### Overrides

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`constructor`](../../../BaseAuthController/classes/BaseAuthController.md#constructors)

## Methods

### getTargetUrl()

```ts
getTargetUrl(targetInfo): Promise<URL>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetInfo` | [`TargetInfo`](../../../../../../shared/src/types/TargetInfo.types/interfaces/TargetInfo.md) |

#### Returns

`Promise`\<`URL`\>

#### Overrides

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`getTargetUrl`](../../../BaseAuthController/classes/BaseAuthController.md#gettargeturl)

***

### doesSupportSignInWorkflow()

```ts
doesSupportSignInWorkflow(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`doesSupportSignInWorkflow`](../../../BaseAuthController/classes/BaseAuthController.md#doessupportsigninworkflow)

***

### setAuthProvider()

```ts
setAuthProvider(authProvider): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `authProvider` | [`AuthProvider`](../../../AuthController.types/interfaces/AuthProvider.md) |

#### Returns

`void`

#### Inherited from

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`setAuthProvider`](../../../BaseAuthController/classes/BaseAuthController.md#setauthprovider)

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

`Promise`\<`void`\>

#### Inherited from

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`refreshAuthOption`](../../../BaseAuthController/classes/BaseAuthController.md#refreshauthoption)

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

#### Inherited from

[`BaseAuthController`](../../../BaseAuthController/classes/BaseAuthController.md).[`shouldSkipJump`](../../../BaseAuthController/classes/BaseAuthController.md#shouldskipjump)
