#!/usr/bin/env node
import { validateArgs } from './lib/args.js';
import { validateConfig } from './lib/config.js';
import { copyFile, writeFile } from './lib/file.js';
import { createLicense } from './lib/license.js';
import { createPackage } from './lib/package.js';
import { createReadme } from './lib/readme.js';

const EDITORCONFIG = '.editorconfig';
const GITIGNORE = '.gitignore';
const LICENSE = 'license';
const PACKAGE = 'package.json';
const README = 'readme.md';

const init = () => {
  const args = validateArgs();
  if (args) {
    const config = validateConfig(args.config);
    if (config) {
      writeFile(LICENSE, createLicense(config));
      writeFile(PACKAGE, createPackage(config, args.name));
      writeFile(README, createReadme(args.name));
    }
    copyFile(EDITORCONFIG);
    copyFile(GITIGNORE);
  }
};

init();
