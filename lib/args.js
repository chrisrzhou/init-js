import { find, k, pipe, test, validate } from './fp.js';

export { validateArgs };

const getArgRegexp = (key) => new RegExp(`^--${key}=(.+)$`);

const validateArg = (key, skipError) => {
  const argRegexp = getArgRegexp(key);
  const args = process.argv.slice(2);
  const validator = (arg) => arg.match(argRegexp)[1];
  const left = skipError
    ? null
    : k(`Please specify the "${key}" arg with --${key}=<VALUE>"`);
  return pipe([find(test(argRegexp)), validate([left, validator])])(args);
};

const validateArgs = () => {
  const args = {
    config: validateArg('config', true),
    github: validateArg('github'),
    name: validateArg('name'),
  };
  const isValid = args.github && args.name;
  return isValid ? args : null;
};
