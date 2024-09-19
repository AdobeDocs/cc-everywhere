[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/types/TargetInfo.types

# shared/src/types/TargetInfo.types

**********************************************************************
  ADOBE CONFIDENTIAL

  Copyright 2022 Adobe
  All Rights Reserved.

  NOTICE:  All information contained herein is, and remains
  the property of Adobe and its suppliers, if any. The intellectual
  and technical concepts contained herein are proprietary to Adobe
  and its suppliers and are protected by all applicable intellectual
  property laws, including trade secret and copyright laws.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe.
  
************************************************************************

## Enumerations

### Target

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `EDITOR` | `"EDITOR"` |
| `QUICK_ACTION` | `"QUICK_ACTION"` |

## Interfaces

### TargetInfo

The information of target application (for eg : CCX) which host can open in the browser.
If the host is desktop application, it should perform jump (IMS) to the provided url for SSO,
so that user doesn't need to perform a manual sign in.

#### Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| `clientId` | `string` | Client id of the application to navigate to. |
| `url` | `URL` | URL of the application to navigate to. |

## Type Aliases

### TargetsConfig

```ts
type TargetsConfig: object;
```

#### Type declaration

| Name | Type |
| ------ | ------ |
| `base` | `Record`\<[`Target`](TargetInfo.md#target), `string`\> |
