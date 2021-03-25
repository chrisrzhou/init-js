# init-js

Initialize JS projects.

---

## Intro
An simple config-driven CLI to initialize JS projects.

The base config is personalized for use by the [author][].

## Install

Install **globally** from the [Github][] repo.

```js
npm install -g chrisrzhou/init-js
```

> Note: this project will most likely **never** be formalized as an NPM package.

## Use

`init-js` is an [ESM][] and requires at least Node 12+.

```sh
init-js --name=my-package-name
```

Creates the following minimal files
- `.editorconfig`
- `.gitignore`
- `license` (MIT)
- `package.json`
- `readme.md`

### Config

You can either update the source `config.json` file or specify the `--config` argument to configure the initialization script.

```sh
init-js --name=my-package-name --config=path/to/config
```

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
