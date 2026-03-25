const DEFAULTS = {
  branding: {
    title: 'Adobe Express Embed SDK',
    tagline: 'Powerful creative tools, embedded in your platform',
    logoUrl: '',
    primaryColor: '#6E38B1',
    accentColor: '#E03ADC',
    backgroundColor: '#FFFFFF',
    theme: 'light',
  },
  sdk: {
    appName: 'Embed SDK Demo',
    loginMode: 'delayed',
  },
  layout: {
    navigation: 'tabs',
    showHero: true,
  },
  exportConfig: {
    download: true,
    saveToApp: true,
    editInExpress: false,
  },
};

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      target[key] &&
      typeof target[key] === 'object'
    ) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

function validate(config) {
  const warnings = [];

  if (!config.sdk?.clientId) {
    warnings.push('sdk.clientId is required — set it to your Adobe Developer Console API key.');
  }
  if (config.sdk?.clientId === 'your-client-id') {
    warnings.push('sdk.clientId is still the placeholder value. Replace it with a real API key.');
  }
  if (!config.features) {
    warnings.push('features object is missing — no panels will render.');
  }

  const tb = config.features?.modules?.templateBrowser;
  if (tb?.enabled && tb?.shortcutPillTerms && tb.shortcutPillTerms.length !== 5) {
    warnings.push('templateBrowser.shortcutPillTerms must have exactly 5 items.');
  }

  warnings.forEach((w) => console.warn(`[demo-kit config] ${w}`));
  return warnings.length === 0;
}

export async function loadConfig() {
  const params = new URLSearchParams(window.location.search);
  const configPath = params.get('config') || 'default.json';

  try {
    const url = configPath.startsWith('http') ? configPath : `/${configPath}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load config from ${url}: ${response.status}`);
    }
    const userConfig = await response.json();
    const merged = deepMerge(DEFAULTS, userConfig);
    validate(merged);
    return merged;
  } catch (err) {
    console.error('[demo-kit] Config load error:', err);
    console.warn('[demo-kit] Falling back to inline defaults.');
    return deepMerge(DEFAULTS, {
      sdk: { clientId: 'your-client-id' },
      features: {
        editor: { enabled: true, label: 'Full Editor', description: 'Launch the Adobe Express editor.' },
        quickActions: { enabled: false },
        modules: { generateImage: { enabled: false }, editImage: { enabled: false }, templateBrowser: { enabled: false } },
      },
    });
  }
}
