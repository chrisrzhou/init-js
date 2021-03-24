# init-js

Initialize JS projects.

---

## Intro
An simple config-driven CLI to initialize JS projects with minimal and consistent files.

The base config is personalized for use by the [author][].

## Install

Install globally from the [Github][] repo.

```js
npm install -g chrisrzhou/init-js
```

> Note: this project will likely **never** be formalized as an NPM package.

## Use

`init-js` is an [ESM][] and requires at least Node 12+.

Update fields in `config.json` and execute with

```js
init-js
```

Creates the following files
- `.editorconfig`
- `.gitignore`
- `license` (MIT)
- `package.json`
- `readme.md`

## Config

The `config.json` file provides relevant data for the initialization script.

```ts
interface Config {
  author: {
    firstName: string;
    lastName: string;
    email: string;
    url: string;
    github: string;
  };
  package: NodePackageInterface; // https://nodejs.dev/learn/the-package-json-guide
};
```

## Todo
- [ ] Update CLI to support `--config=<CONFIG_PATH>`

<!-- defs -->
[author]: https://github.com/chrisrzhou
[esm]: https://nodejs.org/api/esm.html
[github]: https://github.com/chrisrzhou/init-js
