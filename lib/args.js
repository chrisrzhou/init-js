export {validateArgs};

import minimist from 'minimist';

const validateArgs = () => {
  const args = {
    config: validateArg('config', false),
    github: validateArg('github'),
    name: validateArg('name'),
  };
  const isValid = args.github && args.name;
  return isValid ? args : null;
};

const argv = minimist(process.argv.slice(2));

const validateArg = (arg, isRequired = true) => {
  const hasValue = argv[arg] !== 'undefined';
  if (isRequired && !hasValue) {
    console.error(
      `Please specify the "${arg}" arg with a value (e.g. "--$${arg} ARG_VALUE)`,
    );
    return null;
  }

  return argv[arg];
};
