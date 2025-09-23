[**cc-everywhere**](../../../../../index.md)

***

# Interface: IntentChangeEventData

## Extends

- [`HostEventData`](host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | [`INTENT_CHANGED`](../../message-data-types/enumerations/host-event-type.md#intent_changed) | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).[`type`](../../message-data-types/interfaces/host-event-data.md#type) |
| `data` | `object` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).[`data`](../../message-data-types/interfaces/host-event-data.md#data) |
| `data.oldIntent` | [`ActionIntent`](../../../types/action-intent-types/type-aliases/action-intent.md) | - |
| `data.newIntent` | [`ActionIntent`](../../../types/action-intent-types/type-aliases/action-intent.md) | - |
| `data.targetUrl?` | `string` | - |
| `data.intentChangeTimestamp?` | `number` | - |
