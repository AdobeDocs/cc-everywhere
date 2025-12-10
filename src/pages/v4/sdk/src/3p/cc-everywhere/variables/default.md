[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Variable: default

```ts
default: object;
```

## Type declaration

### initialize()

```ts
initialize: (hostInfo, configParams?, authOption?, clientAuthProvider?) => Promise<CCEverywhere>;
```

This is the main API which is used for initializing the SDK.
Please ensure to call this API only once.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hostInfo` | [`HostInfo`](../../../../../shared/src/types/host-info-types/type-aliases/host-info.md) |  |
| `configParams?` | [`ConfigParamsBase`](../../../../../shared/src/types/host-info-types/interfaces/config-params-base.md) |  |
| `authOption?` | [`AuthOption`](../../../../../shared/src/types/authentication-types/type-aliases/auth-option.md) | authentication configuration |
| `clientAuthProvider?` | [`ClientAuthProvider`](../../../../../shared/src/types/client-authentication-types/interfaces/client-auth-provider.md) | client authentication provider for fetching client authentication details. |

#### Returns

`Promise`&lt; [`CCEverywhere`](../classes/cc-everywhere.md) &gt;

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
