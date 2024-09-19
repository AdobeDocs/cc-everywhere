[**cc-everywhere**](../../../../index.md) • **Docs**

***

[cc-everywhere](../../../../index.md) / sdk/src/analytics/\_\_mocks\_\_/AnalyticsManager

# sdk/src/analytics/\_\_mocks\_\_/AnalyticsManager

## Classes

### AnalyticsManager

#### Constructors

##### new AnalyticsManager()

```ts
new AnalyticsManager(): AnalyticsManager
```

###### Returns

[`AnalyticsManager`](AnalyticsManager.md#analyticsmanager)

#### Properties

| Property | Type | Default value |
| ------ | ------ | ------ |
| `getVisitorId` | `Mock`\<`any`, `any`, `any`\> | `undefined` |
| `start` | `Mock`\<`any`, `any`, `any`\> | `startMock` |
| `end` | `Mock`\<`any`, `any`, `any`\> | `endMock` |
| `debug` | `Mock`\<`any`, `any`, `any`\> | `debugMock` |
| `logEvent` | `Mock`\<`any`, `any`, `any`\> | `logEventMock` |
| `logError` | `Mock`\<`any`, `any`, `any`\> | `logErrorMock` |

## Variables

### logEventMock

```ts
const logEventMock: Mock<any, any, any>;
```

***

### startMock

```ts
const startMock: Mock<any, any, any>;
```

***

### endMock

```ts
const endMock: Mock<any, any, any>;
```

***

### debugMock

```ts
const debugMock: Mock<any, any, any>;
```

***

### logErrorMock

```ts
const logErrorMock: Mock<any, any, any>;
```

***

### DUMMY\_VISITOR\_ID

```ts
const DUMMY_VISITOR_ID: "dummy_visitor_id" = 'dummy_visitor_id';
```
