# Interface: ExportInfoEventData

## Extends

- [`HostEventData`](../../message-data-types/interfaces/host-event-data.md)

## Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `EXPORT_INFO` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).`type` |
| `data` | `object` | [`HostEventData`](../../message-data-types/interfaces/host-event-data.md).`data` |
| `data.buttonId` | `string` | - |
| `data.targetInfo?` | [`AssetTargetInfo`](../../../types/publish-params-types/interfaces/asset-target-info.md) | - |
