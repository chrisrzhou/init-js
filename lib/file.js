import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { concat } from './fp.js';

export { copyFile, createFolder, getPackageFilepath, readFile, writeFile };

const PACKAGE_NAME = 'init-js';
const PACKAGE_PATH = path.resolve(
  process.argv[1],
  '../../lib/node_modules',
  PACKAGE_NAME,
);

const getPackageFilepath = concat(`${PACKAGE_PATH}/`);

const logCreateFile = (filename) =>
  console.log(`${filename} created successfully.`);

const createFolder = (folder) => {
  mkdirSync(folder, { recursive: true });
};

const copyFile = (filename) => {
  copyFileSync(getPackageFilepath(filename), filename);
  logCreateFile(filename);
};

const readFile = readFileSync;

const writeFile = (filename, data) => {
  writeFileSync(filename, data);
  logCreateFile(filename);
};
