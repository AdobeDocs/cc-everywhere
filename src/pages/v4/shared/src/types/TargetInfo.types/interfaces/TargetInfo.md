[cc-everywhere](../../../../../index.md) / [shared/src/types/TargetInfo.types](../index.md) / TargetInfo

# Interface: TargetInfo

The information of target application (for eg : CCX) which host can open in the browser.
If the host is desktop application, it should perform jump (IMS) to the provided url for SSO,
so that user doesn't need to perform a manual sign in.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | Client id of the application to navigate to. |
| `url` | `URL` | URL of the application to navigate to. |
