# Interface: IntentChangeEventData

## Extends

- [`HostEventData`](../host-event-data/index.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `INTENT_CHANGED` | [`HostEventData`](../host-event-data/index.md).`type` |
| `data` | `object` | [`HostEventData`](../host-event-data/index.md).`data` |
| `data.oldIntent` | [`ActionIntent`](../../../../types/ActionIntent.types/type-aliases/action-intent/index.md) | - |
| `data.newIntent` | [`ActionIntent`](../../../../types/ActionIntent.types/type-aliases/action-intent/index.md) | - |
| `data.targetUrl?` | `string` | - |
