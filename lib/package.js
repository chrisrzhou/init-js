import { jsonStringify } from './fp.js';

export { createPackage };

const createPackage = (args, config) => {
  const { firstName, lastName, email, url } = config.author;
  const { github, name } = args;
  const repository = `${github}/${name}`;

  const {
    version = '0.1.0',
    description = '',
    license = 'MIT',
    keywords = [],
    type = 'module',
    files = [],
    main = 'index.js',
    types,
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
    types,
    dependencies,
    devDependencies,
    scripts,
    ...rest,
  };

  return jsonStringify(2)(pkg);
};
