[**cc-everywhere**](../../../../../index.md)

***

# Interface: ConfigParamsBase

Params to configure the application.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="env"></a> `env?` | [`Environment`](../../host-info-types/enumerations/environment.md) | 1P only |
| <a id="locale"></a> `locale?` | `string` | **TJS-pattern** ^[a-z]{2}([_-]([A-Za-z]{2,4}))?([_-][A-Z]{2})?$ |
| <a id="skipbrowsersupportcheck"></a> `skipBrowserSupportCheck?` | `boolean` | **Default** `false` |
