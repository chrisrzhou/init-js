import { closeSync, copyFileSync, mkdirSync, openSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { concat } from './fp.js';

export { copyFile, createFolder, getPackageFilepath, readFile, touchFile, writeFile };

const PACKAGE_NAME = 'init-js';
const PACKAGE_PATH = path.resolve(
  process.argv[1],
  '../../lib/node_modules',
  PACKAGE_NAME,
);

const getPackageFilepath = concat(`${PACKAGE_PATH}/`);

const logCreateFile = (path) =>
  console.log(`${path} created successfully.`);

const createFolder = (path) => {
  mkdirSync(path, { recursive: true });
};

const copyFile = (path) => {
  copyFileSync(getPackageFilepath(path), path);
  logCreateFile(path);
};

const readFile = readFileSync;

const touchFile = path => {
  closeSync(openSync(path, 'w'));
  logCreateFile(path);
}

const writeFile = (path, data) => {
  writeFileSync(path, data);
  logCreateFile(path);
};
