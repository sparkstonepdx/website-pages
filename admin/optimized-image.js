// Sveltia CMS custom field type: optimizedImage (needs `addFile` and `pickFile` control props)
// Value: { widgetType, original, tiny, optimized, aspectRatio, alt }
// foo.jpg -> foo.tiny.webp (max 50px edge) + foo.opt.webp (max `max_size` edge); .jpg on Safari

// @cms-widget optimizedImage: OptimizedImage
// export interface OptimizedImage {
//   widgetType: 'optimizedImage';
//   /** Public path of the uploaded file, untouched. */
//   original: string;
//   /** Public path of the copy with a 50px longest edge. */
//   tiny: string;
//   /** Public path of the resized copy. */
//   optimized: string;
//   /** Width divided by height, unrounded. */
//   aspectRatio: number;
//   /** Alt text. Empty string means the image is decorative. */
//   alt: string;
// }

const WIDGET = 'optimizedImage';
// Tried in order: lite is plenty for a one-line description, and far less likely to be saturated
const GEMINI_MODELS = ['gemini-3.5-flash-lite', 'gemini-3.5-flash'];
const RETRY_DELAYS = [1000, 3000];
const GEMINI_KEY = 'optimizedImage.geminiApiKey';
const KEY_URL = 'https://aistudio.google.com/apikey';
const ALT_PROMPT =
  'Write alt text for this image for a website. One sentence, under 125 characters, ' +
  'describing what the image shows. No "image of" or "photo of" preamble, no trailing period. ' +
  'Reply with the alt text only.';
const TINY_MAX = 50;
const TINY_QUALITY = 0.2;
const OPT_QUALITY = 0.8;

// Safari can't encode WebP from canvas and silently returns PNG, so fall back to JPEG there
let webpSupport;
const canEncodeWebp = () =>
  (webpSupport ??= (() => {
    const probe = new OffscreenCanvas(1, 1);
    probe.getContext('2d'); // convertToBlob throws without a rendering context
    return probe.convertToBlob({ type: 'image/webp' }).then((blob) => blob.type === 'image/webp');
  })());

const EXT = { 'image/webp': 'webp', 'image/jpeg': 'jpg' };

const encode = async (bitmap, max, quality) => {
  const type = (await canEncodeWebp()) ? 'image/webp' : 'image/jpeg';
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const cw = Math.max(1, Math.round(bitmap.width * scale));
  const ch = Math.max(1, Math.round(bitmap.height * scale));
  const canvas = new OffscreenCanvas(cw, ch);
  const ctx = canvas.getContext('2d');
  if (type === 'image/jpeg') {
    // JPEG has no alpha; without this, transparent pixels turn black
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, cw, ch);
  }
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(bitmap, 0, 0, cw, ch);
  return canvas.convertToBlob({ type, quality });
};

const fileName = (path) => (path ?? '').split('/').pop();

