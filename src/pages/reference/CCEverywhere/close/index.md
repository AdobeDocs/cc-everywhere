---
keywords:
  - close
  - v3
title: close Reference
description: This is the reference page for the close API
contributors:
  - https://github.com/amandahuarng
--- 

# close()

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## close: () => boolean

The default method `close()` will close any active design in progress. This method will:

Closes any active design in progress. It returns a boolean value indicating whether the close operation was successful or not.

* Return **true** once if the close operation was successful
* Return **false** if the operation was unsuccessful
