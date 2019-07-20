# lightdash

> A lightweight TypeScript utility library inspired by lodash.

## Introduction

Lightdash is an extensive object of utility functions written in TypeScript, designed to be lightweight and modern.
It's heavily inspired by lodash and underscore, but with the goal to be tiny and as fast as possible.
It is completely written from scratch with the latest ES8+ features.

**[Docs](https://felixrilling.github.io/lightdash/)**

## Usage

Installation:

```shell
npm install lightdash
```

When Ssing ES Modules:

```typescript
import { arrDifference } from "lightdash";

arrDifference([1, 2, 3], [1, 3]);
```

When using CommonJS (Node):

```typescript
const { arrDifference } = require("lightdash");

arrDifference([1, 2, 3], [1, 3]);
```

If you use lightdash directly in the browser, use the exposed `_l` namespace.

```typescript
_l.arrDifference([1, 2, 3], [1, 3]);
```

## Updating

### v9.x -> v10.x

Breaking:

- changed entry iteration from key,val,index,object to val,key,object
- removed isArray and strFromCamelCase (use Array.isArray and strFromPascalCase instead)
- removed "immediate" param for fn* methods

### v8.x -> v9.x

Breaking:

- Merged arrRemoveItem and arrRemoveItemFirst
- Removed isArguments and isNull
- Removed numSum, numMedian and numAverage
- Removed fnCurry
- Removed hasPath

## Contributing

Contributions are always welcome, no matter if you have a requests, an idea, found a bug, or spotted a typo: Feel free to create a PR or open an issue!
