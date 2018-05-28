'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
// @ts-ignore: ArrayBuffer declaration is invalid
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
 * Gets size of a value.
 *
 * If the value has a length or size property, the value of that is returned.
 * If the value is object-like, the length of its entries is returned.
 * Otherwise -1 is returned.
 *
 * @function getSize
 * @memberof Get
 * @since 6.0.0
 * @param {any} val
 * @returns {number}
 * @example
 * getSize([1,2])
 * // => 2
 *
 * getSize({a:1})
 * // => 1
 *
 * getSize(new Set())
 * // => 0
 *
 * isEmpty("foo")
 * // => 3
 *
 * isEmpty(1)
 * // => -1
 *
 * isEmpty(null)
 * // => -1
 */
const getSize = (val) => {
    if (isNil(val)) {
        return -1;
    }
    else if (isArrayLike(val) || isString(val)) {
        return val.length;
    }
    else if (!isUndefined(val.size)) {
        return val.size;
    }
    else if (isObjectLike(val)) {
        return Object.keys(val).length;
    }
    return -1;
};

/**
 * Checks if a value is empty.
 *
 * A value is consider empty if it is either a primitive or an object-like without content.
 * Array-likes and strings are considered empty if they have a length of zero,
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
const isEmpty = (val) => getSize(val) < 1;

/**
 * Iterates over each entry of an object.
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
    if (!isObjectLike(a) ||
        !isObjectLike(b) ||
        Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
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
// @ts-ignore: RegExp declaration is invalid
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
 * Returns a targets value in a given path.
 *
 * If the path doesn't exist in the target, null is returned.
 *
 * @function getPath
 * @memberof Get
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {null|any}
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
 * Checks if a target has a given path.
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
 * Binary Search implementation.
 *
 * @function numBinarySearch
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @param {number} search
 * @returns {number|null}
 * @example
 * numBinarySearch([0, 1, 2], 2)
 * // => 1
 *
 * numBinarySearch([0, 1, 2], 100)
 * // => null
 */
const numBinarySearch = (arr, search) => {
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
 * Clamps a number in a given range.
 *
 * @function numClamp
 * @memberof Number
 * @since 1.0.0
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @example
 * numClamp(5, 0, 10)
 * // => 5
 *
 * numClamp(-2, 0, 10)
 * // => 0
 *
 * numClamp(99, 0, 10)
 * // => 10
 */
const numClamp = (val, min, max) => {
    if (val < min) {
        return min;
    }
    else if (val > max) {
        return max;
    }
    return val;
};

/**
 * Returns the median of an array of numbers.
 *
 * @function numMedian
 * @memberof Number
 * @since 5.0.0
 * @param {number[]} arr
 * @returns {number}
 * @example
 * numMedian([1, 2.5, 3.3])
 * // => 2.5
 *
 * numMedian([1, 2, 4, 5])
 * // => 3
 */
const numMedian = (arr) => {
    const arrLengthHalf = arr.length / 2;
    return arr.length % 2 === 0
        ? arr[arrLengthHalf]
        : numAverage(arr.slice(Math.floor(arrLengthHalf), 2));
};

/**
 * Returns levenshtein string distance of two strings.
 *
 * @function strDistance
 * @memberof String
 * @since 6.3.0
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 * @example
 * strDistance("Kitten", "Sitting")
 * // => 3
 *
 * strDistance("String", "Stribng")
 * // => 1
 *
 * strDistance("foo", "foo")
 * // => 0
 */
const strDistance = (str1, str2) => {
    // Cache string length
    const str1Length = str1.length;
    const str2Length = str2.length;
    if (str1Length === 0) {
        // Exit early if str1 is empty
        return str2Length;
    }
    if (str2Length === 0) {
        // Exit early if str2 is empty
        return str1Length;
    }
    // Create matrix that is (str2.length+1)x(str1.length+1) fields
    const matrix = [];
    // Increment along the first column of each row
    for (let y = 0; y <= str2Length; y++) {
        matrix[y] = [y];
    }
    // Increment each column in the first row
    for (let x = 0; x <= str1Length; x++) {
        matrix[0][x] = x;
    }
    // Fill matrix
    for (let y = 1; y <= str2Length; y++) {
        const matrixColumnCurrent = matrix[y];
        const matrixColumnLast = matrix[y - 1];
        for (let x = 1; x <= str1Length; x++) {
            if (str2.charAt(y - 1) === str1.charAt(x - 1)) {
                // Check if letter at the position is the same
                matrixColumnCurrent[x] = matrixColumnLast[x - 1];
            }
            else {
                // Check for substitution/insertion/deletion
                const substitution = matrixColumnLast[x - 1] + 1;
                const insertion = matrixColumnCurrent[x - 1] + 1;
                const deletion = matrixColumnLast[x] + 1;
                // Get smallest of the three
                matrixColumnCurrent[x] = Math.min(substitution, insertion, deletion);
            }
        }
    }
    // Return max value
    return matrix[str2Length][str1Length];
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
 * Creates an array of substrings from a PascalCase string.
 *
 * @function strFromPascalCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromPascalCase("FooBar")
 * // => ["Foo", "Bar"]
 *
 * strFromPascalCase("FizzBuzzBazz")
 * // => ["Fizz","Buzz","Bazz"]
 */
const strFromPascalCase = (str) => {
    const result = [];
    let cache = [];
    str.split("").forEach((letter, index) => {
        if (index > 0 && letter !== letter.toLowerCase()) {
            result.push(cache.join(""));
            cache = [];
        }
        cache.push(letter);
    });
    result.push(cache.join(""));
    return arrCompact(result);
};

/**
 * Creates an array of substrings from a camelCase string.
 *
 * @function strFromCamelCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromPascalCase("fooBar")
 * // => ["foo", "Bar"]
 *
 * strFromPascalCase("fizzBuzzBazz")
 * // => ["fizz","Buzz","Bazz"]
 */
const strFromCamelCase = strFromPascalCase;

/**
 * Creates an array of substrings from a kebab-case string.
 *
 * @function strFromKebabCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromKebabCase("foo-bar")
 * // => ["foo", "bar"]
 *
 * strFromKebabCase("Fizz-buzz-BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromKebabCase = (str) => arrCompact(str.split("-" /* kebab */));

