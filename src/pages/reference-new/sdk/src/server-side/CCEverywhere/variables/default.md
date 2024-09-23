[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/server-side/CCEverywhere](../index.md) / default

# Variable: default

```ts
default: object;
```

## Type declaration

### initialize()

```ts
initialize: (hostInfo, configParams?, callbacks?) => Promise<CCEverywhere>;
```

This is the main API which is used for initializing the SDK.
Please ensure to call this API only once.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostInfo` | [`HostInfo`](../../../../../shared/src/types/HostInfo.types/type-aliases/HostInfo.md) |  |
| `configParams`? | [`ConfigParamsBase`](../../../../../shared/src/types/HostInfo.types/interfaces/ConfigParamsBase.md) |  |
| `callbacks`? | [`Callbacks`](../../../../../shared/src/types/Callbacks.types/interfaces/Callbacks.md) | - |

#### Returns

`Promise`\<[`CCEverywhere`](../classes/CCEverywhere.md)\>

Promise with CCEverywhere object which can be used to call other APIs of SDK.
