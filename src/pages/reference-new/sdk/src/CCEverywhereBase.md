[**cc-everywhere**](../../index.md) • **Docs**

***

[cc-everywhere](../../index.md) / sdk/src/CCEverywhereBase

# sdk/src/CCEverywhereBase

## Classes

### `abstract` CCEverywhereBase

Class to create CCEverywhere object.

#### Extended by

- [`CCEverywhere`](3p/CCEverywhere.md#cceverywhere)

#### Implements

- `RequestIdUpdateListener`

#### Constructors

##### new CCEverywhereBase()

```ts
new CCEverywhereBase(
   validator, 
   authControllerConstructor, 
   hostInfo, 
   configParams, 
   authProvider): CCEverywhereBase
```

Constructor to initialize CCEverywhere object.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `validator` | `BaseValidator` | - |
| `authControllerConstructor` | [`AuthControllerConstructor`](auth/AuthController.md#authcontrollerconstructor) | - |
| `hostInfo` | [`HostInfo`](../../shared/src/types/HostInfo.md#hostinfo) | client application information - clientId, appName |
| `configParams` | [`ConfigParams`](../../shared/src/types/HostInfo.md#configparams) | environment, locale, piipStatus, colorTheme, spectrumTheme, scale |
| `authProvider` | [`AuthProvider`](auth/AuthController.md#authprovider) | - |

###### Returns

[`CCEverywhereBase`](CCEverywhereBase.md#cceverywherebase)

#### Accessors

##### activeInstance

```ts
set static activeInstance(instance): void
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `instance` | `undefined` \| [`CCEverywhereBase`](CCEverywhereBase.md#cceverywherebase) |

#### Methods

##### close()

```ts
close(): boolean
```

Closes any active design in progress.

###### Returns

`boolean`

boolean value indicating whether the close operation was successful or not.
