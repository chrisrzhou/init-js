#!/usr/bin/env node

import { validateArgs } from './lib/args.js';
import { validateConfig } from './lib/config.js';
import {
  GITHUB_WORKFLOW_FOLDER,
  LIB_FOLDER,
  TEST_FOLDER,
  EDITORCONFIG_FILE,
  GITHUB_WORKFLOW_FILE,
  GITIGNORE_FILE,
  INDEX_FILE,
  INDEX_TEST_FILE,
  LICENSE_FILE,
  PACKAGE_JSON_FILE,
  README_FILE,
  TSCONFIG_JSON_FILE,
} from './lib/constants.js';
import { copyFile, createFolder, touchFile, writeFile } from './lib/file.js';
import { createLicense } from './lib/license.js';
import { createPackage } from './lib/package.js';
import { createReadme } from './lib/readme.js';

const run = () => {
  const args = validateArgs();
  if (args) {
    const config = validateConfig(args.config);
    if (config) {
      writeFile(LICENSE_FILE, createLicense(config));
      writeFile(PACKAGE_JSON_FILE, createPackage(args, config));
      writeFile(README_FILE, createReadme(args));
    }

    createFolder(GITHUB_WORKFLOW_FOLDER);
    createFolder(LIB_FOLDER);
    createFolder(TEST_FOLDER);

    touchFile(INDEX_FILE);
    touchFile(INDEX_TEST_FILE);
    copyFile(GITHUB_WORKFLOW_FILE);
    copyFile(EDITORCONFIG_FILE);
    copyFile(GITIGNORE_FILE);
    copyFile(TSCONFIG_JSON_FILE);
  }
};

run();
