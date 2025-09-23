[**cc-everywhere**](../../../../../index.md)

***

# Type Alias: Config

```ts
type Config = object;
```

## Properties

### ENVIRONMENT

```ts
ENVIRONMENT: Environment;
```

***

### CLIENTS

```ts
CLIENTS: object;
```

| Name | Type |
| ------ | ------ |
| `CCX` | `object` |
| `CCX.QUERY_PARAMS` | `object` |
| `CCX.QUERY_PARAMS.KEYS` | `object` |
| `CCX.QUERY_PARAMS.KEYS.EMBED` | `string` |
| `CCX.QUERY_PARAMS.KEYS.CC_EVERYWHERE_PROTOCOL_VERSION` | `string` |
| `CCX.QUERY_PARAMS.KEYS.CC_EVERYWHERE_HOST_CLIENT_ID` | `string` |
| `CCX.QUERY_PARAMS.KEYS.LOCALE` | `string` |
| `CCX.QUERY_PARAMS.KEYS.REFERRER` | `string` |
| `CCX.QUERY_PARAMS.KEYS.USER_ID` | `string` |
| `CCX.QUERY_PARAMS.KEYS.FEATURE_FLAGS` | `string` |
| `CCX.QUERY_PARAMS.KEYS.ORIGINAL_PATHNAME` | `string` |
| `CCX.QUERY_PARAMS.KEYS.PLATFORM` | `string` |
| `CCX.QUERY_PARAMS.KEYS.BUILD_TAGS` | `string` |
| `CCX.EDITOR` | `object` |
| `CCX.EDITOR.CLIENT_ID` | `string` |
| `CCX.EDITOR.BASE` | `string` |
| `CCX.EDITOR.PATHS` | `object` |
| `CCX.EDITOR.PATHS.NEW_PROJECT` | `string` |
| `CCX.EDITOR.PATHS.NEW_PROJECT_FROM_TEMPLATE` | `string` |
| `CCX.EDITOR.PATHS.NEW_PROJECT_FROM_ASSET_URL` | `string` |
| `CCX.EDITOR.PATHS.EDIT_PROJECT` | `string` |
| `CCX.EDITOR.PATHS.WARMUP` | `string` |
| `CCX.EDITOR.PATHS.ASSET_UPLOAD` | `string` |
| `CCX.EDITOR.QUERY_PARAMS` | `object` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS` | `object` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.TASK_ID` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.WIDTH` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.HEIGHT` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.UNIT` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.CATEGORY` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.EXPERIENCE` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.TEMPLATE_TYPE` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.SEARCH_TEXT` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.SEARCH_CATEGORY` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.EDIT_ACTION` | `string` |
| `CCX.EDITOR.QUERY_PARAMS.KEYS.ASSET_COLLECTION` | `string` |
| `CCX.QUICK_ACTION` | `object` |
| `CCX.QUICK_ACTION.BASE` | `string` |
| `CCX.QUICK_ACTION.PATH` | `string` |
| `CCX.QUICK_ACTION.CLIENT_ID` | `string` |
| `CCX.QUICK_ACTION.WARMUP` | `string` |
| `CCX.QUICK_ACTION.QUERY_PARAMS` | `object` |
| `CCX.QUICK_ACTION.QUERY_PARAMS.KEYS` | `object` |
| `CCX.QUICK_ACTION.QUERY_PARAMS.KEYS.ENTRY` | `string` |
| `CCX.QUICK_ACTION.QUERY_PARAMS.KEYS.SHARED` | `string` |
| `CCX.QUICK_ACTION.QUERY_PARAMS.KEYS.COLOR_SCHEME` | `string` |
| `CCX.QUICK_ACTION.QUERY_PARAMS.KEYS.SPECTRUM_THEME` | `string` |
| `CCX.TEXT_TO_IMAGE_ME` | `object` |
| `CCX.TEXT_TO_IMAGE_ME.BASE` | `string` |
| `CCX.TEXT_TO_IMAGE_ME.PATHS` | `object` |
| `CCX.TEXT_TO_IMAGE_ME.PATHS.EDITOR` | `string` |
| `CCX.TEXT_TO_IMAGE_ME.PATHS.INSPIRE` | `string` |
| `CCX.TEXT_TO_IMAGE_ME.CLIENT_ID` | `string` |
| `CCX.START_FROM_CONTENT_MODULE` | `object` |
| `CCX.START_FROM_CONTENT_MODULE.BASE` | `string` |
| `CCX.START_FROM_CONTENT_MODULE.PATHS` | `object` |
| `CCX.START_FROM_CONTENT_MODULE.PATHS.EDITOR` | `string` |
| `CCX.START_FROM_CONTENT_MODULE.CLIENT_ID` | `string` |
| `IMS` | `object` |
| `IMS.BASE` | `string` |
| `IMS.PATHS` | `object` |
| `IMS.PATHS.VALIDATE_TOKEN` | `string` |
| `IMS.PATHS.EXCHANGE_TOKEN` | `string` |
| `IMS.PATHS.JUMP_TOKEN` | `string` |
| `IMS.PATHS.JUMP_FAIL` | `string` |
| `IMS.QUERY_PARAMS` | `object` |
| `IMS.QUERY_PARAMS.KEYS` | `object` |
| `IMS.QUERY_PARAMS.KEYS.CLIENT_ID` | `string` |
| `IMS.QUERY_PARAMS.KEYS.TOKEN` | `string` |
| `IMS.QUERY_PARAMS.KEYS.TYPE` | `string` |
| `IMS.QUERY_PARAMS.KEYS.CODE` | `string` |
| `IMS.QUERY_PARAMS.KEYS.GRANT_TYPE` | `string` |
| `IMS.QUERY_PARAMS.KEYS.CODE_VERIFIER` | `string` |
| `IMS.QUERY_PARAMS.KEYS.PROMPT` | `string` |
| `IMS.QUERY_PARAMS.KEYS.JUMP_FAIL_URI` | `string` |
| `IMS.QUERY_PARAMS.VALUES` | `object` |
| `IMS.QUERY_PARAMS.VALUES.GRANT_TYPE` | `string` |
| `IMS.QUERY_PARAMS.VALUES.PROMPT` | `string` |
| `IMS.BODY_PARAMS` | `object` |
| `IMS.BODY_PARAMS.KEYS` | `object` |
| `IMS.BODY_PARAMS.KEYS.BEARER_TOKEN` | `string` |
| `IMS.BODY_PARAMS.KEYS.TARGET_CLIENT_ID` | `string` |
| `IMS.BODY_PARAMS.KEYS.TARGET_REDIRECT_URI` | `string` |
| `IMS.BODY_PARAMS.KEYS.CLIENT_ID` | `string` |
| `IMS.BODY_PARAMS.KEYS.TARGET_RESPONSE_TYPE` | `string` |
| `IMS.BODY_PARAMS.KEYS.LOCALE` | `string` |
| `IMS.BODY_PARAMS.VALUES` | `object` |
| `IMS.BODY_PARAMS.VALUES.GRANT_TYPE` | `string` |
| `IMS.TOKEN_TYPE` | `string` |
| `CC_EVERYWHERE_SDK` | `object` |
| `CC_EVERYWHERE_SDK.FIRST_PARTY_BASE` | `string` |
| `CC_EVERYWHERE_SDK.THIRD_PARTY_BASE` | `string` |
| `CC_EVERYWHERE_SDK.X_API_KEY` | `string` |
| `CC_EVERYWHERE_SDK.PROJECT` | `string` |
| `CC_EVERYWHERE_SDK.SOURCE` | `string` |
| `CC_EVERYWHERE_SDK.SCOPES_VALUE` | `string` |
| `CC_EVERYWHERE_SDK.HOST_REQUIRED_SCOPES` | `string`[] |
| `INGEST` | `object` |
| `INGEST.PATH` | `string` |
| `INGEST.BASE` | `string` |
| `INGEST.QUERY_PARAMS` | `object` |
| `INGEST.QUERY_PARAMS.KEYS` | `object` |
| `INGEST.QUERY_PARAMS.KEYS.API_KEY` | `string` |
| `INVITATIONS` | `object` |
| `INVITATIONS.BASE` | `string` |
| `CONTENT_SEARCH_SERVICE` | `object` |
| `CONTENT_SEARCH_SERVICE.BASE` | `string` |
| `A_DOT_COM` | `object` |
| `A_DOT_COM.CLIENT_ID` | `string` |
| `A_DOT_COM_LEGACY` | `object` |
| `A_DOT_COM_LEGACY.CLIENT_ID` | `string` |
| `ACROBAT` | `object` |
| `ACROBAT.WEB` | `object` |
| `ACROBAT.WEB.CLIENT_ID_REGEX` | `RegExp` |
| `ACROBAT.DESKTOP` | `object` |
| `ACROBAT.DESKTOP.CLIENT_ID` | `string` |
| `ACROBAT_EMBED_VIEWER` | `object` |
| `ACROBAT_EMBED_VIEWER.CLIENT_ID` | `string` |
| `ACROBAT_EXT` | `object` |
| `ACROBAT_EXT.CLIENT_ID` | `string` |
| `ACROBAT_MOBILE` | `object` |
| `ACROBAT_MOBILE.CLIENT_ID` | `string` |
| `ACROBAT_READER` | `object` |
| `ACROBAT_READER.DESKTOP` | `object` |
| `ACROBAT_READER.DESKTOP.CLIENT_ID` | `string` |
| `ACROBAT_WEB_BENCH` | `object` |
| `ACROBAT_WEB_BENCH.CLIENT_ID` | `string` |
| `ADOBE_HOME` | `object` |
| `ADOBE_HOME.CLIENT_ID` | `string` |
| `AEM_ASSETS` | `object` |
| `AEM_ASSETS.CLIENT_ID` | `string` |
| `AEM_ASSETS_CONTENT_HUB` | `object` |
| `AEM_ASSETS_CONTENT_HUB.CLIENT_ID` | `string` |
| `AFTER_EFFECTS` | `object` |
| `AFTER_EFFECTS.CLIENT_ID` | `string` |
| `BRIDGE` | `object` |
| `BRIDGE.CLIENT_ID` | `string` |
| `CCD` | `object` |
| `CCD.CLIENT_ID_PREFIX` | `string` |
| `CONTENT_CAL` | `object` |
| `CONTENT_CAL.CLIENT_ID` | `string` |
| `GENSTUDIO` | `object` |
| `GENSTUDIO.CLIENT_ID` | `string` |
| `ILLUSTRATOR` | `object` |
| `ILLUSTRATOR.CLIENT_ID` | `string` |
| `INDESIGN` | `object` |
| `INDESIGN.CLIENT_ID` | `string` |
| `PHOTOSHOP` | `object` |
| `PHOTOSHOP.CLIENT_ID` | `string` |
| `PREMIERE_PRO` | `object` |
| `PREMIERE_PRO.CLIENT_ID` | `string` |
| `STOCK` | `object` |
| `STOCK.CLIENT_ID` | `string` |
| `TEST_APP` | `object` |
| `TEST_APP.FIRST_PARTY_CLIENT_ID` | `string` |
| `TEST_APP.THIRD_PARTY_CLIENT_ID` | `string` |
