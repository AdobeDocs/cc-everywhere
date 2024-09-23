[**cc-everywhere**](../../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../../index.md) / [sdk/src/analytics/AnalyticsManager.types](../index.md) / AnalyticsWorkflowStageParamPair

# Type Alias: AnalyticsWorkflowStageParamPair

```ts
type AnalyticsWorkflowStageParamPair: [AnalyticsWorkflowStage.Start, void] | [AnalyticsWorkflowStage.Success, PublishParams] | [AnalyticsWorkflowStage.Cancel, CancelReason | ContainerCloseReason] | [AnalyticsWorkflowStage.Error, CCEverywhereError<ErrorCode>];
```
