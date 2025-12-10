[**cc-everywhere**](../../../../../index.md)

<HorizontalLine />

# Interface: ExportInfoEventData

## Extends

- [`HostEventData`](host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | [`EXPORT_INFO`](../enumerations/host-event-type.md#export_info) | [`HostEventData`](host-event-data.md).[`type`](host-event-data.md#type) |
| `data` | `object` | [`HostEventData`](host-event-data.md).[`data`](host-event-data.md#data) |
| `data.buttonId` | `string` | - |
| `data.targetInfo?` | [`AssetTargetInfo`](../../../types/publish-params-types/interfaces/asset-target-info.md) | - |
