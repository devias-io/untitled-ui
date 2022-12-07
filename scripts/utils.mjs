import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

export function getWorkspaceRoot() {
  const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));
  return path.resolve(currentDirectory, '../');
}

export function ensureWrite(file, text) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text, 'utf8');
}
