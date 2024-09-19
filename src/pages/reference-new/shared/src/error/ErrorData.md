[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/error/ErrorData

# shared/src/error/ErrorData

## Interfaces

### ErrorData\<T\>

**********************************************************************

ADOBE CONFIDENTIAL
___________________

 Copyright 2021 Adobe
 All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe and its suppliers, if any. The intellectual
and technical concepts contained herein are proprietary to Adobe
and its suppliers and are protected by all applicable intellectual
property laws, including trade secret and copyright laws.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe.
************************************************************************

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

| Property | Type |
| ------ | ------ |
| `code` | `T` |
| `message` | `string` |
| `subError?` | `string` \| `number` \| `Error` |
| `customData?` | `unknown` |
| `stack?` | `string` |