const toBase64 = (blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = () => reject(new Error(`Could not read ${blob.type || 'the file'}`));
    reader.readAsDataURL(blob);
  });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const callGemini = async (model, key, body) => {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': key, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    },
  );

  if ([400, 401, 403].includes(res.status)) {
    localStorage.removeItem(GEMINI_KEY);
    throw new Error('That key was rejected. Click Suggest to enter another one.');
  }

  // 429 is the rate limit, 503 means the model is busy; both are worth another try
  if (res.status === 429 || res.status >= 500) return null;

  if (!res.ok) throw new Error(`Google returned an error (${res.status}).`);

  const { candidates } = await res.json();
  const text = candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('');

  return text?.trim().replace(/^["']|["']$/g, '') ?? '';
};

const describeImage = async (blob, key) => {
  const body = {
    contents: [
      {
        parts: [
          { text: ALT_PROMPT },
          { inline_data: { mime_type: blob.type, data: await toBase64(blob) } },
        ],
      },
    ],
  };

  for (const [attempt, model] of GEMINI_MODELS.entries()) {
    const alt = await callGemini(model, key, body);

    if (alt !== null) return alt;
    if (attempt < RETRY_DELAYS.length) await sleep(RETRY_DELAYS[attempt]);
  }

  throw new Error('Google is busy right now. Try Suggest again in a minute.');
};

const SETUP_STEPS = [
  'Sign in with a Google account on the page that opens.',
  'Click "Create API key". If it asks for a project, pick any.',
  'Copy the key it shows you.',
  'Paste it below. It stays in this browser, and you only do this once.',
];

const STYLES = {
  wrapper: { display: 'grid', gap: '8px', fontFamily: 'var(--sui-control-font-family)' },
  empty: {
    display: 'grid',
    justifyItems: 'center',
    gap: '8px',
    padding: '24px 16px',
    border: '1px dashed var(--sui-control-border-color)',
    borderRadius: 'var(--sui-control-medium-border-radius)',
    color: 'var(--sui-secondary-foreground-color)',
    fontSize: 'var(--sui-font-size-small)',
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px',
    border: '1px solid var(--sui-control-border-color)',
    borderRadius: 'var(--sui-control-medium-border-radius)',
    background: 'var(--sui-secondary-background-color)',
  },
  thumb: {
    width: '96px',
    height: '96px',
    objectFit: 'contain',
    borderRadius: 'var(--sui-control-medium-border-radius)',
    background: 'var(--sui-primary-background-color)',
  },
  meta: { display: 'grid', gap: '4px', minWidth: 0, flex: '1 1 auto' },
  name: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  detail: {
    color: 'var(--sui-secondary-foreground-color)',
    fontSize: 'var(--sui-font-size-small)',
  },
  buttons: { display: 'flex', gap: '8px' },
  button: {
    padding: '4px 12px',
    border: '1px solid var(--sui-button-border-color)',
    borderRadius: 'var(--sui-button-medium-border-radius)',
    background: 'var(--sui-button-background-color)',
    color: 'inherit',
    font: 'inherit',
    cursor: 'pointer',
  },
  label: {
    display: 'grid',
    gap: '4px',
    color: 'var(--sui-secondary-foreground-color)',
    fontSize: 'var(--sui-font-size-small)',
  },
  input: {
    padding: '6px 8px',
    border: '1px solid var(--sui-control-border-color)',
    borderRadius: 'var(--sui-control-medium-border-radius)',
    background: 'var(--sui-primary-background-color)',
    color: 'inherit',
    font: 'inherit',
    width: '100%',
  },
  setup: {
    display: 'grid',
    gap: '8px',
    padding: '12px',
    border: '1px solid var(--sui-control-border-color)',
    borderRadius: 'var(--sui-control-medium-border-radius)',
    background: 'var(--sui-secondary-background-color)',
    fontSize: 'var(--sui-font-size-small)',
  },
  steps: { margin: 0, paddingLeft: '20px', display: 'grid', gap: '4px' },
  link: { color: 'var(--sui-primary-accent-color-text, inherit)' },
  error: { color: 'var(--sui-error-foreground-color, crimson)' },
};

const OptimizedImageControl = createClass({
  getInitialState() {
    return { busy: false, error: '', setup: false, keyDraft: '' };
  },

  // Adding or removing a list item rebuilds the whole list through `flatten()`, which drops the
  // empty-object placeholder Sveltia stores at an object value's own key path. Without it,
  // `getCurrentValue()` hands custom controls `undefined` even though the leaves are still there.
  // Writing the value back restores the placeholder. Remove once upstream keeps it.
  componentDidUpdate(prevProps) {
    if (prevProps.value && !this.props.value && this.last) {
      this.props.onChange(this.last);
    }
  },

  async onPick() {
    this.setState({ busy: true, error: '' });

    try {
      // `allowURL` is off because the derivatives can only come from the file contents
      const picked = await this.props.pickFile({ accept: 'image/*', allowURL: false });

      if (!picked) return;

      const { addFile, field, onChange } = this.props;
      const name = picked.file.name || fileName(picked.value);
      const base = name.replace(/\.[^.]+$/, '');
      const bitmap = await createImageBitmap(picked.file);

      this.picked = picked.file;
      const aspectRatio = bitmap.width / bitmap.height;
      const tinyBlob = await encode(bitmap, TINY_MAX, TINY_QUALITY);
      const optBlob = await encode(bitmap, field.get('max_size', 1920), OPT_QUALITY);

      bitmap.close();

      // `original` is already a public path for an existing file, or a blob URL for a new upload;
      // the derivatives are always blob URLs until the entry is saved
      const tiny = await addFile(tinyBlob, { name: `${base}.tiny.${EXT[tinyBlob.type]}` });
      const optimized = await addFile(optBlob, { name: `${base}.opt.${EXT[optBlob.type]}` });

      this.last = {
        widgetType: WIDGET,
        original: picked.value,
        tiny,
        optimized,
        aspectRatio,
        alt: this.props.value?.alt ?? '',
      };
      onChange(this.last);
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ busy: false });
    }
  },

  async onSuggest() {
    const key = localStorage.getItem(GEMINI_KEY);

    // First time through, walk the user to a key instead of failing
    if (!key) {
      this.setState({ setup: true, error: '' });

      return;
    }

    this.setState({ busy: true, error: '' });

    try {
      // The picked file is gone after a reload, so fall back to fetching the optimized copy
      const blob = this.picked ?? (await fetch(this.props.value.optimized).then((r) => r.blob()));
      const alt = await describeImage(blob, key);

      if (alt) {
        this.last = { ...this.props.value, alt };
        this.props.onChange(this.last);
      }
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ busy: false });
    }
  },

  onSaveKey() {
    const key = this.state.keyDraft.trim();

    if (!key) return;

    localStorage.setItem(GEMINI_KEY, key);
    this.setState({ setup: false, keyDraft: '' }, this.onSuggest);
  },

  setupPanel() {
    return h(
      'div',
      { style: STYLES.setup },
      h('strong', null, 'One-time setup for suggested alt text'),
      h(
        'ol',
        { style: STYLES.steps },
        SETUP_STEPS.map((step, i) => h('li', { key: i }, step)),
      ),
      h(
        'a',
        { href: KEY_URL, target: '_blank', rel: 'noreferrer', style: STYLES.link },
        'Open Google AI Studio to get a key',
      ),
      h(
        'div',
        { style: STYLES.buttons },
        h('input', {
          type: 'password',
          value: this.state.keyDraft,
          placeholder: 'Paste your key here',
          style: STYLES.input,
          onChange: (e) => this.setState({ keyDraft: e.target.value }),
        }),
        this.button('Save', this.onSaveKey),
        this.button('Cancel', () => this.setState({ setup: false, keyDraft: '' })),
      ),
    );
  },

  onAlt(e) {
    this.last = { ...this.props.value, alt: e.target.value };
    this.props.onChange(this.last);
  },

  onRemove() {
    this.last = undefined;
    // An empty object clears the subtree and keeps the placeholder Sveltia stores for the field
    this.props.onChange({});
  },

  button(label, onClick, id) {
    return h(
      'button',
      { id, type: 'button', style: STYLES.button, disabled: this.state.busy, onClick },
      label,
    );
  },

  render() {
    const { value, forID, classNameWrapper } = this.props;
    const { busy, error } = this.state;

    if (value) this.last = value;

    const ratio = value?.aspectRatio ? `${value.aspectRatio.toFixed(2)}:1` : '';

    const body = value?.original
      ? h(
          'div',
          { style: STYLES.card },
          h('img', {
            src: value.original,
            alt: value.alt ?? '',
            style: { ...STYLES.thumb, aspectRatio: value.aspectRatio },
          }),
          h(
            'div',
            { style: STYLES.meta },
            h('div', { style: STYLES.name }, fileName(value.original)),
            h('div', { style: STYLES.detail }, [fileName(value.optimized), ratio].join(' · ')),
            h(
              'div',
              { style: STYLES.buttons },
              this.button('Replace', this.onPick, forID),
              this.button('Remove', this.onRemove),
            ),
          ),
        )
      : h(
          'div',
          { style: STYLES.empty },
          h('span', null, 'No image selected'),
          this.button('Choose an image', this.onPick, forID),
        );

    const alt =
      value?.original &&
      h(
        'label',
        { style: STYLES.label },
        h('span', null, 'Alt text (leave empty if decorative)'),
        h(
          'div',
          { style: STYLES.buttons },
          h('input', {
            type: 'text',
            value: value.alt ?? '',
            style: STYLES.input,
            onChange: this.onAlt,
          }),
          this.button('Suggest', this.onSuggest),
        ),
      );

    return h(
      'div',
      { className: classNameWrapper, style: STYLES.wrapper },
      body,
      alt,
      this.state.setup && this.setupPanel(),
      busy && h('span', { style: STYLES.detail }, 'Working…'),
      error && h('span', { role: 'alert', style: STYLES.error }, error),
    );
  },
});

CMS.registerFieldType(WIDGET, OptimizedImageControl, undefined, {
  properties: {
    max_size: { type: 'integer' },
  },
});
