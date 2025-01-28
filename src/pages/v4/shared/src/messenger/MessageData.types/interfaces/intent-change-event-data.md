# Interface: IntentChangeEventData

## Extends

- [`HostEventData`](host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `INTENT_CHANGED` | [`HostEventData`](host-event-data.md).`type` |
| `data` | `object` | [`HostEventData`](host-event-data.md).`data` |
| `data.oldIntent` | [`ActionIntent`](../../../types/ActionIntent.types/type-aliases/action-intent.md) | - |
| `data.newIntent` | [`ActionIntent`](../../../types/ActionIntent.types/type-aliases/action-intent.md) | - |
| `data.targetUrl?` | `string` | - |
