[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/Callbacks.types

# shared/src/types/Callbacks.types

## Interfaces

### IntentChangeConfig

#### Properties

| Property | Type |
| ------ | ------ |
| `appConfig?` | [`BaseAppConfig`](DesignConfig.md#baseappconfig) |
| `exportConfig?` | [`ExportOptions`](ExportConfig.md#exportoptions) |
| `containerConfig?` | [`ContainerConfig`](ContainerConfig.md#containerconfig) |

***

### Callbacks

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `onLoadStart?` | [`LoadStartCallback`](Callbacks.md#loadstartcallback) | Callback maybe invoked when target application has started loading. |
| `onLoad?` | [`LoadCallback`](Callbacks.md#loadcallback) | Callback maybe invoked when target application has finished loading. |
| `onCancel?` | [`CancelCallback`](Callbacks.md#cancelcallback) | Callback maybe invoked when user cancels the workflow. |
| `onPublishStart?` | [`PublishStartCallback`](Callbacks.md#publishstartcallback) | Callback maybe invoked when user starts export of the asset to host app by click on save button. |
| `onPublish?` | [`PublishCallback`](Callbacks.md#publishcallback) | Callback maybe invoked when export of the asset finishes. |
| `onError?` | [`ErrorCallback`](../error/CCEverywhereError.md#errorcallbackt)\<`unknown`\> | Callback maybe invoked in case of error scenarios. |
| `onEvent?` | [`EventCallback`](Callbacks.md#eventcallback) | Callback maybe invoked in case of some event like information events. |
| `onIntentChange?` | [`IntentChangeCallback`](Callbacks.md#intentchangecallback) | Callback invoked when user navigates from one design workflow to another For example: Quick action to Express. |

## Type Aliases

### LoadStartCallback()

```ts
type LoadStartCallback: () => void;
```

#### Returns

`void`

***

### LoadCallback()

```ts
type LoadCallback: () => void;
```

#### Returns

`void`

***

### CancelCallback()

```ts
type CancelCallback: () => void;
```

#### Returns

`void`

***

### PublishStartCallback()

```ts
type PublishStartCallback: () => void;
```

#### Returns

`void`

***

### PublishCallback()

```ts
type PublishCallback: (intent, publishParams) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `intent` | [`ActionIntent`](ActionIntent.md#actionintent) |
| `publishParams` | [`PublishParams`](PublishParams.md#publishparams) |

#### Returns

`void`

***

### EventCallback()

```ts
type EventCallback: (message) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | [`HostEventData`](../messenger/MessageData.md#hosteventdata) |

#### Returns

`void`

***

### IntentChangeCallback()

```ts
type IntentChangeCallback: (oldIntent, newIntent) => IntentChangeConfig | undefined;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `oldIntent` | [`ActionIntent`](ActionIntent.md#actionintent) |
| `newIntent` | [`ActionIntent`](ActionIntent.md#actionintent) |

#### Returns

[`IntentChangeConfig`](Callbacks.md#intentchangeconfig) \| `undefined`
