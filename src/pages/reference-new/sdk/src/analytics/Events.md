[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/analytics/Events

# sdk/src/analytics/Events

## Variables

### IndividualEvents

```ts
const IndividualEvents: object;
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `SDKLaunch` | [`BaseEvent`](../../../shared/src/analytics/Event.md#baseevent) | SDKLaunch |
| `QuickActionExportSuccess` | [`BaseEvent`](../../../shared/src/analytics/Event.md#baseevent) | QuickActionExportSuccess |

***

### DebugEvents

```ts
const DebugEvents: object;
```

#### Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `WillTargetLoad` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | WillTargetLoad |
| `IframeLoadUrl` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | IframeLoadUrl |
| `ParamRequestMessage` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | ParamRequestMessage |
| `TokenRequestMessage` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | TokenRequestMessage |
| `SkipJumpCheck` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | SkipJumpCheck |
| `Terminate` | [`DebugEvent`](../../../shared/src/analytics/Event.md#debugevent) | Terminate |

***

### WorkflowEvents

```ts
const WorkflowEvents: Record<AnalyticsWorkflow, Record<AnalyticsWorkflowStage, BaseEvent | null>>;
```
