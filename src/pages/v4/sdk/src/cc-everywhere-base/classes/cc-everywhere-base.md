# Class: `abstract` CCEverywhereBase

Class to create CCEverywhere object.

## Extended by

- [`CCEverywhere`](../../3p/cc-everywhere/classes/cc-everywhere.md)

## Implements

- `RequestIdUpdateListener`

## Constructors

### new CCEverywhereBase()

```ts
new CCEverywhereBase(
   validator, 
   authControllerConstructor, 
   hostInfo, 
   configParams, 
   authProvider, 
   clientAuthProvider): CCEverywhereBase
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

[`CCEverywhereBase`](../../cc-everywhere-base/classes/cc-everywhere-base.md)

## Accessors

### activeInstance

```ts
set static activeInstance(instance): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| [`CCEverywhereBase`](../../cc-everywhere-base/classes/cc-everywhere-base.md) |

## Methods

### close()

```ts
close(): boolean
```

Closes any active design in progress.

#### Returns

`boolean`

boolean value indicating whether the close operation was successful or not.
