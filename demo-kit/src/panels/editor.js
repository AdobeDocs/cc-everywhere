import { buildExportConfig } from '../shared/export-config.js';
import { createAssetLoader } from '../shared/asset-loader.js';
import { createCallbacks } from '../shared/callbacks.js';

export function renderEditorPanel(container, sdk, config) {
  const cfg = config.features.editor;
  const panel = document.createElement('div');
  panel.id = 'panel-editor';
  panel.className = 'demo-panel';

  const title = document.createElement('h2');
  title.className = 'demo-panel__title';
  title.textContent = cfg.label || 'Full Editor';
  panel.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'demo-panel__description';
  desc.textContent = cfg.description || '';
  panel.appendChild(desc);

  const displayArea = document.createElement('div');
  const { callbacks, getProjectId, clearDisplay } = createCallbacks(displayArea);
  const exportConfig = buildExportConfig(config);

  // Create Design button
  const actions = document.createElement('div');
  actions.className = 'demo-actions';

  const createBtn = makeButton('Create Design', 'fill', () => {
    const docConfig = {};
    if (cfg.canvasSize) {
      docConfig.canvasSize = cfg.canvasSize;
    }
    const appConfig = { callbacks };
    if (cfg.selectedCategory) appConfig.selectedCategory = cfg.selectedCategory;
    sdk.editor.create(docConfig, appConfig, exportConfig);
  });

  const editBtn = makeButton('Edit Design', 'fill', () => {
    const pid = getProjectId();
    if (!pid) {
      alert('Create and save a design first, then use Edit to resume.');
      return;
    }
    const docConfig = { documentId: pid };
    const appConfig = { callbacks };
    if (cfg.selectedCategory) appConfig.selectedCategory = cfg.selectedCategory;
    sdk.editor.edit(docConfig, appConfig, exportConfig);
  });

  actions.append(createBtn, editBtn);
  panel.appendChild(actions);

  // Create from asset
  const assetSection = document.createElement('div');
  assetSection.style.marginTop = '16px';

  const assetLabel = document.createElement('p');
  assetLabel.className = 'demo-panel__description';
  assetLabel.textContent = 'Or load an image to start a project from an existing asset:';
  assetSection.appendChild(assetLabel);

  const assetLoader = createAssetLoader(assetSection, { accept: 'image/*,video/*' });

  const fromAssetBtn = makeButton('Create from Asset', 'outline', () => {
    const data = assetLoader.getBase64();
    if (!data) {
      alert('Select a file first.');
      return;
    }
    const docConfig = {
      asset: { data, dataType: 'base64', type: 'image' },
    };
    sdk.editor.createWithAsset(docConfig, { callbacks }, exportConfig);
  });
  assetSection.appendChild(fromAssetBtn);
  panel.appendChild(assetSection);

  const clearBtn = makeButton('Clear', 'outline--secondary', () => {
    clearDisplay();
    assetLoader.reset();
  });
  clearBtn.style.marginTop = '12px';
  panel.appendChild(clearBtn);

  panel.appendChild(displayArea);
  container.appendChild(panel);
}

function makeButton(label, variant, onClick) {
  const btn = document.createElement('button');
  const variantClass = variant === 'fill'
    ? 'spectrum-Button--fill spectrum-Button--accent'
    : variant === 'outline--secondary'
      ? 'spectrum-Button--outline spectrum-Button--secondary'
      : 'spectrum-Button--outline spectrum-Button--primary';
  btn.className = `spectrum-Button ${variantClass} spectrum-Button--sizeM`;
  btn.innerHTML = `<span class="spectrum-Button-label">${label}</span>`;
  btn.addEventListener('click', onClick);
  return btn;
}
