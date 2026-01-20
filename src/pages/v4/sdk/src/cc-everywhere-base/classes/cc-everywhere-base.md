[**cc-everywhere**](../../../../index.md)

<HorizontalLine />

# Abstract Class: CCEverywhereBase

Class to create CCEverywhere object.

## Extended by

- [`CCEverywhere`](../../3p/cc-everywhere/classes/cc-everywhere.md)

## Implements

- `RequestIdUpdateListener`

## Constructors

### Constructor

```ts
new CCEverywhereBase(
   validator, 
   authControllerConstructor, 
   hostInfo, 
   configParams, 
   authProvider, 
   clientAuthProvider): CCEverywhereBase;
```

Constructor to initialize CCEverywhere object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `validator` | `BaseValidator` | - |
| `authControllerConstructor` | `AuthControllerConstructor` | - |
| `hostInfo` | [`HostInfo`](../../../../shared/src/types/host-info-types/type-aliases/host-info.md) | client application information - clientId, appName |
| `configParams` | [`ConfigParams`](../../../../shared/src/types/host-info-types/type-aliases/config-params.md) | environment, locale, piipStatus, colorTheme, spectrumTheme, scale |
| `authProvider` | `AuthProvider` | - |
| `clientAuthProvider` | [`ClientAuthProvider`](../../../../shared/src/types/client-authentication-types/interfaces/client-auth-provider.md) | - |

#### Returns

`CCEverywhereBase`

## Accessors

### activeInstance

#### Get Signature

```ts
get static activeInstance(): CCEverywhereBase | undefined;
```

##### Returns

`CCEverywhereBase` \| `undefined`

#### Set Signature

```ts
set static activeInstance(instance): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `CCEverywhereBase` \| `undefined` |

##### Returns

`void`

<HorizontalLine />

### state

#### Get Signature

```ts
get static state(): State;
```

##### Returns

[`State`](../../types/cc-everywhere-types/enumerations/state.md)

#### Set Signature

```ts
set static state(value): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`State`](../../types/cc-everywhere-types/enumerations/state.md) |

##### Returns

`void`

<HorizontalLine />

### version

#### Get Signature

```ts
get version(): string;
```

Get version of SDK

##### Returns

`string`

## Methods

### terminate()

```ts
terminate(): void;
```

Method to un-initialize cceverywhere object

#### Returns

`void`

### close()

```ts
close(showConfirmationDialog?): 
  | boolean
| Promise<CloseStatusMessage>;
```

Closes any active design in progress.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `showConfirmationDialog?` | `boolean` | boolean value indicating whether to show confirmation dialog or not. |

#### Returns

  \| `boolean`
  \| `Promise`&lt;[`CloseStatusMessage`](../../../../shared/src/messenger/message-types/interfaces/close-status-message.md)&gt;

boolean value indicating whether the close operation was successful or not.

<HorizontalLine />

### onRequestIdUpdate()

```ts
onRequestIdUpdate(requestId): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `requestId` | `string` |

#### Returns

`void`

#### Implementation of

```ts
RequestIdUpdateListener.onRequestIdUpdate
```
