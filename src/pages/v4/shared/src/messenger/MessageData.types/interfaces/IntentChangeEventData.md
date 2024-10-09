# Interface: IntentChangeEventData

## Extends

- [`HostEventData`](HostEventData.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `INTENT_CHANGED` | [`HostEventData`](HostEventData.md).`type` |
| `data` | `object` | [`HostEventData`](HostEventData.md).`data` |
| `data.oldIntent` | [`ActionIntent`](../../../types/ActionIntent.types/type-aliases/ActionIntent.md) | - |
| `data.newIntent` | [`ActionIntent`](../../../types/ActionIntent.types/type-aliases/ActionIntent.md) | - |
| `data.targetUrl?` | `string` | - |
