import path from 'node:path';
import fs from 'node:fs';
import svgr from '@svgr/core';
import camelcase from 'camelcase';
import { ensureWrite } from '../../utils.mjs';
import { svgoConfig } from '../svgo.mjs';

function getComponentName(svgPath) {
  return camelcase(path.parse(svgPath).name, { pascalCase: true });
}

function exportAll(components, includeExtension = true) {
  const extension = includeExtension ? '.tsx' : '';

  const content = components
    .sort()
    .map((component) => `export { default as ${component} } from './${component}${extension}';`)
    .join('\n');

  return content + '\n';
}

export async function build(pkgDir, iconsPaths) {
  const outDir = path.join(pkgDir, 'src');

  // Clean previous build
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true });
  }

  fs.mkdirSync(outDir);

  const components = [];

  for (const iconPath of iconsPaths) {
    const svg = fs.readFileSync(iconPath).toString();
    const componentName = getComponentName(iconPath);
    const component = await svgr.transform(
      svg,
      {
        svgo: true,
        svgoConfig,
        plugins: [
          '@svgr/plugin-svgo',
          '@svgr/plugin-jsx',
          '@svgr/plugin-prettier'
        ],
        replaceAttrValues: {
          '#000': 'currentColor', // Replace icon color with currentColor
          '#fff': 'transparent', // Hide icon background
        },
        typescript: true
      },
      { componentName }
    );

    ensureWrite(path.join(outDir, componentName + '.tsx'), component);

    components.push(componentName);
  }

  ensureWrite(path.join(outDir, 'index.tsx'), exportAll(components, false));
}
