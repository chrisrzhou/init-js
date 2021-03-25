# init-js

An simple config-driven CLI to initialize JS projects.

---

## Install

You may install globally with NPM from the [Github][] repo but it is recommended to [use](#use) directly with `npx` as detailed in the next section.

```sh
npm install -g chrisrzhou/init-js
```

## Use

`init-js` is an [ESM][] and requires at least Node 12+.

Use with `npx`:

```sh
npx init-js --name=my-package-name
```

The `--name` argument is required and will be used across initialized files.

Creates the following files:
- `.editorconfig`
- `.gitignore`
- `license` (MIT)
- `package.json`
- `readme.md`

### Config

You can use a custom config file with the `--config`.

The base config is personalized for use by the [author][].

```sh
npx init-js --name=my-package-name --config=path/to/my-config.json
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

<!-- defs -->
[author]: https://github.com/chrisrzhou
[esm]: https://nodejs.org/api/esm.html
[github]: https://github.com/chrisrzhou/init-js
