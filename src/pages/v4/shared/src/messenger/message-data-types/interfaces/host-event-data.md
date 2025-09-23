[**cc-everywhere**](../../../../../index.md)

***

# Interface: HostEventData

## Extends

- [`MessageData`](message-data.md)

## Extended by

- [`CustomHostEventData`](../../message-data-types/interfaces/custom-host-event-data.md)
- [`IntentChangeEventData`](../../message-data-types/interfaces/intent-change-event-data.md)
- [`UpdateCloseButtonEventData`](../../message-data-types/interfaces/update-close-button-event-data.md)
- [`URLInfoEventData`](../../message-data-types/interfaces/url-info-event-data.md)
- [`ExportInfoEventData`](../../message-data-types/interfaces/export-info-event-data.md)
- [`DownloadCompleteEventData`](../../message-data-types/interfaces/download-complete-event-data.md)

## Properties

| Property | Type |
| ------ | ------ |
| `type` | [`HostEventType`](../enumerations/host-event-type.md) |
| `data?` | `unknown` |
