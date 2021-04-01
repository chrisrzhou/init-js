#!/usr/bin/env node
import { validateArgs } from './lib/args.js';
import { validateConfig } from './lib/config.js';
import {
  GITHUB_WORKFLOW_FOLDER,
  GITHUB_WORKFLOW_FILE,
  EDITORCONFIG_FILE,
  GITIGNORE_FILE,
  LICENSE_FILE,
  PACKAGE_JSON_FILE,
  README_FILE,
} from './lib/constants.js';
import { copyFile, createFolder, writeFile } from './lib/file.js';
import { createLicense } from './lib/license.js';
import { createPackage } from './lib/package.js';
import { createReadme } from './lib/readme.js';

const init = () => {
  const args = validateArgs();
  if (args) {
    const config = validateConfig(args.config);
    if (config) {
      writeFile(LICENSE_FILE, createLicense(config));
      writeFile(PACKAGE_JSON_FILE, createPackage(args, config));
      writeFile(README_FILE, createReadme(args));
    }
    createFolder(GITHUB_WORKFLOW_FOLDER);
    copyFile(GITHUB_WORKFLOW_FILE);
    copyFile(EDITORCONFIG_FILE);
    copyFile(GITIGNORE_FILE);
  }
};

init();
