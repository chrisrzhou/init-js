export {validateConfig};

import {getPackageFilepath, readFile} from './file.js';
import {pipe, prop, validate} from './fp.js';

const validateConfig = (configPath) => {
  const resolvedConfigPath = configPath || getPackageFilepath('config.json');
  const validator = pipe([readFile, JSON.parse]);
  return validate([prop('message'), validator])(resolvedConfigPath);
};
