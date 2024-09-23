[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / [sdk/src/CCEverywhereBase](../index.md) / CCEverywhereBase

# Class: `abstract` CCEverywhereBase

Class to create CCEverywhere object.

## Extended by

- [`CCEverywhere`](../../3p/CCEverywhere/classes/CCEverywhere.md)

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
   authProvider): CCEverywhereBase
```

Constructor to initialize CCEverywhere object.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `validator` | `BaseValidator` | - |
| `authControllerConstructor` | [`AuthControllerConstructor`](../../auth/AuthController.types/type-aliases/AuthControllerConstructor.md) | - |
| `hostInfo` | [`HostInfo`](../../../../shared/src/types/HostInfo.types/type-aliases/HostInfo.md) | client application information - clientId, appName |
| `configParams` | [`ConfigParams`](../../../../shared/src/types/HostInfo.types/type-aliases/ConfigParams.md) | environment, locale, piipStatus, colorTheme, spectrumTheme, scale |
| `authProvider` | [`AuthProvider`](../../auth/AuthController.types/interfaces/AuthProvider.md) | - |

#### Returns

[`CCEverywhereBase`](CCEverywhereBase.md)

## Accessors

### activeInstance

```ts
set static activeInstance(instance): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| [`CCEverywhereBase`](CCEverywhereBase.md) |

## Methods

### close()

```ts
close(): boolean
```

Closes any active design in progress.

#### Returns

`boolean`

boolean value indicating whether the close operation was successful or not.
