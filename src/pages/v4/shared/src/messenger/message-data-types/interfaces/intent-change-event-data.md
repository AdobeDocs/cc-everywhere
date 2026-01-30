---
hideEditInGithub: true
---

[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: IntentChangeEventData

## Extends

- [`HostEventData`](host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | [`INTENT_CHANGED`](../enumerations/host-event-type.md#intent_changed) | [`HostEventData`](host-event-data.md).[`type`](host-event-data.md#type) |
| `data` | `object` | [`HostEventData`](host-event-data.md).[`data`](host-event-data.md#data) |
| `data.oldIntent` | [`ActionIntent`](../../../types/action-intent-types/type-aliases/action-intent.md) | - |
| `data.newIntent` | [`ActionIntent`](../../../types/action-intent-types/type-aliases/action-intent.md) | - |
| `data.targetUrl?` | `string` | - |
| `data.intentChangeTimestamp?` | `number` | - |
