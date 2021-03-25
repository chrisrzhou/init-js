import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { concat } from './fp.js';

export { copyFile, getPackageFilepath, readFile, writeFile };

const PACKAGE_NAME = 'init-js';
const PACKAGE_PATH = path.resolve(
  process.argv[1],
  '../../lib/node_modules',
  PACKAGE_NAME,
);

const getPackageFilepath = concat(`${PACKAGE_PATH}/`);

const logCreateFile = (filename) =>
  console.log(`${filename} created successfully.`);

const copyFile = (filename) => {
  copyFileSync(getPackageFilepath(filename), filename);
  logCreateFile(filename);
};

const readFile = readFileSync;

const writeFile = (filename, data) => {
  writeFileSync(filename, data);
  logCreateFile(filename);
};
