/**
 * Checks if the value has a certain type-string.
 *
 * @function isTypeOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * isTypeOf({}, "object")
 * // => true
 *
 * isTypeOf([], "object")
 * // => true
 *
 * isTypeOf("foo", "string")
 * // => true
 *
 * @example
 * isTypeOf("foo", "number")
 * // => false
 */
const isTypeOf = (val, type) => typeof val === type;

/**
 * Checks if a value is a function.
 *
 * @function isFunction
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isFunction(function a(){})
 * // => true
 *
 * isFunction(Array.from)
 * // => true
 *
 * @example
 * isFunction(null)
 * // => false
 */
const isFunction = (val) => isTypeOf(val, "function");

/**
 * Checks if a value is an arguments array-like.
 *
 * @function isArguments
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const foo = function(){
 *   return arguments;
 * };
 *
 * isArguments(foo());
 * // => true
 *
 * @example
 * isArguments([]);
 * // => false
 */
const isArguments = (val) => isFunction(val.callee);

/**
 * Checks if a value is an array.
 *
 * `Array.isArray` shorthand.
 *
 * @function isArray
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArray([]);
 * // => true
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * @example
 * isArray({});
 * // => false
 */
const isArray = Array.isArray;

/**
 * Checks if the value is an instance of a target constructor.
 *
 * @function isInstanceOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {Class} target
 * @returns {boolean}
 * @example
 * isInstanceOf({}, Object)
 * // => true
 *
 * isInstanceOf([], Object)
 * // => true
 *
 * isInstanceOf([], Array)
 * // => true
 *
 * @example
 * isInstanceOf({}, Array)
 * // => false
 *
 * isInstanceOf([], Map)
 * // => false
 */
const isInstanceOf = (val, target) => val instanceof target;

/**
 * Checks if a value is an array-buffer.
 *
 * @function isArrayBuffer
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayBuffer(new ArrayBuffer())
 * // => true
 *
 * @example
 * isArrayBuffer([1, 2])
 * // => false
 */
// @ts-ignore: ArrayBuffer declaration is outdated
const isArrayBuffer = (val) => isInstanceOf(val, ArrayBuffer);

/**
 * Checks if a value is undefined.
 *
 * @function isUndefined
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const a = {};
 *
 * isUndefined(a.b)
 * // => true
 *
 * isUndefined(undefined)
 * // => true
 *
 * @example
 * const a = {};
 *
 * isUndefined(1)
 * // => false
 *
 * isUndefined(a)
 * // => false
 */
const isUndefined = (val) => isTypeOf(val, "undefined");

/**
 * Checks if a value is undefined or null.
 *
 * @function isNil
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 *
 * @example
 * isNil(0)
 * // => false
 *
 * isNil("")
 * // => false
 */
const isNil = (val) => isUndefined(val) || val === null;

/**
 * Checks if a value is not nil and has a type of object.
 *
 * The main difference to isObject is that functions are not considered object-like,
 * because `typeof function(){}` returns "function".
 *
 * @function isObjectLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([])
 * // => true
 *
 * @example
 * isObjectLike(1)
 * // => false
 *
 * isObjectLike(() => 1))
 * // => false
 */
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

/**
 * Checks if a value is object-like and has a length property.
 *
 * @function isArrayLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayLike([])
 * // => true
 *
 * isArrayLike({length: 0})
 * // => true
 *
 * @example
 * isArrayLike({})
 * // => false
 *
 * isArrayLike("foo")
 * // => false
 */
const isArrayLike = (val) => isObjectLike(val) && !isUndefined(val.length);

/**
 * Checks if a value is a number.
 *
 * @function isNumber
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isNumber(1)
 * // => true
 *
 * isNumber(2.34)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber(NaN)
 * // => true
 * // (NaN is considered a number, see IEEE_754)
 *
 * @example
 * isNumber("2")
 * // => false
 *
 * isNumber(null)
 * // => false
 */
const isNumber = (val) => isTypeOf(val, "number");