/**
 * Creates an array of substrings from a snake_case string.
 *
 * @function strFromSnakeCase
 * @memberof String
 * @since 6.2.0
 * @param {string} str
 * @returns {string[]}
 * @example
 * strFromSnakeCase("foo_bar")
 * // => ["foo", "bar"]
 *
 * strFromSnakeCase("Fizz_buzz_BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromSnakeCase = (str) => arrCompact(str.split("_" /* snake */));

/**
 * Collects the values of an array in a Map as arrays.
 *
 * @function arrCollect
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {Map<any, any[]>} Map<val: any, arr: any[]>
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
const arrCollect = (arr, fn) => {
    const result = new Map();
    arr.forEach((val, index) => {
        const key = fn(val, index, arr);
        result.set(key, result.has(key) ? [...result.get(key), val] : [val]);
    });
    return result;
};

/**
 * Returns strings similar to the input based on the list given.
 *
 * @function strSimilar
 * @memberof String
 * @since 6.3.0
 * @param {string} str
 * @param {Array<string>} list
 * @param {boolean} [returnFull=false]
 * @returns {Array<string>|Map<number,string[]>}
 * @example
 * strSimilar("Fob", ["Foo", "Bar"])
 * // => ["Foo"]
 *
 * strSimilar("cmmit", ["init", "commit", "push"])
 * // => ["commit"]
 *
 * strSimilar("Kitten", ["Sitten", "Sitting", "Bitten"])
 * // => ["Sitten", "Bitten"]
 *
 * strSimilar("cmmit", ["init", "commit", "push"], true)
 * // => Map<number, string[]>{"1": ["commit"], "3": ["init"], "5": ["push"]}
 */
const strSimilar = (str, list, returnFull = false) => {
    const result = arrCollect(list, val => strDistance(str, val));
    return returnFull
        ? result
        : result.get(Math.min(...result.keys()));
};

/**
 * Creates a camelCase string from an array of substrings.
 *
 * @function strToCamelCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToCamelCase(["foo", "bar"])
 * // => "fooBar"
 *
 * strToCamelCase(["Fizz","buzz","BaZZ"])
 * // => "fizzBuzzBazz"
 */
