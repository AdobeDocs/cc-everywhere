---
hideEditInGitHub: true
---

[**cc-everywhere**](../../../../../../index.md)

<HorizontalLine />

# Interface: ConfigParams

The type of config params for 3P.

## See

[ConfigParamsBase](../../../host-info-types/interfaces/config-params-base.md)

## Extends

- [`ConfigParamsBase`](../../../host-info-types/interfaces/config-params-base.md)

## Properties

| Property                   | Type                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Inherited from                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `piipStatus?`              | [`PIIPStatus`](../../../host-info-types/enumerations/piip-status.md)  | Analytics consent status. Controls whether the SDK-owned alloy instance uses `defaultConsent: 'in'` or `'out'` when appending `adobe_mc` to the Express iframe URL. When a page-level `window.alloy` is reused (same org), its existing consent posture is inherited unchanged. Defaults to [PIIPStatus.OPTED_IN](../../../host-info-types/enumerations/piip-status.md#opted_in) when not provided. **See** [PIIPStatus](../../../host-info-types/enumerations/piip-status.md) | -                                                                                                                                                                                              |
| `env?`                     | [`Environment`](../../../host-info-types/enumerations/environment.md) | 1P only                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [`ConfigParamsBase`](../../../host-info-types/interfaces/config-params-base.md).[`env`](../../../host-info-types/interfaces/config-params-base.md#env)                                         |
| `locale?`                  | `string`                                                              | **TJS-pattern** `^[a-z]{2,3}([_-]([A-Za-z]{2,4}))?([_-][A-Z]{2})?$`                                                                                                                                                                                                                                                                                                                                                                                                            | [`ConfigParamsBase`](../../../host-info-types/interfaces/config-params-base.md).[`locale`](../../../host-info-types/interfaces/config-params-base.md#locale)                                   |
| `skipBrowserSupportCheck?` | `boolean`                                                             | **Default** `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                            | [`ConfigParamsBase`](../../../host-info-types/interfaces/config-params-base.md).[`skipBrowserSupportCheck`](../../../host-info-types/interfaces/config-params-base.md#skipbrowsersupportcheck) |
