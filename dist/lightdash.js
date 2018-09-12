var _l = (function (exports) {
    'use strict';

    /**
     * Checks if a value is an array.
     *
     * Alias of the native `Array.isArray`.
     *
     * @function isArray
     * @memberof Is
     * @since 1.0.0
     * @param {any} val
     * @returns {boolean}
     * @example
     * isArray([1, 2, 3]);
     * // => true
     *
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
     * isInstanceOf([], Array)
     * // => true
     *
     * isInstanceOf({}, Array)
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
     * isArrayBuffer(new ArrayBuffer(8))
     * // => true
     *
     * isArrayBuffer([1, 2])
     * // => false
     */
    const isArrayBuffer = (val) => isInstanceOf(val, ArrayBuffer);

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
     * isNil(0)
     * // => false
     *
     * isNil("")
     * // => false
     */
    const isNil = (val) => val == null;

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
     * isTypeOf("foo", "string")
     * // => true
     *
     * isTypeOf("foo", "number")
     * // => false
     */
    const isTypeOf = (val, type) => typeof val === type;

    /**
     * Checks if a value is not nil and has a type of object.
     *
     * The main difference to {@link isObject} is that functions are not considered object-like,
     * because `typeof function(){}` returns `"function"`.
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
     * isObjectLike(() => 1))
     * // => false
     *
     * isObjectLike(1)
     * // => false
     */
    const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");

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
     * isNumber("2")
     * // => false
     *
     * isNumber(null)
     * // => false
     */
    const isNumber = (val) => isTypeOf(val, "number");

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
     * isArrayLike({})
     * // => false
     */
    const isArrayLike = (val) => isObjectLike(val) && isNumber(val.length);

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
     * isArrayTyped([]);
     * // => false
     */
    const isArrayTyped = (val) => !isNil(val) && isNumber(val.BYTES_PER_ELEMENT);

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
     * isBoolean(0)
     * // => false
     *
     * isBoolean(null)
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
     * isDate(new Date())
     * // => true
     *
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
     * isString(1)
     * // => false
     */
    const isString = (val) => isTypeOf(val, "string");

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
     * isUndefined(null)
     * // => false
     *
     * isUndefined(1)
     * // => false
     */
    const isUndefined = (val) => isTypeOf(val, "undefined");

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
     * getSize("foo")
     * // => 3
     *
     * getSize(1)
     * // => -1
     *
     * getSize(null)
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
     * sets/maps if they have a size of zero, and objects if their keys have a length of zero.
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
     * isEmpty(123)
     * // => true
     *
     * isEmpty(null)
     * // => true
     *
     * isEmpty("foo")
     * // => false
     *
     * isEmpty([1, 2])
     * // => false
     *
     * isEmpty({a: 1})
     * // => false
     *
     * isEmpty(new Map([["foo", 1]]))
     * // => false
     */
    const isEmpty = (val) => getSize(val) < 1;

    /**
     * Iterates over each entry of an object.
     *
     * @function forEachEntry
     * @memberof For
     * @param {object} obj
     * @param {function} fn fn(key: *, val: *, index: number, arr: any[])
     * @example
     * const a = {a: 1, b: 2};
     *
     * forEachEntry(a, (key, val, index) => {
     *     a[key] = val * index;
     * })
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
     * isError(new URIError())
     * // => true
     *
     * isError("foo")
     * // => false
     */
    const isError = (val) => isInstanceOf(val, Error);

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
     * isFunction(null)
     * // => false
     */
    const isFunction = (val) => isTypeOf(val, "function");

    // File is named "_index.ts" to avoid it being treated as module index file.
    /**
     * Checks if a value is a valid index.
     *
     * @function isIndex
     * @memberof Is
     * @since 5.0.0
     * @param {any} val
     * @returns {boolean}
     * @example
     * isIndex(123)
     * // => true
     *
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
     * isObjectPlain([])
     * // => false
     *
     * isObjectPlain(() => 1)
     * // => false
     *
     * isObjectPlain(1)
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
     * isPromise(new Promise((resolve, reject) => resolve("foo")));
     * // => true
     *
     * isPromise(() => "foo");
     * // => false
     */
    const isPromise = (val) => isInstanceOf(val, Promise);

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
     * isRegExp("/foo/")
     * // => false
     */
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
     * @returns {any}
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
     * Clamps a number in the range of safe integers.
     *
     * @function numSafe
     * @memberof Number
     * @since 7.1.0
     * @param {number} val
     * @returns {number}
     * @example
     * numSafe(99999999999999999)
     * // => Number.MAX_SAFE_INTEGER
     *
     * numSafe(-Infinity)
     * // => Number.MIN_SAFE_INTEGER
     */
    const numSafe = (val) => numClamp(val, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    // noinspection SpellCheckingInspection
    /**
     * Returns Levenshtein string distance of two strings.
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
        if (str1.length === 0) {
            return str2.length;
        }
        else if (str2.length === 0) {
            return str1.length;
        }
        const matrix = [];
        for (let y = 0; y <= str2.length; y++) {
            matrix[y] = [y];
        }
        for (let x = 0; x <= str1.length; x++) {
            matrix[0][x] = x;
        }
        for (let y = 1; y <= str2.length; y++) {
            const matrixColumnCurrent = matrix[y];
            const matrixColumnLast = matrix[y - 1];
            for (let x = 1; x <= str1.length; x++) {
                if (str2.charAt(y - 1) === str1.charAt(x - 1)) {
                    matrixColumnCurrent[x] = matrixColumnLast[x - 1];
                }
                else {
                    const substitution = matrixColumnLast[x - 1] + 1;
                    const insertion = matrixColumnCurrent[x - 1] + 1;
                    const deletion = matrixColumnLast[x] + 1;
                    matrixColumnCurrent[x] = Math.min(substitution, insertion, deletion);
                }
            }
        }
        return matrix[str2.length][str1.length];
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
    const arrCompact = (arr) => arr.filter(val => val);

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
     * Alias of {@link strFromPascalCase}.
     *
     * @function strFromCamelCase
     * @memberof String
     * @since 6.2.0
     * @param {string} str
     * @returns {string[]}
     * @example
     * strFromCamelCase("fooBar")
     * // => ["foo", "Bar"]
     *
     * strFromCamelCase("fizzBuzzBazz")
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
    const strFromKebabCase = (str) => arrCompact(str.split("-" /* KEBAB */));

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
    const strFromSnakeCase = (str) => arrCompact(str.split("_" /* SNAKE */));

    /**
     * Collects the values of an array in a map as arrays.
     * If the function returns a nil value, the element will be skipped,
     * otherwise the return value will be used as key.
     *
     * @function arrCollect
     * @memberof Array
     * @since 6.1.0
     * @param {any[]} arr
     * @param {function} fn fn(val: *, index: number, arr: any[])
     * @returns {Map<any, any[]>} Map<val: *, arr: any[]>
     * @example
     * arrCollect([1, 2, 3, 4, 5], val => val % 2)
     * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
     */
    const arrCollect = (arr, fn) => {
        const result = new Map();
        arr.forEach((val, index) => {
            const key = fn(val, index, arr);
            if (!isNil(key)) {
                result.set(key, result.has(key) ? [...result.get(key), val] : [val]);
            }
        });
        return result;
    };

    // noinspection SpellCheckingInspection
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
     * // => Map<number, string[]>{1: ["commit"], 3: ["init"], 5: ["push"]}
     */
    const strSimilar = (str, list, returnFull = false) => {
        const result = arrCollect(list, (val) => strDistance(str, val));
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
    const strToKebabCase = (arr) => arr.map(val => val.toLowerCase()).join("-" /* KEBAB */);

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
    const strToSnakeCase = (arr) => arr.map(val => val.toLowerCase()).join("_" /* SNAKE */);

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
     * @returns {Map<any, number>} Map<val: *, count: number>
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

    // TODO: Figure out a way to properly use generics here.
    /**
     * Recursively maps the values of the input array with the iterator function and return the result.
     *
     * @function arrMapDeep
     * @memberof Array
     * @since 1.0.0
     * @param {any[]} arr
     * @param {function} fn fn(val: *, index: number, arr: any[])
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
     * Returns an array with all instances of the given item removed.
     *
     * @function arrRemoveItem
     * @memberof Array
     * @since 2.8.0
     * @param {any[]} arr
     * @param {any} targetItem
     * @param {boolean} [removeAll=true] removeAll
     * @returns {any[]}
     * @example
     * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar")
     * // => ["foo", "fizz"]
     *
     * arrRemoveItem(["foo", "bar", "fizz", "bar"], "bar", false)
     * // => ["foo", "fizz", "bar"]
     */
    const arrRemoveItem = (arr, targetItem, removeAll = true) => removeAll
        ? arr.filter(item => item !== targetItem)
        : arrRemoveIndex(arr, arr.indexOf(targetItem));

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

    // TODO: Figure out a way to properly use generics here.
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
        const objNew = isArray(obj) ? [] : {};
        forEachEntry(obj, (key, val, index) => {
            objNew[key] = fn(key, val, index, obj);
        });
        return objNew;
    };

    /**
     * Replaces every circular reference in an object with a value, defaulting to null.
     *
     * Can take a custom replacer function and a pre-filled weak set of references.
     *
     * @function objDecycle
     * @memberof Object
     * @since 6.0.0
     * @param {Object} obj
     * @param {function} [fn = () => null] fn(key: *, val: any, index: number, obj: object)
     * @param {WeakSet<any>} [references=new WeakSet()]
     * @returns {Object}
     * @example
     * const a = {a: {}, b: 1, c: 2};
     *
     * a.a = a;
     *
     * objDecycle(a)
     * // => {a: null, b: 1, c: 2}
     *
     * objDecycle(a, key => `_${key}`)
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

    // TODO: Figure out a way to properly use generics here.
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

    // TODO: Figure out a way to properly use generics here.
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

    // TODO: Figure out a way to properly use generics here.
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
     * objMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
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
     * @param {function} fn fn(val: *, index: number, arr: any[])
     * @example
     * const a = [2, 4, [1, 1, [16], 4]];
     *
     * forEachDeep(a, (val, index, arr) => {
     *     arr[index] = index * val;
     * })
     * // a = [0, 4, [0, 1, [0], 12]]
     */
    const forEachDeep = (arr, fn) => arr.forEach((val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

    /**
     * Recursively iterates over each entry of an object.
     *
     * @function forEachEntryDeep
     * @memberof For
     * @param {object} obj
     * @param {function} fn fn(key: *, val: *, index: number, arr: any[])
     * @example
     * const a = {a: 1, b: {c: [1, 2]}};
     *
     * forEachEntryDeep(a, (key, val, index, obj) => {
     *     obj[key] = index * val;
     * })
     * // a = {a: 0, b: {c: [0, 2]}}
     */
    const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (key, val, index) => isObjectLike(val)
        ? forEachEntryDeep(val, fn)
        : fn(key, val, index, obj));

    /**
     * Creates a debounced function that delays invoking the function.
     *
     * @function fnDebounce
     * @memberof Fn
     * @param {Function} fn
     * @param {number} timeout
     * @returns {Function}
     * @example
     * const foo = (a, b) => console.log(a + b);
     * const fooThrottled = fnThrottle(foo, 500);
     * // function can only run 500ms after the last invocation was made
     */
    const fnDebounce = (fn, timeout) => {
        let timer;
        // tslint:disable-next-line:only-arrow-functions
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                fn(...arguments);
            }, timeout);
            if (!timer) {
                fn(...arguments);
            }
        };
    };

    /**
     * Throttles a function to only run every n ms.
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
        // Private helper that creates a returns a timeout to reset the canRun state and the timer
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
                fn(...arguments);
                canRun = false;
                timer = getTimer();
            }
        };
    };

    /**
     * Binary-search implementation.
     *
     * @function searchBinary
     * @memberof Search
     * @since 5.0.0
     * @param {number[]} arr
     * @param {number} search
     * @returns {number|null}
     * @example
     * searchBinary([0, 1, 2], 1)
     * // => 1
     *
     * searchBinary([0, 1, 2], 100)
     * // => null
     */
    const searchBinary = (arr, search) => {
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
     * Return a random number in the given range.
     *
     * @function randNumber
     * @memberof Random
     * @since 3.0.0
     * @param {number} [min=0] inclusive minimum
     * @param {number} [max=1] inclusive maximum
     * @param {boolean} [float=false]
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
    const randNumber = (min = 0, max = 1, float = false) => {
        const diff = max - min;
        if (diff === 0) {
            return min;
        }
        const rand = Math.random() * diff;
        return min + (float ? rand : Math.floor((rand / diff) * (diff + 1)));
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
     * Get values and properties of a target
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
     * Looping through ranges, arrays and objects
     * @namespace For
     */
    /**
     * Function manipulation
     * @namespace Fn
     */
    /**
     * Array and object search
     * @namespace Search
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
    exports.isError = isError;
    exports.isEmpty = isEmpty;
    exports.isIndex = isIndex;
    exports.getPath = getPath;
    exports.getSize = getSize;
    exports.numClamp = numClamp;
    exports.numSafe = numSafe;
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
    exports.fnDebounce = fnDebounce;
    exports.fnThrottle = fnThrottle;
    exports.forEachDeep = forEachDeep;
    exports.forEachEntry = forEachEntry;
    exports.forEachEntryDeep = forEachEntryDeep;
    exports.searchBinary = searchBinary;
    exports.randNumber = randNumber;
    exports.randItem = randItem;
    exports.randShuffle = randShuffle;

    return exports;

}({}));
//# sourceMappingURL=lightdash.js.map
