export { createReadme };

const createReadme = (config, name) => {
  const { user } = config.github;
  const repo = `${user}/${name}`;

  return [
    `# ${name}`,
    '',
    '[![Build][build-badge]][build]',
    '[![Coverage][coverage-badge]][coverage',
    '[![Downloads][downloads-badge]][downloads]',
    '[![Size][bundle-size-badge]][bundle-size]',
    '',
    '---',
    '',
    '## Intro',
    '',
    '## Install',
    '',
    '## Usage',
    '',
    '## API',
    '',
    '## Related',
    '',
    '<!-- badges -->',
    `[build-badge]: https://github.com/${repo}/workflows/main/badge.svg`,
    `[build]: https://github.com/${repo}/actions`,
    `[coverage-badge]: https://img.shields.io/codecov/c/github/${repo}.svg`,
    `[coverage]: https://codecov.io/github/${repo}`,
    `[downloads-badge]: https://img.shields.io/npm/dm/${name}.svg`,
    `[downloads]: https://www.npmjs.com/package/${name}`,
    `[bundle-size-badge]: https://img.shields.io/bundlephobia/minzip/${name}.svg`,
    `[bundle-size]: https://bundlephobia.com/result?p=${name}j`,
    '',
    '<!-- defs -->',
  ].join('\n');
};