const strToCamelCase = (arr) => arr
    .map((val, index) => index === 0
    ? val.toLowerCase()
    : val.substr(0, 1).toUpperCase() +
        val.substr(1).toLowerCase())
    .join("");

/**
 * Creates a kebab-case string from an array of substrings.
 *
 * @function strToKebabCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToKebabCase(["foo", "bar"])
 * // => "foo-bar"
 *
 * strToKebabCase(["Fizz","buzz","BaZZ"])
 * // => "fizz-buzz-bazz"
 */
const strToKebabCase = (arr) => arr.map(val => val.toLowerCase()).join("-" /* kebab */);

/**
 * Creates a PascalCase string from an array of substrings.
 *
 * @function strToPascalCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToPascalCase(["foo", "bar"])
 * // => "FooBar"
 *
 * strToPascalCase(["Fizz","buzz","BaZZ"])
 * // => "FizzBuzzBazz"
 */
const strToPascalCase = (arr) => arr
    .map(val => val.substr(0, 1).toUpperCase() + val.substr(1).toLowerCase())
    .join("");

/**
 * Creates a snake_case string from an array of substrings.
 *
 * @function strToSnakeCase
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr
 * @returns {string}
 * @example
 * strToSnakeCase(["foo", "bar"])
 * // => "foo_bar"
 *
 * strToSnakeCase(["Fizz","buzz","BaZZ"])
 * // => "fizz_buzz_bazz"
 */
const strToSnakeCase = (arr) => arr.map(val => val.toLowerCase()).join("_" /* snake */);

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
 * Counts how many times an element appears in an array.
 *
 * @function arrCount
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr
 * @returns {Map<any, number>} Map<val: any, count: number>
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
    return arr.filter(item => !valuesCounted.has(item));
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
 * @param {any[]} arr
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
    return arr.filter(item => valuesCounted.has(item));
};

/**
 * Returns an array with the item at the index removed.
 *
 * @function arrRemoveIndex
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {number} targetIndex
 * @returns {any[]}
 * @example
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = (arr, targetIndex) => arr.filter((val, index) => index !== targetIndex);

/**
 * Returns an array with the given item removed.
 *
 * @function arrRemoveItem
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr
 * @param {any} targetItem
 * @returns {any[]}
 * @example
 * arrRemoveItem(["foo", "bar", "fizz"], "bar")
 * // => ["foo", "fizz"]
 */
const arrRemoveItem = (arr, targetItem) => arr.filter(item => item !== targetItem);

/**
 * Returns an array with every n-th item from the input array.
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
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
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
 * Replaces every circular reference in an object.
 *
 * Can take a custom replacer function and a pre-filled WeakSet of references.
 *
 * @function objDecycle
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj
 * @param {function} [fn=()=>null] fn(key: any, val: any, index: number, obj: object)
 * @param {WeakSet<any>} [references=new WeakSet()]
 * @returns {Object}
 * @example
 * const a = {b: 1, c: 2};
 *
 * a.a = a;
 *
 * objDecycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * objDecycle(a,key=>`_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
const objDecycle = (obj, fn = () => null, references = new WeakSet()) => {
    references.add(obj);
    return objMap(obj, (key, val, index, objNew) => {
        if (references.has(val)) {
            return fn(key, val, index, objNew);
        }
        if (isObjectLike(val)) {
            references.add(val);
            return objDecycle(val, fn, references);
        }
        return val;
    });
};

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
    const result = isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);
    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (isUndefined(obj[keyDefault])) {
            result[keyDefault] = valDefault;
        }
    });
    return result;
};

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
    const result = isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);
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
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
 * @returns {Object}
 * @example
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
const objMapDeep = (obj, fn) => objMap(obj, (key, val, index, objNew) => isObjectLike(val)
    ? objMapDeep(val, fn)
    : fn(key, val, index, objNew));

/**
 * Recursively creates a new object with the entries of the input object.
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
 * Recursively iterates over each element in an array.
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
 * Recursively iterates over each entry of an object.
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
 * As soon as n arguments are reached, the function is run with all arguments.
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
    // tslint:disable-next-line:only-arrow-functions
    const resolver = function () {
        const argsBase = arguments;
        // tslint:disable-next-line:only-arrow-functions
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
 * Useful for event handlers that fire several times a second, such as scroll or resize.
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
    // Has to be set to any because it can either a number (in browsers) or a Timer instance (in NodeJS)
    let timer = immediate ? -1 : getTimer();
    // tslint:disable-next-line:only-arrow-functions
    return function () {
        if (canRun) {
            canRun = false;
            timer = getTimer();
            return fn(...arguments);
        }
    };
};

/**
 * Return a random float or integer number in the given range.
 *
 * @function randNumber
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0] inclusive minimum
 * @param {number} [max=1] inclusive maximum
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
    const rand = Math.random() * diff;
    return min + (floating ? rand : Math.floor(rand / diff * (diff + 1)));
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
 * Fisher-Yates shuffle algorithm.
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
    const result = Array.from(arr);
    let length = result.length;
    while (length--) {
        const index = randNumber(0, length);
        const temp = result[length];
        result[length] = result[index];
        result[index] = temp;
    }
    return result;
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
 * Number manipulation and comparison
 * @namespace Number
 */
