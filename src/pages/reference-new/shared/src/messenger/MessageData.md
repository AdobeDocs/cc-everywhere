[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/messenger/MessageData.types

# shared/src/messenger/MessageData.types

## Enumerations

### HostEventType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `LOGIN_COMPLETE` | `"LOGIN_COMPLETE"` |
| `INTENT_CHANGED` | `"INTENT_CHANGED"` |
| `UPDATE_CLOSE_BUTTON` | `"UPDATE_CLOSE_BUTTON"` |
| `TEMPLATE_BATCH_LOADED` | `"TEMPLATE_BATCH_LOADED"` |
| `MEDIA_BATCH_LOADED` | `"MEDIA_BATCH_LOADED"` |
| `ELEMENT_BATCH_LOADED` | `"ELEMENT_BATCH_LOADED"` |
| `URL_INFO` | `"URL_INFO"` |
| `EXPORT_INFO` | `"EXPORT_INFO"` |
| `DOWNLOAD_COMPLETE` | `"DOWNLOAD_COMPLETE"` |
| `ASSET_LOAD_STARTED` | `"ASSET_LOAD_STARTED"` |
| `ASSET_LOADED` | `"ASSET_LOADED"` |
| `ALL_CONTENT_LOADED` | `"ALL_CONTENT_LOADED"` |
| `DOCUMENT_LOADED_AND_WRITABLE` | `"DOCUMENT_LOADED_AND_WRITABLE"` |

## Interfaces

### MessageData

#### Extended by

- [`HostEventData`](MessageData.md#hosteventdata)

***

### HostEventData

#### Extends

- [`MessageData`](MessageData.md#messagedata)

#### Extended by

- [`IntentChangeEventData`](MessageData.md#intentchangeeventdata)
- [`UpdateCloseButtonEventData`](MessageData.md#updateclosebuttoneventdata)
- [`URLInfoEventData`](MessageData.md#urlinfoeventdata)
- [`ExportInfoEventData`](MessageData.md#exportinfoeventdata)
- [`DownloadCompleteEventData`](MessageData.md#downloadcompleteeventdata)

#### Properties

| Property | Type |
| ------ | ------ |
| `type` | [`HostEventType`](MessageData.md#hosteventtype) |
| `data?` | `unknown` |

***

### IntentChangeEventData

#### Extends

- [`HostEventData`](MessageData.md#hosteventdata)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `INTENT_CHANGED` | [`HostEventData`](MessageData.md#hosteventdata).`type` |
| `data` | `object` | [`HostEventData`](MessageData.md#hosteventdata).`data` |
| `data.oldIntent` | [`ActionIntent`](../types/ActionIntent.md#actionintent) | - |
| `data.newIntent` | [`ActionIntent`](../types/ActionIntent.md#actionintent) | - |
| `data.targetUrl?` | `string` | - |

***

### UpdateCloseButtonEventData

#### Extends

- [`HostEventData`](MessageData.md#hosteventdata)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `UPDATE_CLOSE_BUTTON` | [`HostEventData`](MessageData.md#hosteventdata).`type` |
| `data` | `object` | [`HostEventData`](MessageData.md#hosteventdata).`data` |
| `data.showCloseButton` | `boolean` | - |

***

### URLInfoEventData

#### Extends

- [`HostEventData`](MessageData.md#hosteventdata)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `URL_INFO` | [`HostEventData`](MessageData.md#hosteventdata).`type` |
| `data` | `object` | [`HostEventData`](MessageData.md#hosteventdata).`data` |
| `data.url` | `string` | - |

***

### ExportInfoEventData

#### Extends

- [`HostEventData`](MessageData.md#hosteventdata)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `EXPORT_INFO` | [`HostEventData`](MessageData.md#hosteventdata).`type` |
| `data` | `object` | [`HostEventData`](MessageData.md#hosteventdata).`data` |
| `data.buttonId` | `string` | - |
| `data.targetInfo?` | [`AssetTargetInfo`](../types/PublishParams.md#assettargetinfo) | - |

***

### DownloadCompleteEventData

#### Extends

- [`HostEventData`](MessageData.md#hosteventdata)

#### Properties

| Property | Type | Overrides |
| ------ | ------ | ------ |
| `type` | `DOWNLOAD_COMPLETE` | [`HostEventData`](MessageData.md#hosteventdata).`type` |
| `data` | `object` | [`HostEventData`](MessageData.md#hosteventdata).`data` |
| `data.closeContainer` | `boolean` | - |
