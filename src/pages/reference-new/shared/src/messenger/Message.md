[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/messenger/Message.types

# shared/src/messenger/Message.types

## Enumerations

### Status

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `SUCCESS` | `"SUCCESS"` |
| `FAILURE` | `"FAILURE"` |

***

### LoadStatus

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `SUCCESS` | `"SUCCESS"` |
| `FAILURE` | `"FAILURE"` |

***

### CancelReason

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `USER` | `"USER"` |
| `OTHER` | `"OTHER"` |

***

### MessageType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `WILL_TARGET_LOAD` | `"WILL_TARGET_LOAD"` |
| `DID_TARGET_LOAD` | `"DID_TARGET_LOAD"` |
| `WILL_PUBLISH` | `"WILL_PUBLISH"` |
| `DID_PUBLISH` | `"DID_PUBLISH"` |
| `CANCEL` | `"CANCEL"` |
| `ERROR` | `"ERROR"` |
| `DID_COMPLETE` | `"DID_COMPLETE"` |
| `LOGIN_COMPLETE` | `"LOGIN_COMPLETE"` |
| `LOGIN_REQUEST` | `"LOGIN_REQUEST"` |
| `TOKEN_REQUEST` | `"TOKEN_REQUEST"` |
| `TOKEN_RESPONSE` | `"TOKEN_RESPONSE"` |
| `PARAMS_REQUEST` | `"PARAMS_REQUEST"` |
| `PARAMS_RESPONSE` | `"PARAMS_RESPONSE"` |
| `EVENT` | `"EVENT"` |

## Interfaces

### MessageDataMap

#### Properties

| Property | Type |
| ------ | ------ |
| `DID_TARGET_LOAD` | `object` \| `object` |
| `DID_PUBLISH` | [`PublishParams`](../types/PublishParams.md#publishparams) |
| `CANCEL` | [`CancelMessage`](Message.md#cancelmessage) |
| `TOKEN_RESPONSE` | [`TokenResponseMessage`](Message.md#tokenresponsemessage) |
| `PARAMS_RESPONSE` | [`ParamsResponseMessage`](Message.md#paramsresponsemessage) |
| `EVENT` | [`HostEventData`](MessageData.md#hosteventdata) |
| `ERROR` | [`ErrorData`](../error/ErrorData.md#errordatat)\<`string`\> |

***

### CancelMessage

#### Properties

| Property | Type |
| ------ | ------ |
| `reason` | [`CancelReason`](Message.md#cancelreason) |

***

### TokenResponseMessage

#### Properties

| Property | Type |
| ------ | ------ |
| `status` | [`Status`](Message.md#status) |
| `token` | `null` \| `string` |
| `userId` | `null` \| `string` |
| `type` | `string` |

***

### ParamsResponseMessage

#### Properties

| Property | Type |
| ------ | ------ |
| `status` | [`Status`](Message.md#status) |
| `intent` | [`ActionIntent`](../types/ActionIntent.md#actionintent) |
| `hostInfo` | [`HostInfoSpecified`](../types/HostInfo.md#hostinfospecified) |
| `authOption` | [`AuthOption`](../types/Authentication.md#authoption) |
| `designConfig` | [`DesignConfig`](../types/DesignConfig.md#designconfig) |
| `configParams` | [`ConfigParams`](../types/HostInfo.md#configparams) |
| `featureFlags` | [`FeatureFlags`](../types/FeatureFlags.md#featureflags) |
| `requestId?` | `string` |
| `visitorId?` | `string` |

## Type Aliases

### DataMessageType

```ts
type DataMessageType: 
  | MessageType.DID_TARGET_LOAD
  | MessageType.DID_PUBLISH
  | MessageType.CANCEL
  | MessageType.TOKEN_RESPONSE
  | MessageType.PARAMS_RESPONSE
  | MessageType.EVENT
  | MessageType.ERROR;
```

***

### SimpleMessageType

```ts
type SimpleMessageType: Exclude<MessageType, DataMessageType>;
```

***

### Message\<T\>

```ts
type Message<T>: T extends DataMessageType ? object : object;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \`$\{MessageType\}\` |

***

### MessageCompat\<T\>

```ts
type MessageCompat<T>: object;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \`$\{MessageType\}\` |

#### Type declaration

| Name | Type |
| ------ | ------ |
| `type` | `T` |
| `data`? | `unknown` |

***

### DidTargetLoadMessage\<T\>

```ts
type DidTargetLoadMessage<T>: T extends LoadStatus.FAILURE ? object : object;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \`$\{LoadStatus\}\` |
