---
hideEditInGitHub: true
---

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
   clientAuthProvider, 
   piipStatus): CCEverywhereBase;
```

Constructor to initialize CCEverywhere object.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `validator` | `BaseValidator` | `undefined` | - |
| `authControllerConstructor` | `AuthControllerConstructor` | `undefined` | - |
| `hostInfo` | [`HostInfo`](../../../../shared/src/types/host-info-types/type-aliases/host-info.md) | `undefined` | client application information - clientId, appName |
| `configParams` | [`ConfigParams`](../../../../shared/src/types/host-info-types/type-aliases/config-params.md) | `undefined` | environment, locale, piipStatus, colorTheme, spectrumTheme, scale |
| `authProvider` | `AuthProvider` | `undefined` | - |
| `clientAuthProvider` | [`ClientAuthProvider`](../../../../shared/src/types/client-authentication-types/interfaces/client-auth-provider.md) | `undefined` | - |
| `piipStatus` | [`PIIPStatus`](../../../../shared/src/types/host-info-types/enumerations/piip-status.md) | `PIIPStatus.OPTED_IN` | - |

#### Returns

`CCEverywhereBase`

## Accessors

### activeInstance

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

## Methods

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
