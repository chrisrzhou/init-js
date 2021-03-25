import { jsonStringify } from './fp.js';

export { createPackage };

const createPackage = (config, packageName) => {
  const { firstName, lastName, email, url, github } = config.author;
  const repository = `${github}/${packageName}`;

  const {
    name = packageName,
    version = '0.1.0',
    description = '',
    license = 'MIT',
    keywords = [],
    type = 'module',
    files = [],
    main = 'index.js',
    dependencies = {},
    devDependencies = {},
    scripts = {},
    ...rest
  } = config.package;

  const pkg = {
    name,
    version,
    description,
    license,
    keywords,
    repository,
    bugs: `https://github.com/${repository}/issues`,
    author: `${firstName} ${lastName} <${email}> (${url})`,
    type,
    files,
    main,
    dependencies,
    devDependencies,
    scripts,
    ...rest,
  };

  return jsonStringify(2)(pkg);
};
