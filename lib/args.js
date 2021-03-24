import minimist from 'minimist';

export { validateArgs };

const validateArgs = () => {
  const args = minimist(process.argv.slice(2));

  let isValid = false;
  if (!args.name) {
    console.error(
      'Please provide the package name with "--name=<PACKAGE_NAME>"',
    );
  } else {
    isValid = true;
  }

  return isValid ? args : null;
};
