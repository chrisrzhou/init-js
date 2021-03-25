import { concat, pipe } from './fp.js';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';

export { copyFile, logCreateFile, readFile, writeFile };

const PACKAGE_NAME = 'init-js';
const PACKAGE_PATH = `./node_modules/${PACKAGE_NAME}/`;

const getFilepath = concat(PACKAGE_PATH);

const logCreateFile = (filename) =>
  console.log(`${filename} created successfully.`);

const copyFile = (filename) => copyFileSync(getFilepath(filename), filename);

const readFile = pipe([getFilepath, readFileSync]);

const writeFile = writeFileSync;
