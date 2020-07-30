# lightdash

> A small TypeScript utility library to complement lodash.

## Introduction

Lightdash is a utility library aiming to complement [lodash](https://lodash.com/),
written in TypeScript.

**[Docs](https://felixrilling.github.io/lightdash/)**

## Usage

Installation:

```shell
npm install lightdash
```

When using ES Modules:

```typescript
import { groupMapBy } from "lightdash";

groupMapBy([1, 2, 3, 4, 5], (val) => val % 2);
```

When using CommonJS (e.g. Node):

```typescript
const { groupMapBy } = require("lightdash");

groupMapBy([1, 2, 3, 4, 5], (val) => val % 2);
```

## Contributing

Contributions are always welcome, no matter if you have a request, an idea, found a bug, or spotted a typo: Feel free to create a PR or open an issue!