/**
 * Checks if a value is a typed array.
 *
 * @function isArrayTyped
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayTyped(new Int16Array());
 * // => true
 *
 * isArrayTyped(new Uint8Array());
 * // => true
 *
 * @example
 * isArrayTyped([]);
 * // => false
 */
const isArrayTyped = (val) => isNumber(val.BYTES_PER_ELEMENT);

/**
 * Checks if a value is a boolean.
 *
 * @function isBoolean
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * @example
 * isBoolean(0)
 * // => false
 *
 * isBoolean(null)
 * // => false
 *
 * isBoolean("")
 * // => false
 */
const isBoolean = (val) => isTypeOf(val, "boolean");

/**
 * Checks if a value is a date object.
 *
 * @function isDate
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isDate(Date())
 * // => true
 *
 * isDate(new Date())
 * // => true
 *
 * @example
 * isDate(123213231)
 * // => false
 */
const isDate = (val) => isInstanceOf(val, Date);

/**
 * Checks if a value is empty.
 *
 * A value is consider empty if it is either a primitive or an object-like without content.
 * Array-likes are considered empty if they have a length of zero,
 * Sets/Maps if they have a size of zero,
 * and Objects if their keys have a length of zero.
 *
 * @function isEmpty
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isEmpty([])
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty("")
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty(null)
 * // => true
 *
 * @example
 * isEmpty("foo")
 * // => false
 *
 * isEmpty([1, 2])
 * // => false
 *
 * isEmpty({a: 1})
 * // => false
 */
const isEmpty = (val) => {
    if (isArrayLike(val)) {
        return val.length === 0;
    }
    else if (!isUndefined(val.size)) {
        return val.size === 0;
    }
    else if (isObjectLike(val)) {
        return Object.keys(val).length === 0;
    }
    return true;
};

/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => a[key] = val * index)
 * // a = {a: 0, b: 2}
 */
const forEachEntry = (obj, fn) => {
    Object.entries(obj).forEach((entry, index) => {
        fn(entry[0], entry[1], index, obj);
    });
};

/**
 * Recursively checks if two items and their the contents are equal.
 *
 * @function isEqual
 * @memberof Is
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * isEqual(1, 1)
 * // => true
 *
 * isEqual({}, {})
 * // => true
 *
 * isEqual([1, 2], [1, 2])
 * // => true
 *
 * isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])
 * // => true
 *
 * @example
 * isEqual([1, 2, 3], [1])
 * // => false
 *
 * isEqual(1, true)
 * // => false
 */
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (isObjectLike(a) &&
        isObjectLike(b) &&
        Object.keys(a).length === Object.keys(b).length) {
        let result = true;
        forEachEntry(a, (key, aVal) => {
            // Only check if the comparison didn't fail already
            if (result === true) {
                if (!isUndefined(b[key])) {
                    result = isEqual(aVal, b[key]);
                }
                else {
                    result = false;
                }
            }
        });
        return result;
    }
    return false;
};

/**
 * Checks if a value is an error.
 *
 * @function isError
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isError(new Error())
 * // => true
 *
 * isError(new URIError())
 * // => true
 *
 * @example
 * isError("foo")
 * // => false
 */
const isError = (val) => isInstanceOf(val, Error);

/**
 * Checks if a value is a valid index.
 *
 * @function isIndex
 * @memberof Is
 * @since 5.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isIndex(0)
 * // => true
 *
 * isIndex(123)
 * // => true
 *
 * @example
 * isIndex(0.43)
 * // => false
 *
 * isIndex(-4)
 * // => false
 *
 * isIndex(Infinity)
 * // => false
 */
const isIndex = (val) => Number.isInteger(val) && val >= 0;

/**
 * Checks if a value is a map.
 *
 * @function isMap
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isMap(new Map())
 * // => true
 *
 * @example
 * isMap([[1, 2]])
 * // => false
 */
const isMap = (val) => isInstanceOf(val, Map);

