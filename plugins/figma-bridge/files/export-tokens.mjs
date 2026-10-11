// Figma Bridge — MIT. Review before running. No network access.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const [input, ...rest] = process.argv.slice(2);
if (!input) {
  console.error('usage: node export-tokens.mjs <tokens.json> [--out DIR]');
  process.exit(2);
}
const outIdx = rest.indexOf('--out');
const outDir = outIdx >= 0 ? rest[outIdx + 1] : '.';

const tokens = JSON.parse(readFileSync(input, 'utf8'));
const flat = Object.entries(tokens)
  .filter(([, v]) => typeof v === 'object' && v.value != null)
  .map(([k, v]) => [k.replace(/\s+/g, '-').toLowerCase(), String(v.value)])
  .sort(([a], [b]) => a.localeCompare(b));

mkdirSync(outDir, { recursive: true });

const css = ':root {\n' + flat.map(([k, v]) => `  --${k}: ${v};`).join('\n') + '\n}\n';
writeFileSync(join(outDir, 'tokens.css'), css);

const tw = 'export default {\n  theme: { extend: { colors: {\n' +
  flat.filter(([k]) => k.startsWith('color-'))
      .map(([k, v]) => `    '${k.replace(/^color-/, '')}': 'var(--${k})',`).join('\n') +
  '\n  } } },\n};\n';
writeFileSync(join(outDir, 'tailwind.tokens.js'), tw);

console.log(`wrote ${flat.length} tokens to ${outDir}`);
