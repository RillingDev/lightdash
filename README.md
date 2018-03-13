# lightdash

## Introduction

An utility library written in TypeScript designed to be lightweight and modern. It's heavily inspired by lodash and underscore, but with the goal to be as small and fast as possible. It is completely written from scratch with the latest ES8 features.

**[Docs](https://felixrilling.github.io/lightdash/)**

Importing the modules you want from the file fitting your environment (`lightdash.common.js` for commonjs/node or `lightdash.esm.js` for ES modules) is recommended to drastically reduce file size by only using functions actually needed.

## Usage

Installation:

```shell
npm install --save lightdash
```

When using ES Modules:

```js
import { arrDifference } from "lightdash";

arrDifference([1, 2, 3], [1, 3]);
```

When using Node/CommonJS:

```js
const { arrDifference } = require("lightdash");

arrDifference([1, 2, 3], [1, 3]);
```

If you have to use lightdash directly in the browser, use the exposed `_l` namespace

```js
_l.arrDifference([1, 2, 3], [1, 3]);
```

## Contributing

Contributions are always welcome, no matter if you have a requests, an idea, found a bug, or spotted a typo: Feel free to create a PR or open an issue!