/**
 * Checks if a value is an object.
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => true
 *
 * isObject(() => 1))
 * // => true
 *
 * @example
 * isObject(1)
 * // => false
 */
const isObject = (val) => !isNil(val) && (isTypeOf(val, "object") || isTypeOf(val, "function"));

/**
 * Checks if a value is a plain object.
 *
 * An object is considered plain of its direct constructor is the built-in object constructor.
 *
 * @function isObjectPlain
 * @memberof Is
 * @since 2.9.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isObjectPlain({})
 * // => true
 *
 * @example
 * isObjectPlain([])
 * // => false
 *
 * isObjectPlain(() => {})
 * // => false
 */
const isObjectPlain = (val) => isObject(val) && val.constructor === Object;

/**
 * Checks if a value is a promise.
 *
 * @function isPromise
 * @memberof Is
 * @since 3.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const foo = new Promise((resolve, reject) => resolve("foo"));
 *
 * isPromise(foo);
 * // => true
 *
 * @example
 * isPromise(() => "foo");
 * // => false
 */
const isPromise = (val) => isFunction(val.then) && isFunction(val.catch);

/**
 * Checks if a value is a regular expression.
 *
 * @function isRegExp
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isRegExp(new RegExp("foo"))
 * // => true
 *
 * isRegExp(/foo/)
 * // => true
 *
 * @example
 * isRegExp("foo")
 * // => false
 */
// @ts-ignore: RegExp declaration is outdated
const isRegExp = (val) => isInstanceOf(val, RegExp);

/**
 * Checks if a value is a set.
 *
 * @function isSet
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isSet(new Set())
 * // => true
 *
 * @example
 * isSet([1, 2])
 * // => false
 */
const isSet = (val) => isInstanceOf(val, Set);

/**
 * Checks if a value is a string.
 *
 * @function isString
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isString("foo")
 * // => true
 *
 * @example
 * isString(1)
 * // => false
 */
const isString = (val) => isTypeOf(val, "string");

/**
 * Checks if a value is a symbol.
 *
 * @function isSymbol
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isSymbol(Symbol())
 * // => true
 *
 * isSymbol(Symbol.split)
 * // => true
 *
 * @example
 * isSymbol("foo")
 * // => false
 */
const isSymbol = (val) => isTypeOf(val, "symbol");

/**
 * Accesses a target by a path-array of key-strings.
 *
 * If the path doesn't exist, null is returned.
 *
 * @function getPath
 * @memberof Get
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * getPath({a: 1}, ["a"]);
 * // => 1
 *
 * getPath([4, 6, 8], ["1"]);
 * // => 6
 *
 * getPath({a: {b: 2, c: [10, 20]}}, ["a", "c", "0"]);
 * // => 10
 */
const getPath = (target, path) => {
    let targetCurrent = target;
    let index = 0;
    while (!isUndefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];
        if (isUndefined(targetCurrent[keyCurrent])) {
            return null;
        }
        targetCurrent = targetCurrent[keyCurrent];
        index++;
    }
    return targetCurrent;
};

/**
 * Checks if a target has a path-array of key-strings.
 *
 * @function hasPath
 * @memberof Has
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * hasPath({a: 1}, ["a"]);
 * // => true
 *
 * hasPath([4, 6, 8], ["1"]);
 * // => true
 *
 * hasPath({a: {b: 2, c: [10, 20]}}, ["a", "c", "0"]);
 * // => true
 *
 * @example
 * hasPath({a: 1}, ["c"]);
 * // => false
 *
 * hasPath([4, 6, 8], ["8"]);
 * // => false
 *
 * hasPath({a: {b: 2, c: [10, 20]}}, ["f", "x", "231", "21"]);
 * // => false
 *
 * hasPath(1, ["foo"]);
 * // => false
 */
const hasPath = (target, path) => !isNil(getPath(target, path));

/**
 * Recursively iterates over each element in an array
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => arr[index] = index * val)
 * // a = [0, 4, [0, 1, [0], 12]]
 */