/**
 * String manipulation and comparison
 * @namespace String
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
 * Looping through ranges, arrays and objects
 * @namespace For
 */
/**
 * Random number generation and value picking
 * @namespace Random
 */

exports.isEqual = isEqual;
exports.isInstanceOf = isInstanceOf;
exports.isTypeOf = isTypeOf;
exports.isUndefined = isUndefined;
exports.isNil = isNil;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isBoolean = isBoolean;
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isObjectPlain = isObjectPlain;
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isArrayBuffer = isArrayBuffer;
exports.isArrayTyped = isArrayTyped;
exports.isPromise = isPromise;
exports.isMap = isMap;
exports.isSet = isSet;
exports.isDate = isDate;
exports.isRegExp = isRegExp;
exports.isFunction = isFunction;
exports.isArguments = isArguments;
exports.isError = isError;
exports.isEmpty = isEmpty;
exports.isIndex = isIndex;
exports.hasPath = hasPath;
exports.getPath = getPath;
exports.getSize = getSize;
exports.numClamp = numClamp;
exports.numSum = numSum;
exports.numAverage = numAverage;
exports.numMedian = numMedian;
exports.numBinarySearch = numBinarySearch;
exports.strDistance = strDistance;
exports.strSimilar = strSimilar;
exports.strFromCamelCase = strFromCamelCase;
exports.strFromKebabCase = strFromKebabCase;
exports.strFromPascalCase = strFromPascalCase;
exports.strFromSnakeCase = strFromSnakeCase;
exports.strToCamelCase = strToCamelCase;
exports.strToKebabCase = strToKebabCase;
exports.strToPascalCase = strToPascalCase;
exports.strToSnakeCase = strToSnakeCase;
exports.arrFromDeep = arrFromDeep;
exports.arrMapDeep = arrMapDeep;
exports.arrCompact = arrCompact;
exports.arrChunk = arrChunk;
exports.arrStep = arrStep;
exports.arrRemoveIndex = arrRemoveIndex;
exports.arrRemoveItem = arrRemoveItem;
exports.arrCount = arrCount;
exports.arrCollect = arrCollect;
exports.arrDifference = arrDifference;
exports.arrIntersection = arrIntersection;
exports.arrUniq = arrUniq;
exports.objFrom = objFrom;
exports.objFromDeep = objFromDeep;
exports.objMap = objMap;
exports.objMapDeep = objMapDeep;
exports.objDefaults = objDefaults;
exports.objDefaultsDeep = objDefaultsDeep;
exports.objDecycle = objDecycle;
exports.mapFromObject = mapFromObject;
exports.fnThrottle = fnThrottle;
exports.fnAttempt = fnAttempt;
exports.fnCurry = fnCurry;
exports.forEachDeep = forEachDeep;
exports.forEachEntry = forEachEntry;
exports.forEachEntryDeep = forEachEntryDeep;
exports.randNumber = randNumber;
exports.randItem = randItem;
exports.randShuffle = randShuffle;
