# lightdash

## Introduction

An utility library designed to be lightweight and modern. It's heavily inspired by lodash and underscore, but with the goal to be as lightweight as possible, both in file size as in performance. It is completely written from scratch with the latest ES features.

When using this, importing the modules you want from the file fitting your environment (`lightdash.common.js` for commonjs/node or `lightdash.esm.js` for ES modules) is recommended to drastically reduce file size by only using functions actually needed.

## Usage

```shell
npm install --save lightdash
```

When using ES Modules:

```js
import {
    arrDifference
} from "lightdash";

arrDifference([1,2,3], [1,3]);
```

When using Node/CommonJS:

```js
const {
    arrDifference
} = require("lightdash");

arrDifference([1,2,3], [1,3]);
```

## Contents

Most functions are very similar to their lodash counterparts, however some might behave a little different so make sure to check the docs.

**[Docs](https://felixrilling.github.io/lightdash/)**

For detailed descriptions and type annotations check the source or run `npm run docs`