const forEachDeep = (arr, fn) => arr.forEach((val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively iterates over each entry of an object
 *
 * @function forEachEntryDeep
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * const a = {a: 1, b: {c: [1, 2]}};
 *
 * forEachEntryDeep(a, (key, val, index, obj) => obj[key] = index * val)
 * // a = {a: 0, b: {c: [0, 2]}}
 */
const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (key, val, index) => isObjectLike(val)
    ? forEachEntryDeep(val, fn)
    : fn(key, val, index, obj));

/**
 * Creates an array of elements split into groups by size.
 *
 * @function arrChunk
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {number} chunk
 * @returns {any[]}
 * @example
 * arrChunk([1, 2, 3, 4, 5, 6], 2)
 * // => [[1, 2], [3, 4], [5, 6]]
 *
 * arrChunk([1, 2, 3, 4, 5], 3)
 * // => [[1, 2, 3], [4, 5]]
 */
const arrChunk = (arr, chunk) => {
    if (!isIndex(chunk) || chunk === 0) {
        return [];
    }
    const result = [];
    for (let i = 0; i < arr.length; i += chunk) {
        result.push(arr.slice(i, i + chunk));
    }
    return result;
};

/**
 * Returns an array with every falsey value removed out.
 *
 * @function arrCompact
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 * // => [1, 2, 3, 4, 5]
 */
const arrCompact = (arr) => arr.filter((val) => val);

/**
 * Counts how many times an element appears in an array.
 *
 * @function arrCount
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>} Map<element: any, count: number>
 * @example
 * arrCount([1, 1, 2, 2, 1, 3, 4, 1])
 * // => Map<any, number>{1: 4, 2: 2, 3: 1, 4: 1}
 */
const arrCount = (arr) => {
    const result = new Map();
    arr.forEach(val => result.set(val, result.has(val) ? result.get(val) + 1 : 1));
    return result;
};

/**
 * Returns an array of all elements that exist in the first array, but not any others.
 *
 * @function arrDifference
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * arrDifference([1, 2, 3], [1, "foo", 3])
 * // => [2]
 *
 * arrDifference([1, 2, 3], ["foo"], [2, 0, 2])
 * // => [1, 3]
 */
const arrDifference = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    // @ts-ignore: ts seems to pull the wrong data for arrCount
    return arr.filter(item => !valuesCounted.has(item));
};

/**
 * Recursively flattens an array.
 *
 * @function arrFlattenDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * arrFlattenDeep([1, 2, [3]])
 * // => [1, 2, 3]
 *
 * arrFlattenDeep([1, 2, [3, [[[5]]], [6, [6]]])
 * // => [1, 2, 3, 5, 6, 6]
 */
const arrFlattenDeep = (arr) => {
    const result = [];
    arr.forEach(val => {
        if (isArray(val)) {
            result.push(...arrFlattenDeep(val));
        }
        else {
            result.push(val);
        }
    });
    return result;
};

/**
 * Recursively maps the values of the input array with the iterator function and return the result.
 *
 * @function arrMapDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 * @example
 * arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)
 * // => [4, 8, [2, 2, [32], 8]]
 */
