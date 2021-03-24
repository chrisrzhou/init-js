import { copyFileSync, readFileSync, writeFileSync } from 'fs';

export { copyFile, logCreateFile, readFile, writeFile };

const PACKAGE_NAME = 'init-js';
const PACKAGE_PATH = `./node_modules/${PACKAGE_NAME}`;

const getFilepath = (filename) => `${PACKAGE_PATH}/${filename}`;

const logCreateFile = (filename) =>
  console.log(`${filename} created successfully.`);

const copyFile = (filename) => copyFileSync(getFilepath(filename), filename);

const readFile = (filename) => readFileSync(getFilepath(filename), 'utf8');

const writeFile = (filename, data) => writeFileSync(filename, data);
