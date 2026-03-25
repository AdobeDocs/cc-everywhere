import { renderEditorPanel } from './panels/editor.js';
import { renderQuickActionsPanel } from './panels/quick-actions.js';
import { renderModulesPanel } from './panels/modules.js';

export function render(appEl, sdk, config) {
  applyBranding(config);

  if (config.layout?.showHero !== false) {
    appEl.appendChild(buildHero(config));
  }

  const panels = collectEnabledPanels(config);

  const isTabs = config.layout?.navigation !== 'sections';
  const contentEl = document.createElement('div');
  contentEl.className = `demo-content${isTabs ? '' : ' demo-content--sections'}`;

  if (isTabs && panels.length > 1) {
    appEl.appendChild(buildTabBar(panels, contentEl));
  }

  for (const p of panels) {
    p.render(contentEl, sdk, config);
  }

  // Activate first panel
  if (isTabs) {
    const first = contentEl.querySelector('.demo-panel');
    if (first) first.classList.add('demo-panel--active');
  }

  appEl.appendChild(contentEl);
  appEl.appendChild(buildFooter(config));
}

function applyBranding(config) {
  const b = config.branding || {};
  const root = document.documentElement;
  const body = document.body;

  if (b.primaryColor) root.style.setProperty('--brand-primary', b.primaryColor);
  if (b.accentColor) root.style.setProperty('--brand-accent', b.accentColor);
  if (b.backgroundColor) root.style.setProperty('--brand-bg', b.backgroundColor);

  if (b.theme === 'dark') {
    body.classList.remove('spectrum--light');
    body.classList.add('spectrum--dark');
  }

  document.title = b.title || 'Embed SDK Demo';
}

function buildHero(config) {
  const b = config.branding || {};
  const hero = document.createElement('div');
  hero.className = 'demo-hero';

  if (b.logoUrl) {
    const logo = document.createElement('img');
    logo.src = b.logoUrl;
    logo.alt = b.title || 'Logo';
    logo.className = 'demo-hero__logo';
    hero.appendChild(logo);
  }

  const h1 = document.createElement('h1');
  h1.className = 'demo-hero__title';
  h1.textContent = b.title || 'Adobe Express Embed SDK';
  hero.appendChild(h1);

  if (b.tagline) {
    const p = document.createElement('p');
    p.className = 'demo-hero__tagline';
    p.textContent = b.tagline;
    hero.appendChild(p);
  }

  return hero;
}

function collectEnabledPanels(config) {
  const panels = [];
  const f = config.features || {};

  if (f.editor?.enabled) {
    panels.push({
      id: 'editor',
      label: f.editor.label || 'Full Editor',
      render: renderEditorPanel,
    });
  }

  if (f.quickActions?.enabled) {
    const hasActions = (f.quickActions.imageActions?.length > 0) || (f.quickActions.videoActions?.length > 0);
    if (hasActions) {
      panels.push({
        id: 'quick-actions',
        label: f.quickActions.label || 'Quick Actions',
        render: renderQuickActionsPanel,
      });
    }
  }

  const mods = f.modules || {};
  const hasModules = mods.generateImage?.enabled || mods.editImage?.enabled || mods.templateBrowser?.enabled;
  if (hasModules) {
    panels.push({
      id: 'modules',
      label: 'Modules',
      render: renderModulesPanel,
    });
  }

  return panels;
}

function buildTabBar(panels, contentEl) {
  const nav = document.createElement('nav');
  nav.className = 'demo-nav';

  panels.forEach((p, i) => {
    const tab = document.createElement('button');
    tab.className = `demo-nav__tab${i === 0 ? ' demo-nav__tab--active' : ''}`;
    tab.textContent = p.label;
    tab.dataset.panelId = `panel-${p.id}`;

    tab.addEventListener('click', () => {
      nav.querySelectorAll('.demo-nav__tab').forEach((t) => t.classList.remove('demo-nav__tab--active'));
      tab.classList.add('demo-nav__tab--active');

      contentEl.querySelectorAll('.demo-panel').forEach((el) => el.classList.remove('demo-panel--active'));
      const target = contentEl.querySelector(`#${tab.dataset.panelId}`);
      if (target) target.classList.add('demo-panel--active');
    });

    nav.appendChild(tab);
  });

  return nav;
}

function buildFooter(config) {
  const footer = document.createElement('footer');
  footer.className = 'demo-footer';
  const meta = config.meta || {};
  const parts = ['Powered by Adobe Express Embed SDK'];
  if (meta.customerName && meta.customerName !== 'Default Demo') {
    parts.unshift(`Prepared for ${meta.customerName}`);
  }
  if (meta.preparedBy) parts.push(`by ${meta.preparedBy}`);
  if (meta.date) parts.push(`(${meta.date})`);
  footer.textContent = parts.join(' \u00B7 ');
  return footer;
}
