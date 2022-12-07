import fs from 'node:fs';
import path from 'node:path';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { getWorkspaceRoot } from '../utils.mjs';
import { build as reactBuilder } from './builders/react.mjs';

const rootDir = getWorkspaceRoot();

const filterNames = [];

const builders = {
  react: reactBuilder
};

async function handler(argv) {
  const { pkg } = argv;

  const builder = builders[pkg];

  if (!builder) {
    throw new Error(`Building package ${pkg} not supported`);
  }

  console.log(`Building ${pkg} package...`);

  const iconsDir = path.join(rootDir, 'icons');
  const iconsPaths = fs
    .readdirSync(iconsDir)
    .filter((iconPath) => !filterNames.includes(iconPath))
    .map((iconPath) => path.join(iconsDir, iconPath));

  const pkgDir = path.join(rootDir, `packages/icons-${pkg}`);

  await builder(pkgDir, iconsPaths);

  return console.log(`Finished building ${pkg} package.`);
}

yargs(hideBin(process.argv))
  .command(
    'build [pkg]',
    'Build icons for package',
    () => {},
    handler
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse();
