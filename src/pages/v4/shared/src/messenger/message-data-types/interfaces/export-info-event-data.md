[**cc-everywhere**](../../../../../index.md)

***

# Interface: ExportInfoEventData

## Extends

- [`HostEventData`](../../message-data-types/interfaces/host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| <a id="type"></a> `type` | [`EXPORT_INFO`](../../message-data-types/enumerations/host-event-type.md#export_info) | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).[`type`](../../message-data-types/interfaces/host-event-data.md#type) |
| <a id="data"></a> `data` | `object` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).[`data`](../../message-data-types/interfaces/host-event-data.md#data) |
| `data.buttonId` | `string` | - |
| `data.targetInfo?` | [`AssetTargetInfo`](../../../types/publish-params-types/interfaces/asset-target-info.md) | - |
