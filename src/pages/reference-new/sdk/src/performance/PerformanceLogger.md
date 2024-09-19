[**cc-everywhere**](../../../index.md) • **Docs**

***

[cc-everywhere](../../../index.md) / sdk/src/performance/PerformanceLogger

# sdk/src/performance/PerformanceLogger

## Classes

### PerformanceLogger

#### Constructors

##### new PerformanceLogger()

```ts
new PerformanceLogger(_analyticsManager): PerformanceLogger
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `_analyticsManager` | [`AnalyticsManager`](../analytics/AnalyticsManager.md#analyticsmanager) |

###### Returns

[`PerformanceLogger`](PerformanceLogger.md#performancelogger)

#### Methods

##### startMarker()

```ts
startMarker(marker, id): void
```

Start recording the performance measurement for the given marker.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `marker` | [`PerformanceMarker`](PerformanceMarker.md#performancemarker) | PerformanceMarker |
| `id` | `string` | string |

###### Returns

`void`

##### endMarker()

```ts
endMarker(id): void
```

End recording the performance measurement for the given marker.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | string |

###### Returns

`void`

##### removeMarker()

```ts
removeMarker(id): void
```

Remove the marker from the performance logger.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | string |

###### Returns

`void`
