export function generateStyles(config) {
  const b = config.branding || {};
  const primary = b.primaryColor || '#6E38B1';
  const accent = b.accentColor || '#E03ADC';
  const bg = b.backgroundColor || '#FFFFFF';
  const isDark = b.theme === 'dark';
  const text = isDark ? '#e1e1e1' : '#2c2c2c';
  const subtle = isDark ? '#aaa' : '#6e6e6e';
  const border = isDark ? '#444' : '#e1e1e1';
  const inputBg = isDark ? '#2a2a2a' : '#fff';
  const inputBorder = isDark ? '#555' : '#d1d1d1';

  return `/* Generated styles — feel free to edit */
:root {
  --brand-primary: ${primary};
  --brand-accent: ${accent};
  --brand-bg: ${bg};
  --brand-text: ${text};
  --brand-subtle: ${subtle};
  --brand-border: ${border};
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: var(--brand-bg);
  color: var(--brand-text);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero */
.demo-hero {
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  color: #fff;
  padding: 48px 40px;
  text-align: center;
}
.demo-hero__logo { max-height: 48px; margin-bottom: 16px; }
.demo-hero__title { margin: 0 0 8px; font-size: 2rem; font-weight: 700; }
.demo-hero__tagline { margin: 0; font-size: 1.15rem; opacity: 0.9; }

/* Tab navigation */
.demo-nav {
  display: flex;
  border-bottom: 2px solid var(--brand-border);
  padding: 0 40px;
  background: var(--brand-bg);
  position: sticky;
  top: 0;
  z-index: 10;
}
.demo-nav__tab {
  padding: 14px 24px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--brand-subtle);
  border: none;
  border-bottom: 3px solid transparent;
  background: none;
  transition: color 0.15s, border-color 0.15s;
  white-space: nowrap;
}
.demo-nav__tab:hover { color: var(--brand-primary); }
.demo-nav__tab--active {
  color: var(--brand-primary);
  border-bottom-color: var(--brand-primary);
}

/* Sections layout */
.demo-content { flex: 1; padding: 32px 40px 60px; max-width: 1100px; width: 100%; margin: 0 auto; }
.demo-content--sections .demo-panel {
  display: block;
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--brand-border);
}
.demo-content--sections .demo-panel:last-child { border-bottom: none; }

/* Panels */
.demo-panel { display: none; animation: fadeIn 0.2s ease-in; }
.demo-panel--active { display: block; }
.demo-panel__title { font-size: 1.5rem; font-weight: 700; margin: 0 0 8px; }
.demo-panel__description { font-size: 1rem; color: var(--brand-subtle); margin: 0 0 24px; line-height: 1.5; }

.demo-section { margin-bottom: 32px; }
.demo-section h3 { font-size: 1.15rem; font-weight: 600; margin: 0 0 6px; }

/* Buttons & actions */
.demo-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }

/* Asset & form elements */
.asset-loader { margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.published-asset {
  max-width: 100%;
  max-height: 400px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  display: none;
}
.demo-field { margin-bottom: 16px; }
.demo-field label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 4px; color: var(--brand-text); }
.demo-field input[type="text"] {
  width: 100%; max-width: 480px; padding: 8px 12px;
  border: 1px solid ${inputBorder}; border-radius: 4px;
  font-size: 0.95rem; background: ${inputBg}; color: var(--brand-text);
}
.demo-field input[type="text"]:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 1px var(--brand-primary);
}

/* Footer */
.demo-footer {
  text-align: center; padding: 16px 40px;
  font-size: 0.8rem; color: var(--brand-subtle);
  border-top: 1px solid var(--brand-border);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;
}
