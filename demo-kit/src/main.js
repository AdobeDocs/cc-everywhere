import { loadConfig } from './config-loader.js';
import { initializeSDK } from './sdk-init.js';
import { render } from './renderer.js';

async function main() {
  const appEl = document.getElementById('app');

  try {
    const config = await loadConfig();
    const sdk = await initializeSDK(config);
    render(appEl, sdk, config);
  } catch (err) {
    appEl.innerHTML = `
      <div style="padding: 60px 40px; text-align: center; font-family: sans-serif;">
        <h1 style="color: #d73a49;">Failed to initialize</h1>
        <p style="color: #666; max-width: 600px; margin: 16px auto; line-height: 1.6;">
          ${err.message || 'An unexpected error occurred.'}
        </p>
        <p style="color: #999; font-size: 0.85rem;">
          Check the browser console for details. Make sure your <code>clientId</code> is set 
          and the current domain is allowlisted in the Adobe Developer Console.
        </p>
      </div>
    `;
    console.error('[demo-kit] Initialization failed:', err);
  }
}

main();
