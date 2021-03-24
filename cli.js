#!/usr/bin/env node
import { validateArgs } from './lib/args.js';
import { validateConfig } from './lib/config.js';
import { createLicense } from './lib/license.js';
import { createPackage } from './lib/package.js';
import { createReadme } from './lib/readme.js';
import { copyFile, logCreateFile, writeFile } from './lib/file.js';

const EDITORCONFIG = '.editorconfig';
const GITIGNORE = '.gitignore';
const LICENSE = 'license';
const PACKAGE = 'package.json';
const README = 'readme.md';

const init = () => {
  const args = validateArgs();
  const config = validateConfig();

  if (args && config) {
    const packageName = args.name;

    copyFile(EDITORCONFIG);
    logCreateFile(EDITORCONFIG);

    copyFile(GITIGNORE);
    logCreateFile(GITIGNORE);

    writeFile(LICENSE, createLicense(config));
    logCreateFile(LICENSE);

    writeFile(PACKAGE, createPackage(packageName, config));
    logCreateFile(PACKAGE);

    writeFile(README, createReadme(packageName, config));
    logCreateFile(README);
  }
};

init();
