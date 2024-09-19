[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/analytics/AnalyticsManager.types

# sdk/src/analytics/AnalyticsManager.types

## Enumerations

### AnalyticsWorkflow

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `WARMUP` | `"WARMUP"` |
| `CREATE_DESIGN` | `"CREATE_DESIGN"` |
| `EDIT_DESIGN` | `"EDIT_DESIGN"` |
| `QUICK_ACTION` | `"QUICK_ACTION"` |
| `MODULES` | `"MODULES"` |
| `LOAD` | `"LOAD"` |

***

### AnalyticsWorkflowStage

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| `Start` | `"Start"` |
| `Success` | `"Success"` |
| `Error` | `"Error"` |
| `Cancel` | `"Cancel"` |

## Interfaces

### AnalyticsWorkflowStackState

#### Properties

| Property | Type |
| ------ | ------ |
| `workflow` | [`AnalyticsWorkflow`](AnalyticsManager.md#analyticsworkflow) |
| `workflowStage` | [`AnalyticsWorkflowStage`](AnalyticsManager.md#analyticsworkflowstage) |
| `startTime` | `number` |
| `event?` | [`StartEvent`](../../../shared/src/analytics/Event.md#startevent) |

## Type Aliases

### AnalyticsCallback()

```ts
type AnalyticsCallback: (event) => AnalyticsStageEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`BaseEvent`](../../../shared/src/analytics/Event.md#baseevent) |

#### Returns

[`AnalyticsStageEvent`](../../../shared/src/analytics/Event.md#analyticsstageevent)

***

### AnalyticsWorkflowStageParamPair

```ts
type AnalyticsWorkflowStageParamPair: [AnalyticsWorkflowStage.Start, void] | [AnalyticsWorkflowStage.Success, PublishParams] | [AnalyticsWorkflowStage.Cancel, CancelReason | ContainerCloseReason] | [AnalyticsWorkflowStage.Error, CCEverywhereError<ErrorCode>];
```
