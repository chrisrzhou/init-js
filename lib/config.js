import { readFile } from './file.js';
import { jsonParse, pipe, validate } from './fp.js';

export { validateConfig };

const validateConfig = () => {
  const validator = pipe([readFile, jsonParse]);
  return validate([null, validator])('config.json');
};
