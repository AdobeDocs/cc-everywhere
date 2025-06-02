# Interface: PreSignedInAuthConfig

## Extended by

- [`IMSAuthConfig`](../../authentication-types/interfaces/ims-auth-config.md)

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `piipStatus?` | [`PIIPStatus`](../../host-info-types/enumerations/piip-status.md) | Represents whether analytics are sent. By default analytics are sent. |
| `userId?` | `string` | IMS userId Needed to avoid check token failure in scenarios with multiple profiles, enabling IMS to identify which profile is already signed in |
