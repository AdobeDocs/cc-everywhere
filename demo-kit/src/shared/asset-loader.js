export function createAssetLoader(container, { accept = 'image/*,video/*', label = 'Choose a file' } = {}) {
  const wrapper = document.createElement('div');
  wrapper.className = 'asset-loader';

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.id = `file-input-${Date.now()}`;

  const resetBtn = document.createElement('button');
  resetBtn.className = 'spectrum-Button spectrum-Button--outline spectrum-Button--secondary spectrum-Button--sizeS';
  resetBtn.innerHTML = '<span class="spectrum-Button-label">Reset</span>';
  resetBtn.style.marginLeft = '8px';

  wrapper.append(input, resetBtn);
  container.appendChild(wrapper);

  let base64Data = null;

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { base64Data = reader.result; };
    reader.onerror = (err) => console.error('[asset-loader]', err);
  });

  resetBtn.addEventListener('click', () => {
    input.value = '';
    base64Data = null;
  });

  return {
    getBase64: () => base64Data,
    reset: () => {
      input.value = '';
      base64Data = null;
    },
  };
}
