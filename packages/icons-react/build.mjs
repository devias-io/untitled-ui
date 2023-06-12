import childProcess from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { promisify } from 'node:util';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const exec = promisify(childProcess.exec);

function ensureWrite(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, 'utf8');
}

function ensureWriteJson(file, json) {
  ensureWrite(file, JSON.stringify(json, null, 2));
}

async function handler(argv) {
  const { bundle } = argv;

  const useESModules = bundle === 'esm';

  const env = {
    BABEL_ENV: bundle
  };

  const srcDir = path.resolve('./src');
  const outDir = path.resolve(
    path.join('./build', useESModules ? 'esm' : 'cjs')
  );
  const extensions = ['.js', '.ts', '.tsx'];
  const babelConfigPath = path.resolve('./babel.config.js');

  const babelArgs = [
    srcDir,
    '--out-dir',
    outDir,
    '--extensions',
    `"${extensions.join(',')}"`,
    '--config-file',
    babelConfigPath
  ];

  const command = ['npx babel', ...babelArgs].join(' ');

  const { stderr, stdout } = await exec(command, {
    env: { ...process.env, ...env }
  });

  if (stderr) {
    throw new Error(`'${command}' failed with \n${stderr}`);
  }

  console.log(stdout);

  if (useESModules) {
    ensureWriteJson(path.join(outDir, 'package.json'), {
      type: 'module'
    });
  }
}

yargs(hideBin(process.argv))
  .command('build [bundle]', 'Build bundle', () => {}, handler)
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .parse();
