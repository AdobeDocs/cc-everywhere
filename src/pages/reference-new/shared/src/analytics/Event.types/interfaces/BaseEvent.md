[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [shared/src/analytics/Event.types](../index.md) / BaseEvent

# Interface: BaseEvent

## Extends

- [`Event`](Event.md)

## Extended by

- [`StartEvent`](StartEvent.md)
- [`SuccessEvent`](SuccessEvent.md)
- [`ErrorEvent`](ErrorEvent.md)
- [`CancelEvent`](CancelEvent.md)

## Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `workflow` | `string` | - | [`Event`](Event.md).`workflow` |
| `userGuid?` | `string` | - | [`Event`](Event.md).`userGuid` |
| `visitorGuid?` | `string` | - | [`Event`](Event.md).`visitorGuid` |
| `requestGuid?` | `string` | - | [`Event`](Event.md).`requestGuid` |
| `serviceCode?` | `string` | - | [`Event`](Event.md).`serviceCode` |
| `serviceLevel?` | `string` | - | [`Event`](Event.md).`serviceLevel` |
| `contentCategory?` | `string` | - | [`Event`](Event.md).`contentCategory` |
| `contentName?` | `string` | - | [`Event`](Event.md).`contentName` |
| `perfActionId?` | `string` | - | [`Event`](Event.md).`perfActionId` |
| `perfActionDuration?` | `number` | - | [`Event`](Event.md).`perfActionDuration` |
| `subcategory` | `string` | [`Event`](Event.md).`subcategory` | - |
| `type` | `string` | [`Event`](Event.md).`type` | - |
| `subtype` | `string` | [`Event`](Event.md).`subtype` | - |
| `count?` | `number` | - | - |
| `pagename?` | `string` | - | - |
| `jumpFlow?` | `string` | - | - |
| `iframeData?` | `string` | - | - |
