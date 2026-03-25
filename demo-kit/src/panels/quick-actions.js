import { buildExportConfig } from '../shared/export-config.js';
import { createAssetLoader } from '../shared/asset-loader.js';
import { createCallbacks } from '../shared/callbacks.js';

const IMAGE_ACTION_META = {
  cropImage:       { label: 'Crop Image',        method: 'cropImage' },
  resizeImage:     { label: 'Resize Image',      method: 'resizeImage' },
  removeBackground:{ label: 'Remove Background', method: 'removeBackground' },
  convertToJPEG:   { label: 'Convert to JPG',    method: 'convertToJPEG' },
  convertToPNG:    { label: 'Convert to PNG',     method: 'convertToPNG' },
  convertToSVG:    { label: 'Convert to SVG',     method: 'convertToSVG' },
  generateQRCode:  { label: 'Generate QR Code',   method: 'generateQRCode' },
};

const VIDEO_ACTION_META = {
  cropVideo:        { label: 'Crop Video',        method: 'cropVideo' },
  resizeVideo:      { label: 'Resize Video',      method: 'resizeVideo' },
  trimVideo:        { label: 'Trim Video',        method: 'trimVideo' },
  mergeVideos:      { label: 'Merge Videos',      method: 'mergeVideos' },
  convertToGIF:     { label: 'Convert to GIF',    method: 'convertToGIF' },
  convertToMP4:     { label: 'Convert to MP4',    method: 'convertToMP4' },
  animateFromAudio: { label: 'Animate from Audio', method: 'animateFromAudio' },
  captionVideo:     { label: 'Caption Video',     method: 'captionVideo' },
};

export function renderQuickActionsPanel(container, sdk, config) {
  const cfg = config.features.quickActions;
  const panel = document.createElement('div');
  panel.id = 'panel-quick-actions';
  panel.className = 'demo-panel';

  const title = document.createElement('h2');
  title.className = 'demo-panel__title';
  title.textContent = cfg.label || 'Quick Actions';
  panel.appendChild(title);

  const desc = document.createElement('p');
  desc.className = 'demo-panel__description';
  desc.textContent = cfg.description || '';
  panel.appendChild(desc);

  const displayArea = document.createElement('div');
  const { callbacks, clearDisplay } = createCallbacks(displayArea);
  const exportConfig = buildExportConfig(config);

  const docConfig = {};
  const appConfig = { callbacks };
  const modalParams = {};

  // Asset loader for image/video input
  const assetLoader = createAssetLoader(panel, { accept: 'image/*,video/*' });

  const updateDocConfig = () => {
    const data = assetLoader.getBase64();
    if (data) {
      docConfig.asset = { data, dataType: 'base64', type: 'image' };
    }
  };

  // Image quick actions
  const imageActions = cfg.imageActions || [];
  if (imageActions.length > 0) {
    const sectionLabel = document.createElement('h3');
    sectionLabel.style.cssText = 'font-size: 1.1rem; margin: 20px 0 12px; font-weight: 600;';
    sectionLabel.textContent = 'Image';
    panel.appendChild(sectionLabel);

    const row = document.createElement('div');
    row.className = 'demo-actions';
    for (const actionId of imageActions) {
      const meta = IMAGE_ACTION_META[actionId];
      if (!meta) continue;
      const btn = makeButton(meta.label, () => {
        updateDocConfig();
        sdk.quickAction[meta.method](docConfig, appConfig, exportConfig, modalParams);
      });
      row.appendChild(btn);
    }
    panel.appendChild(row);
  }

  // Video quick actions
  const videoActions = cfg.videoActions || [];
  if (videoActions.length > 0) {
    const sectionLabel = document.createElement('h3');
    sectionLabel.style.cssText = 'font-size: 1.1rem; margin: 20px 0 12px; font-weight: 600;';
    sectionLabel.textContent = 'Video';
    panel.appendChild(sectionLabel);

    const row = document.createElement('div');
    row.className = 'demo-actions';
    for (const actionId of videoActions) {
      const meta = VIDEO_ACTION_META[actionId];
      if (!meta) continue;
      const btn = makeButton(meta.label, () => {
        updateDocConfig();
        sdk.quickAction[meta.method](docConfig, appConfig, exportConfig, modalParams);
      });
      row.appendChild(btn);
    }
    panel.appendChild(row);
  }

  // Clear button
  const clearBtn = document.createElement('button');
  clearBtn.className = 'spectrum-Button spectrum-Button--outline spectrum-Button--secondary spectrum-Button--sizeS';
  clearBtn.innerHTML = '<span class="spectrum-Button-label">Clear Output</span>';
  clearBtn.style.marginTop = '12px';
  clearBtn.addEventListener('click', () => {
    clearDisplay();
    assetLoader.reset();
  });
  panel.appendChild(clearBtn);

  panel.appendChild(displayArea);
  container.appendChild(panel);
}

function makeButton(label, onClick) {
  const btn = document.createElement('button');
  btn.className = 'spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM';
  btn.innerHTML = `<span class="spectrum-Button-label">${label}</span>`;
  btn.addEventListener('click', onClick);
  return btn;
}
