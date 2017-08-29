# lightdash

> An utility library designed to be lightweight

## Introduction

This library is heavily inspired by lodash and underscore, but with the goal to be as lightweight as possible, both in filesize as in performance. It is completely written from scratch with the latest ES features.

When using this, importing the modules you want from the file fitting your enviroment (`lightdash.common.js` for commonjs/node or `lightdash.esm.js` for ES modules) is recommended.

## Contents

For detailed descriptions and type annotations check the source or run `npm run docs`

### is
- isSame
- isEqual
- isInstanceOf
- isTypeOf
- isUndefined
- isDefined
- isNil
- isBoolean
- isNumber
- isString
- isStringNumber
- isSymbol
- isObject
- isObjectLike
- isArray
- isArrayLike
- isMap
- isSet
- isDate
- isEmpty

### has
- hasKey
- hasPath

### get
- getPath

### number
- numberClamp
- numberIsInRange
- numberRandomFloat
- numberRandomInt

### forEach
- forEach
- forEachDeep
- forEachEntry
- forEachEntryDeep

### arr
- arrClone
- arrCloneDeep
- arrMap
- arrMapDeep
- arrFlattenDeep
- arrCompact

### obj
- objClone
- objCloneDeep
- objMap
- objMapDeep
- objKeys
- objValues
- objEntries

### map
- mapFromObject