const arrMapDeep = (arr, fn) => arr.map((val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively creates a new array with the values of the input iterable.
 *
 * @function arrFromDeep
 * @memberof Array
 * @since 2.0.0
 * @param {any} arr
 * @returns {any[]}
 * @example
 * const a = [1, 2, 3, [5, [6]]];
 * const b = arrFromDeep(a);
 *
 * b[3][1][0] = 10;
 * // a = [1, 2, 3, [5, [6]]]
 * // b = [1, 2, 3, [5, [10]]]
 */
const arrFromDeep = (arr) => arrMapDeep(Array.from(arr), val => (isArray(val) ? Array.from(val) : val));

/**
 * Returns an array of all elements that exist in the first array and at least once in one of the other arrays.
 *
 * @function arrIntersection
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @param {...any[]} values
 * @returns {any[]}
 * @example
 * arrIntersection([1, 2, 3], [1, "foo", 3])
 * // => [1, 3]
 *
 * arrIntersection([1, 2, 3], ["foo"], [2, 0, 2])
 * // => [2]
 */
const arrIntersection = (arr, ...values) => {
    const valuesCounted = arrCount([].concat(...values));
    // @ts-ignore: ts seems to pull the wrong data for arrCount
    return arr.filter(item => valuesCounted.has(item));
};

/**
 * Returns a new array with the item at the index removed.
 *
 * @function arrRemoveIndex
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {number} index
 * @returns {any[]}
 * @example
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = (arr, index) => {
    if (!isIndex(index) || index > arr.length) {
        return arr;
    }
    return index === 0
        ? arr.slice(1)
        : arr.slice(0, index).concat(arr.slice(index + 1));
};

/**
 * Returns a new array with the first occurrence of the item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} item
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz"], "bar")
 * // => ["foo", "fizz"]
 */
const arrRemoveItem = (arr, item) => arr.includes(item) ? arrRemoveIndex(arr, arr.indexOf(item)) : arr;

/**
 * Returns a new array with every n-th item from the input array.
 *
 * @function arrStep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {number} step
 * @returns {any[]}
 * @example
 * arrStep([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const arrStep = (arr, step) => arr.filter((val, index) => index % step === 0);

/**
 * Returns an array of all unique elements in an array.
 *
 * @function arrUniq
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])
 * // => [1, 2, 3, 4]
 */
const arrUniq = (arr) => Array.from(new Set(arr));

/**
 * Creates a new object with the entries of the input object.
 *
 * @function objFrom
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * const a = {a: 4, b: 2};
 * const b = objFrom(a);
 *
 * b.a = 10;
 * // a = {a: 4, b: 2}
 * // b = {a: 10, b: 2}
 */
const objFrom = (obj) => Object.assign({}, obj);

/**
 * Sets every nil property of object to the value from the default object.
 *
 * @function objDefaults
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * objDefaults({a: 1, c: 5}, {a: 1, b: 2, c: 3})
 * // => {a: 1, b: 2, c: 5}
 */
const objDefaults = (obj, objDefault) => {
    const result = isArray(obj) ? Array.from(obj) : objFrom(obj);
    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (isUndefined(obj[keyDefault])) {
            result[keyDefault] = valDefault;
        }
    });
    return result;
};

/**
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 * // => {a: 8, b: 4}
 */
const objMap = (obj, fn) => {
    const objNew = {};
    forEachEntry(obj, (key, val, index) => {
        objNew[key] = fn(key, val, index, obj);
    });
    return objNew;
};

/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
const objMapDeep = (obj, fn) => objMap(obj, (key, val, index, objNew) => isObjectLike(val)
    ? objMapDeep(val, fn)
    : fn(key, val, index, objNew));

/**
 * Deeply creates a new object with the entries of the input object.
 *
 * @function objFromDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Object}
 * @example
 * const a = {a: {b: 2, c: {a: 10, b: 20}}};
 * const b = objFromDeep(a);
 *
 * b.a.c.a = 123;
 * // a = {a: {b: 2, c: {a: 10, b: 20}}
 * // b = {a: {b: 2, c: {a: 123, b: 20}}}
 */
const objFromDeep = (obj) => objMapDeep(objFrom(obj), (key, val) => (isObjectLike(val) ? objFrom(val) : val));

/**
 * Recursively sets every nil property of object to the value from the default object.
 *
 * @function objDefaultsDeep
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * objDefaultsDeep({a: [1, 2], c: {f: "x"}}, {a: [1, 2, 3], b: 2, c: {f: "y"}})
 * // => {a: [1, 2, 3], b: 2, c: {f: "x"}}
 */
