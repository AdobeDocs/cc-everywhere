[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ConfigParamsBase

Params to configure the application.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `env?` | [`Environment`](../enumerations/environment.md) | 1P only |
| `locale?` | `string` | **TJS-pattern** ^[a-z]{2,3}([_-]([A-Za-z]{2,4}))?([_-][A-Z]{2})?$ |
| `skipBrowserSupportCheck?` | `boolean` | **Default** `false` |
