[**cc-everywhere**](../../../../index.md)

***

# Class: `abstract` CCEverywhereBase

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
get static activeInstance(): undefined | CCEverywhereBase;
```

##### Hidden

-- hide from typedocs

##### Returns

`undefined` \| `CCEverywhereBase`

#### Set Signature

```ts
set static activeInstance(instance): void;
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| `CCEverywhereBase` |

##### Returns

`void`

***

### state

#### Get Signature

```ts
get static state(): State;
```

##### Hidden

-- hide from typedocs

##### Returns

[`State`](../../types/cc-everywhere-types/enumerations/state.md)

#### Set Signature

```ts
set static state(value): void;
```

##### Hidden

-- hide from typedocs

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`State`](../../types/cc-everywhere-types/enumerations/state.md) |

##### Returns

`void`

***

### version

#### Get Signature

```ts
get version(): string;
```

Get version of SDK

##### Hidden

-- hide from typedocs

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

#### Hidden

-- hide from typedocs

***

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
  \| `Promise`<[`CloseStatusMessage`](../../../../shared/src/messenger/message-types/interfaces/close-status-message.md)\>

boolean value indicating whether the close operation was successful or not.

***

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

#### Hidden

-- hide from typedocs

#### Implementation of

```ts
RequestIdUpdateListener.onRequestIdUpdate
```
