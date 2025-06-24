[**cc-everywhere**](../../../../../index.md)

***

# Interface: TargetInfo

The information of target application (for eg : CCX) which host can open in the browser.
If the host is desktop application, it should perform jump (IMS) to the provided url for SSO,
so that user doesn't need to perform a manual sign in.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="clientid"></a> `clientId` | `string` | Client id of the application to navigate to. |
| <a id="url"></a> `url` | `URL` | URL of the application to navigate to. |
