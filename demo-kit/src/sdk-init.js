let sdkInstance = null;

export async function initializeSDK(config) {
  if (sdkInstance) return sdkInstance;

  const initializeParams = {
    clientId: config.sdk.clientId,
    appName: config.sdk.appName || 'Embed SDK Demo',
  };

  const configParams = {};
  if (config.sdk.loginMode) configParams.loginMode = config.sdk.loginMode;
  if (config.sdk.locale) configParams.locale = config.sdk.locale;

  try {
    const result = await window.CCEverywhere.initialize(initializeParams, configParams);
    sdkInstance = result;
    return result;
  } catch (err) {
    console.error('[demo-kit] SDK initialization failed:', err);
    throw err;
  }
}
