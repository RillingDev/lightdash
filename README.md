# lightdash

## Introduction

An utility library written in TypeScript designed to be lightweight and modern. It's heavily inspired by lodash and underscore, but with the goal to be as small and fast as possible, both in file size as in performance. It is completely written from scratch with the latest ES7 features.

Importing the modules you want from the file fitting your environment (`lightdash.common.js` for commonjs/node or `lightdash.esm.js` for ES modules) is recommended to drastically reduce file size by only using functions actually needed.

## Usage

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

## Contents

Most functions are very similar to their lodash counterparts, however some might behave a little different so make sure to check the docs.

**[Docs](https://felixrilling.github.io/lightdash/)**

For detailed descriptions and type annotations check the source or run `npm run docs`

## Contributing

Contributions are always welcome, no matter if you have a requests, an idea, found a bug, or spotted a typo: Feel free to create a PR or open an issue.

## Breaking Changes

### v3

* Renamed methods: arrClone -> arrFrom, objClone -> objFrom
* Removed methods: isSame, isTrue, isFalse, isStringNumber, arrMap
