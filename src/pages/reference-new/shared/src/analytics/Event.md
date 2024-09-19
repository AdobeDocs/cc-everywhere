[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / shared/src/analytics/Event.types

# shared/src/analytics/Event.types

## Enumerations

### AnalyticsEvent

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `Debug` | `"Debug"` |

***

### DebugEventType

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `PERFORMANCE` | `"perf"` |
| `AGENT` | `"agent"` |
| `JUMP` | `"jump"` |
| `CONTAINER` | `"container"` |
| `SDK_API` | `"sdk-api"` |
| `ERROR` | `"error"` |

## Interfaces

### Event

#### Extended by

- [`BaseEvent`](Event.md#baseevent)
- [`DebugEvent`](Event.md#debugevent)

#### Properties

| Property | Type |
| ------ | ------ |
| `workflow` | `string` |
| `subcategory?` | `string` |
| `type?` | `string` |
| `subtype?` | `string` |
| `userGuid?` | `string` |
| `visitorGuid?` | `string` |
| `requestGuid?` | `string` |
| `serviceCode?` | `string` |
| `serviceLevel?` | `string` |
| `contentCategory?` | `string` |
| `contentName?` | `string` |
| `perfActionId?` | `string` |
| `perfActionDuration?` | `number` |

***

### BaseEvent

#### Extends

- [`Event`](Event.md#event)

#### Extended by

- [`StartEvent`](Event.md#startevent)
- [`SuccessEvent`](Event.md#successevent)
- [`ErrorEvent`](Event.md#errorevent)
- [`CancelEvent`](Event.md#cancelevent)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `workflow` | `string` | - | [`Event`](Event.md#event).`workflow` |
| `userGuid?` | `string` | - | [`Event`](Event.md#event).`userGuid` |
| `visitorGuid?` | `string` | - | [`Event`](Event.md#event).`visitorGuid` |
| `requestGuid?` | `string` | - | [`Event`](Event.md#event).`requestGuid` |
| `serviceCode?` | `string` | - | [`Event`](Event.md#event).`serviceCode` |
| `serviceLevel?` | `string` | - | [`Event`](Event.md#event).`serviceLevel` |
| `contentCategory?` | `string` | - | [`Event`](Event.md#event).`contentCategory` |
| `contentName?` | `string` | - | [`Event`](Event.md#event).`contentName` |
| `perfActionId?` | `string` | - | [`Event`](Event.md#event).`perfActionId` |
| `perfActionDuration?` | `number` | - | [`Event`](Event.md#event).`perfActionDuration` |
| `subcategory` | `string` | [`Event`](Event.md#event).`subcategory` | - |
| `type` | `string` | [`Event`](Event.md#event).`type` | - |
| `subtype` | `string` | [`Event`](Event.md#event).`subtype` | - |
| `count?` | `number` | - | - |
| `pagename?` | `string` | - | - |
| `jumpFlow?` | `string` | - | - |
| `iframeData?` | `string` | - | - |

***

### StartEvent

#### Extends

- [`BaseEvent`](Event.md#baseevent)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `workflow` | `string` | [`BaseEvent`](Event.md#baseevent).`workflow` |
| `userGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`userGuid` |
| `visitorGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`visitorGuid` |
| `requestGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`requestGuid` |
| `serviceCode?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceCode` |
| `serviceLevel?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceLevel` |
| `contentCategory?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentCategory` |
| `contentName?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentName` |
| `perfActionId?` | `string` | [`BaseEvent`](Event.md#baseevent).`perfActionId` |
| `perfActionDuration?` | `number` | [`BaseEvent`](Event.md#baseevent).`perfActionDuration` |
| `subcategory` | `string` | [`BaseEvent`](Event.md#baseevent).`subcategory` |
| `type` | `string` | [`BaseEvent`](Event.md#baseevent).`type` |
| `subtype` | `string` | [`BaseEvent`](Event.md#baseevent).`subtype` |
| `count?` | `number` | [`BaseEvent`](Event.md#baseevent).`count` |
| `pagename?` | `string` | [`BaseEvent`](Event.md#baseevent).`pagename` |
| `jumpFlow?` | `string` | [`BaseEvent`](Event.md#baseevent).`jumpFlow` |
| `iframeData?` | `string` | [`BaseEvent`](Event.md#baseevent).`iframeData` |
| `contentId?` | `string` | - |
| `contentExtension?` | (`JPEG` \| `PNG` \| `PDF` \| `MP4`)[] | - |

***

### SuccessEvent

#### Extends

- [`BaseEvent`](Event.md#baseevent)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `workflow` | `string` | [`BaseEvent`](Event.md#baseevent).`workflow` |
| `userGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`userGuid` |
| `visitorGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`visitorGuid` |
| `requestGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`requestGuid` |
| `serviceCode?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceCode` |
| `serviceLevel?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceLevel` |
| `contentCategory?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentCategory` |
| `contentName?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentName` |
| `perfActionId?` | `string` | [`BaseEvent`](Event.md#baseevent).`perfActionId` |
| `perfActionDuration?` | `number` | [`BaseEvent`](Event.md#baseevent).`perfActionDuration` |
| `subcategory` | `string` | [`BaseEvent`](Event.md#baseevent).`subcategory` |
| `type` | `string` | [`BaseEvent`](Event.md#baseevent).`type` |
| `subtype` | `string` | [`BaseEvent`](Event.md#baseevent).`subtype` |
| `count?` | `number` | [`BaseEvent`](Event.md#baseevent).`count` |
| `pagename?` | `string` | [`BaseEvent`](Event.md#baseevent).`pagename` |
| `jumpFlow?` | `string` | [`BaseEvent`](Event.md#baseevent).`jumpFlow` |
| `iframeData?` | `string` | [`BaseEvent`](Event.md#baseevent).`iframeData` |
| `contentId?` | `string` | - |
| `contentExtension` | `JPEG` \| `PNG` \| `PDF` \| `MP4` | - |
| `value?` | `number` | - |
| `workflowTime?` | `number` | - |

***

### ErrorEvent

#### Extends

- [`BaseEvent`](Event.md#baseevent)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `workflow` | `string` | [`BaseEvent`](Event.md#baseevent).`workflow` |
| `userGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`userGuid` |
| `visitorGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`visitorGuid` |
| `requestGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`requestGuid` |
| `serviceCode?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceCode` |
| `serviceLevel?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceLevel` |
| `contentCategory?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentCategory` |
| `contentName?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentName` |
| `perfActionId?` | `string` | [`BaseEvent`](Event.md#baseevent).`perfActionId` |
| `perfActionDuration?` | `number` | [`BaseEvent`](Event.md#baseevent).`perfActionDuration` |
| `subcategory` | `string` | [`BaseEvent`](Event.md#baseevent).`subcategory` |
| `type` | `string` | [`BaseEvent`](Event.md#baseevent).`type` |
| `subtype` | `string` | [`BaseEvent`](Event.md#baseevent).`subtype` |
| `count?` | `number` | [`BaseEvent`](Event.md#baseevent).`count` |
| `pagename?` | `string` | [`BaseEvent`](Event.md#baseevent).`pagename` |
| `jumpFlow?` | `string` | [`BaseEvent`](Event.md#baseevent).`jumpFlow` |
| `iframeData?` | `string` | [`BaseEvent`](Event.md#baseevent).`iframeData` |
| `errorCode` | `string` | - |
| `errorDesc` | `string` | - |
| `errorType?` | `string` | - |
| `value?` | `number` | - |
| `workflowTime?` | `number` | - |

***

### CancelEvent

#### Extends

- [`BaseEvent`](Event.md#baseevent)

#### Properties

| Property | Type | Inherited from |
| ------ | ------ | ------ |
| `workflow` | `string` | [`BaseEvent`](Event.md#baseevent).`workflow` |
| `userGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`userGuid` |
| `visitorGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`visitorGuid` |
| `requestGuid?` | `string` | [`BaseEvent`](Event.md#baseevent).`requestGuid` |
| `serviceCode?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceCode` |
| `serviceLevel?` | `string` | [`BaseEvent`](Event.md#baseevent).`serviceLevel` |
| `contentCategory?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentCategory` |
| `contentName?` | `string` | [`BaseEvent`](Event.md#baseevent).`contentName` |
| `perfActionId?` | `string` | [`BaseEvent`](Event.md#baseevent).`perfActionId` |
| `perfActionDuration?` | `number` | [`BaseEvent`](Event.md#baseevent).`perfActionDuration` |
| `subcategory` | `string` | [`BaseEvent`](Event.md#baseevent).`subcategory` |
| `type` | `string` | [`BaseEvent`](Event.md#baseevent).`type` |
| `subtype` | `string` | [`BaseEvent`](Event.md#baseevent).`subtype` |
| `count?` | `number` | [`BaseEvent`](Event.md#baseevent).`count` |
| `pagename?` | `string` | [`BaseEvent`](Event.md#baseevent).`pagename` |
| `jumpFlow?` | `string` | [`BaseEvent`](Event.md#baseevent).`jumpFlow` |
| `iframeData?` | `string` | [`BaseEvent`](Event.md#baseevent).`iframeData` |
| `value` | `string` | - |
| `workflowTime?` | `number` | - |

***

### DebugEvent

#### Extends

- [`Event`](Event.md#event)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| `subcategory?` | `string` | - | [`Event`](Event.md#event).`subcategory` |
| `subtype?` | `string` | - | [`Event`](Event.md#event).`subtype` |
| `userGuid?` | `string` | - | [`Event`](Event.md#event).`userGuid` |
| `visitorGuid?` | `string` | - | [`Event`](Event.md#event).`visitorGuid` |
| `requestGuid?` | `string` | - | [`Event`](Event.md#event).`requestGuid` |
| `serviceCode?` | `string` | - | [`Event`](Event.md#event).`serviceCode` |
| `serviceLevel?` | `string` | - | [`Event`](Event.md#event).`serviceLevel` |
| `contentCategory?` | `string` | - | [`Event`](Event.md#event).`contentCategory` |
| `contentName?` | `string` | - | [`Event`](Event.md#event).`contentName` |
| `perfActionId?` | `string` | - | [`Event`](Event.md#event).`perfActionId` |
| `perfActionDuration?` | `number` | - | [`Event`](Event.md#event).`perfActionDuration` |
| `workflow` | `AnalyticsEvent` | [`Event`](Event.md#event).`workflow` | - |
| `workflowType?` | `string` | - | - |
| `type` | [`DebugEventType`](Event.md#debugeventtype) | [`Event`](Event.md#event).`type` | - |
| `value?` | `string` | - | - |
| `contentAuthor?` | `string` | - | - |
| `contentStatus?` | `string` | - | - |
| `pagename?` | `string` | - | - |

## Type Aliases

### AnalyticsStageEvent

```ts
type AnalyticsStageEvent: StartEvent | SuccessEvent | CancelEvent | ErrorEvent;
```

***

### AnalyticsStageEndEvent

```ts
type AnalyticsStageEndEvent: SuccessEvent | CancelEvent | ErrorEvent;
```
