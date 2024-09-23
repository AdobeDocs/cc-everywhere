[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/3p/CCEverywhere](../index.md) / default

# Variable: default

```ts
default: object;
```

## Type declaration

### initialize()

```ts
initialize: (hostInfo, configParams?, authOption?) => Promise<CCEverywhere>;
```

This is the main API which is used for initializing the SDK.
Please ensure to call this API only once.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostInfo` | [`HostInfoSpecifiedBase`](../../../../../shared/src/types/HostInfo.types/interfaces/HostInfoSpecifiedBase.md) |  |
| `configParams`? | [`ConfigParamsBase`](../../../../../shared/src/types/HostInfo.types/interfaces/ConfigParamsBase.md) |  |
| `authOption`? | [`AuthOption`](../../../../../shared/src/types/Authentication.types/type-aliases/AuthOption.md) | authentication configuration |

#### Returns

`Promise`\<[`CCEverywhere`](../classes/CCEverywhere.md)\>

Promise with CCEverywhere object which can be used to call other APIs of SDK.

### terminate()

```ts
terminate: () => boolean;
```

Terminates the active instance of CCEverywhere.
This method will return false if there is no active CCEverywhere instance.

#### Returns

`boolean`

true on successful termination
