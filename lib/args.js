import { find, isTruthy, pipe, test, validate } from './fp.js';

export { validateArgs };

const getArgRegexp = (key) => new RegExp(`^--${key}=(.+)$`);

const validateArg = (key) => {
  const argRegexp = getArgRegexp(key);
  const args = process.argv.slice(2);
  const validator = (arg) => arg.match(argRegexp)[1];
  const error = `Please specify the "${key}" arg with --${key}=<VALUE>"`;
  return pipe([
    find(test(argRegexp)),
    validate([error, validator]),
  ])(args)
};

const validateArgs = () => {
  const name = validateArg('name');
  const args = { name };
  const isValid = isTruthy(name);
  return isValid ? args : null;
};
