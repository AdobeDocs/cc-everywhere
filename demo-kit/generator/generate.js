#!/usr/bin/env node

import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { resolve, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

import { generateHTML } from './templates/index.html.js';
import { generateAppJS } from './templates/app.js.js';
import { generateStyles } from './templates/styles.css.js';
import { generateReadme } from './templates/readme.md.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(0);
  }

  const configPath = resolve(args[0]);
  const outputArg = args[1] || null;

  if (!existsSync(configPath)) {
    console.error(`Error: Config file not found: ${configPath}`);
    process.exit(1);
  }

  let config;
  try {
    config = JSON.parse(readFileSync(configPath, 'utf-8'));
  } catch (err) {
    console.error(`Error: Could not parse config file: ${err.message}`);
    process.exit(1);
  }

  const slug = outputArg || deriveSlug(config, configPath);
  const outputDir = resolve(process.cwd(), 'output', slug);

  console.log(`\nGenerating demo: ${slug}`);
  console.log(`  Config:  ${configPath}`);
  console.log(`  Output:  ${outputDir}\n`);

  mkdirSync(outputDir, { recursive: true });

  const files = {
    'index.html': generateHTML(config),
    'app.js':     generateAppJS(config),
    'styles.css': generateStyles(config),
    'README.md':  generateReadme(config),
  };

  for (const [name, content] of Object.entries(files)) {
    const filePath = resolve(outputDir, name);
    writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ ${name}`);
  }

  console.log(`\nDone! To run the demo:\n`);
  console.log(`  cd ${outputDir}`);
  console.log(`  # Set your clientId in app.js`);
  console.log(`  # Then serve over HTTPS:`);
  console.log(`  npx http-server -S -C ./localhost.pem -K ./localhost-key.pem -p 8000\n`);
}

function deriveSlug(config, configPath) {
  if (config.meta?.customerName && config.meta.customerName !== 'Default Demo') {
    return config.meta.customerName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  return basename(configPath, '.json');
}

function printUsage() {
  console.log(`
  Embed SDK Demo Generator
  ========================

  Usage:
    node generator/generate.js <config.json> [output-name]

  Arguments:
    config.json    Path to a demo config JSON file
    output-name    Optional folder name (defaults to customer name or config filename)

  Output goes to: demo-kit/output/<output-name>/

  Examples:
    node generator/generate.js configs/presets/e-commerce.json
    node generator/generate.js configs/acme-corp.json acme-demo
    node generator/generate.js ../path/to/custom-config.json my-demo

  The generated folder contains index.html, app.js, styles.css, and README.md.
  Serve it over HTTPS with any static server to run the demo.
`);
}

main();
