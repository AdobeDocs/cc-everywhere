# Interface: PreSignedInAuthConfig

## Extended by

- [`IMSAuthConfig`](IMSauth-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](../../HostInfo.types/enumerations/PIIPstatus.md) | Represents whether analytics are sent. By default analytics are sent. |
| `userId?` | `string` | IMS userId Needed to avoid check token failure in scenarios with multiple profiles, enabling IMS to identify which profile is already signed in |