const objDefaultsDeep = (obj, objDefault) => {
    const result = isArray(obj) ? Array.from(obj) : objFromDeep(obj);
    forEachEntry(objDefault, (keyDefault, valDefault) => {
        const valGiven = obj[keyDefault];
        if (isObjectLike(valDefault)) {
            result[keyDefault] = isObjectLike(valGiven)
                ? objDefaultsDeep(valGiven, valDefault)
                : valDefault;
        }
        else {
            result[keyDefault] = isUndefined(valGiven) ? valDefault : valGiven;
        }
    });
    return result;
};

/**
 * Creates a map from an object.
 *
 * @function mapFromObject
 * @memberof Map
 * @since 1.0.0
 * @param {Object} obj
 * @returns {Map}
 * @example
 * mapFromObject({a: 1, b: 4, c: 5})
 * // => Map<string,number>{a: 1, b: 4, c: 5}
 */
const mapFromObject = (obj) => new Map(Object.entries(obj));

/**
 * Wrapper around try/catch.
 *
 * Returns the function result or, if an error is thrown, the error.
 *
 * @function fnAttempt
 * @memberof Fn
 * @since 3.2.0
 * @param {Function} fn
 * @param {...any[]} args
 * @returns {any|error}
 * @example
 * const foo = (a, b) => {
 *  if(b > 10){
 *    throw new RangeError();
 *  }
 *
 *  return a + b;
 * };
 *
 * fnAttempt(foo, 2, 1)
 * // => 3
 *
 * fnAttempt(foo, 2, 500)
 * // => RangeError
 */
const fnAttempt = (fn, ...args) => {
    try {
        return fn(...args);
    }
    catch (err) {
        return err;
    }
};

/**
 * Returns a curried function.
 *
 * A curried function can take between zero and n arguments,
 * where n is either the functions argument length or the provided arity.
 * As soon as n arguments are reached, the function is run with all arguments
 *
 * @function fnCurry
 * @memberof Fn
 * @since 3.2.0
 * @param {Function} fn
 * @param {number} [arity=fn.length]
 * @returns {Function}
 * @example
 * const foo = (a, b, c) => [a, b, c];
 * const fooCurried = fnCurry(foo);
 *
 * fooCurried(1)(2)(3)
 * // => [1, 2, 3]
 *
 * fooCurried(1, 2)(3)
 * // => [1, 2, 3]
 *
 * fooCurried(1, 2, 3)
 * // => [1, 2, 3]
 */
const fnCurry = (fn, arity = fn.length) => {
    // tslint:disable-next-line
    const resolver = function () {
        const argsBase = arguments;
        // tslint:disable-next-line
        return function () {
            const args = [...argsBase, ...arguments];
            const result = args.length >= arity ? fn : resolver;
            return result(...args);
        };
    };
    return resolver();
};

/**
 * Throttles a function to only run every n ms.
 *
 * Useful for event handlers that fire several times a second, such as scroll or resize
 *
 * @function fnThrottle
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn
 * @param {number} timeout
 * @param {boolean} [immediate=false]
 * @returns {Function}
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function can only run every 500ms
 */
const fnThrottle = (fn, timeout, immediate = false) => {
    const getTimer = () => setTimeout(() => {
        canRun = true;
        clearTimeout(timer);
    }, timeout);
    let canRun = immediate;
    let timer = immediate ? -1 : getTimer();
    return function () {
        if (canRun) {
            canRun = false;
            timer = getTimer();
            // @ts-ignore
            return fn.apply(this, arguments);
        }
    };
};

/**
 * Returns the sum of an array of numbers.
 *
 * @function numSum
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * numSum([1, 2.5, 3.3])
 * // => 6.8
 */
const numSum = (arr) => arr.reduce((a, b) => a + b);

/**
 * Returns the average of an array of numbers.
 *
 * @function numAverage
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * numAverage([1, 2.5, 3.3])
 * // => 2.2666
 */
const numAverage = (arr) => numSum(arr) / arr.length;

/**
 * Clamps a number in a given range.
 *
 * @function numberClamp
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * numberClamp(5, 0, 10)
 * // => 5
 *
 * numberClamp(-2, 0, 10)
 * // => 0
 *
 * numberClamp(99, 0, 10)
 * // => 10
 */
