[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/messenger/Protocol.types

# shared/src/messenger/Protocol.types

## Enumerations

### ProtocolVersion

**********************************************************************
  ADOBE CONFIDENTIAL

  Copyright 2024 Adobe
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

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `V1_0` | `"1.0"` |
| `V1_1` | `"1.1"` |
| `V1_2` | `"1.2"` |
| `V1_3` | `"1.3"` |
| `V1_4` | `"1.4"` |

## Interfaces

### ProtocolHandlersModule

#### Methods

##### handleMessage()

```ts
handleMessage(
   message, 
   sourceVersion, 
   targetVersion): unknown
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `unknown` |
| `sourceVersion` | [`ProtocolVersion`](Protocol.md#protocolversion) |
| `targetVersion` | [`ProtocolVersion`](Protocol.md#protocolversion) |

###### Returns

`unknown`

## Variables

### CURRENT\_PROTOCOL\_VERSION

```ts
const CURRENT_PROTOCOL_VERSION: V1_4 = ProtocolVersion.V1_4;
```

***

### EARLIEST\_PROTOCOL\_VERSION

```ts
const EARLIEST_PROTOCOL_VERSION: V1_0 = ProtocolVersion.V1_0;
```

***

### NEXT\_PROTOCOL\_VERSION

```ts
const NEXT_PROTOCOL_VERSION: Record<ProtocolVersion, ProtocolVersion>;
```

***

### PREVIOUS\_PROTOCOL\_VERSION

```ts
const PREVIOUS_PROTOCOL_VERSION: Record<ProtocolVersion, ProtocolVersion>;
```
