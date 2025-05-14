# Adobe Express Embed SDK

This is the repo for the SDK's [documentation site](https://developer.adobe.com/embed-sdk/docs/).

## Sample

To run the sample, `cd` into `v4-sample` first and follow the instructions in the [sample.md](/v4-sample/sample.md) file.

## Contributing

Before raising a pull request, please run the following tests:

```bash
yarn test:links
yarn test:lint
```

Markdown linting errors can be fixed automatically (with some luck) by running:

```bash
yarn fix:lint
```

## Known Issue: Sign-in Failure in Incognito/Private Windows

There is a known issue where the sign-in process may fail to complete when using Chrome incognito or Safari Private windows.

- The sign-in process stops in the main window after the closing pop-up window of the redirectUri page.
- Applicable to only:
  - Mac OS 12.1 with Chrome 99.0.4844.51
  - Safari 15.2

Currently, as a workaround solution, users should avoid using incognito or private windows when attempting to sign in.

---
