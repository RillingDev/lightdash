# lightdash

> A lightweight TypeScript utility library to complement lodash.

## Introduction

Lightdash is an extensive object of utility functions to complement [lodash](https://lodash.com/)
written in TypeScript, designed to be lightweight and modern.

**[Docs](https://felixrilling.github.io/lightdash/)**

## Usage

Installation:

```shell
npm install lightdash
```

When Using ES Modules:

```typescript
import { groupMapBy } from "lightdash";

groupMapBy([1, 2, 3, 4, 5], val => val % 2);
```

When using CommonJS (Node):

```typescript
const { groupMapBy } = require("lightdash");

groupMapBy([1, 2, 3, 4, 5], val => val % 2);
```

## Updating

### v10.x -> v11.x

Breaking:

- Made the library complement lodash rather than replace it. All duplicate methods have been removed.

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
