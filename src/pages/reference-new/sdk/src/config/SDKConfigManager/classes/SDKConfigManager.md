[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/config/SDKConfigManager](../index.md) / SDKConfigManager

# Class: SDKConfigManager

## Extends

- `ConfigManager`

## Constructors

### new SDKConfigManager()

```ts
new SDKConfigManager(): SDKConfigManager
```

#### Returns

[`SDKConfigManager`](SDKConfigManager.md)

#### Inherited from

`ConfigManager.constructor`

## Methods

### setEnvironmentConfig()

```ts
static setEnvironmentConfig(env, isFirstParty): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `env` | [`Environment`](../../../../../shared/src/types/HostInfo.types/enumerations/Environment.md) |
| `isFirstParty` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`ConfigManager.setEnvironmentConfig`