const numberClamp = (val, min, max) => {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    return val;
};

/**
 * Return a random float or integer number in the given range.
 *
 * @function randNumber
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0]
 * @param {number} [max=1]
 * @param {boolean} [floating=false]
 * @returns {number}
 * @example
 * randNumber()
 * // => 1
 *
 * randNumber(0, 100)
 * // => 54
 *
 * randNumber(2, 10, true)
 * // => 6.23132496
 */
const randNumber = (min = 0, max = 1, floating = false) => {
    const diff = max - min;
    if (diff === 0) {
        return min;
    }
    const rand = min + Math.random() * diff;
    return floating ? rand : Math.floor(rand / diff * (diff + 1));
};

/**
 * Return a random item from an array.
 *
 * @function randItem
 * @memberof Random
 * @since 3.0.0
 * @param {any[]} arr
 * @returns {any}
 * @example
 * randItem(["foo", "bar"])
 * // => "foo"
 *
 * randItem([1, 2, 3, 4, 5])
 * // => 3
 */
const randItem = (arr) => arr[randNumber(0, arr.length - 1)];

/**
 * Shuffles an array randomly and returns it.
 *
 * Fisher Yates Shuffle Algorithm.
 *
 * @function randShuffle
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr
 * @returns {any[]}
 * @example
 * randShuffle([1,2,3])
 * // => [3,1,2]
 */
const randShuffle = (arr) => {
    let input = Array.from(arr);
    const result = [];
    while (result.length < arr.length) {
        const index = randNumber(0, arr.length - 1);
        const val = input[index];
        result.push(val);
        input = arrRemoveIndex(input, index);
    }
    return result;
};

/**
 * Binary Search implementation.
 *
 * @function algBinarySearch
 * @memberof Algorithm
 * @since 5.0.0
 * @param {number[]} arr
 * @param {number} search
 * @returns {number|null}
 * @example
 * algBinarySearch([0,1,2],2)
 * // => 1
 *
 * algBinarySearch([0,1,2], 100)
 * // => null
 */
const algBinarySearch = (arr, search) => {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        const current = arr[mid];
        if (current === search) {
            return mid;
        }
        else if (current < search) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return null;
};

/**
 * Value checking, type checking, and comparison
 * @namespace Is
 */
/**
 * Check if a target has something
 * @namespace Has
 */
/**
 * Get value from a target
 * @namespace Get
 */
/**
 * Looping through ranges, arrays and objects
 * @namespace For
 */
/**
 * Array manipulation and analysis
 * @namespace Array
 */
/**
 * Object manipulation and analysis
 * @namespace Object
 */
/**
 * Map manipulation
 * @namespace Map
 */
/**
 * Function manipulation
 * @namespace Fn
 */
/**
 * Number manipulation and comparison
 * @namespace Number
 */
/**
 * Random number generation and value picking
 * @namespace Random
 */
/**
 * Generic algorithms
 * @namespace Algorithm
 */

export { isEqual, isInstanceOf, isTypeOf, isUndefined, isNil, isNumber, isString, isBoolean, isSymbol, isObject, isObjectLike, isObjectPlain, isArray, isArrayLike, isArrayBuffer, isArrayTyped, isPromise, isMap, isSet, isDate, isRegExp, isFunction, isArguments, isError, isEmpty, isIndex, hasPath, getPath, forEachDeep, forEachEntry, forEachEntryDeep, arrFromDeep, arrMapDeep, arrFlattenDeep, arrCompact, arrChunk, arrStep, arrRemoveIndex, arrRemoveItem, arrCount, arrDifference, arrIntersection, arrUniq, objFrom, objFromDeep, objMap, objMapDeep, objDefaults, objDefaultsDeep, mapFromObject, fnThrottle, fnAttempt, fnCurry, numberClamp as numClamp, numSum, numAverage, numAverage as numMedian, randNumber, randItem, randShuffle, algBinarySearch };
