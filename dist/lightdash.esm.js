// File is named "_index.ts" to avoid it being treated as a module index file.
/**
 * Checks if a value is a valid index.
 *
 * A value is a valid index if its positive and an integer.
 *
 * @memberof Is
 * @since 5.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a valid index.
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
 * Checks if the value is an instance of any of the given classes.
 * If at least one class gives back true, true is returned.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @param {...Class} targets Classes to check.
 * @returns {boolean} If the value is an instance of the class.
 * @example
 * isInstanceOf([], Array)
 * // => true
 *
 * isInstanceOf([], Map, Set, Array)
 * // => true
 *
 * isInstanceOf({}, Array, Set)
 * // => false
 */
const isInstanceOf = (val, ...targets) => targets.some(target => val instanceof target);

/**
 * Checks if a value is an array-buffer.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an array buffer.
 * @example
 * isArrayBuffer(new ArrayBuffer(8))
 * // => true
 *
 * isArrayBuffer([1, 2])
 * // => false
 */
const isArrayBuffer = (val) => isInstanceOf(val, ArrayBuffer);

/**
 * Checks if the value has any of the given types.
 * If at least one type gives back true, true is returned.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @param {...string} types Type strings to compare the value to.
 * @returns {boolean} If the value has the type provided.
 * @example
 * isTypeOf("foo", "string")
 * // => true
 *
 * isTypeOf("foo", "number", "string")
 * // => true
 *
 * isTypeOf("foo", "number")
 * // => false
 */
const isTypeOf = (val, ...types) => types.some(type => typeof val === type);

/**
 * Checks if a value is a number.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a number.
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
 * Checks if a value is undefined or null.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is nil.
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
 * Checks if a value is not nil and has a type of object.
 *
 * The main difference to {@link isObject} is that functions are not considered object-like,
 * because `typeof function(){}` returns `"function"`.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check,
 * @returns {boolean} If the value is object-like.
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
 * Checks if a value is array-like.
 *
 * A value is considered array-like if it is object-like and has a length property.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an array-like.
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
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a typed array.
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
const isArrayTyped = (val) => isInstanceOf(val, Int8Array, Int16Array, Int32Array, Uint8Array, Uint16Array, Uint32Array, Float32Array, Float64Array);

/**
 * Checks if a value is a boolean.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a boolean.
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
 * Checks if a value is a date instance.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a date instance.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} if the value is a string.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is undefined.
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
 * @memberof Get
 * @since 6.0.0
 * @param {any} val Value to check.
 * @returns {number} The size of the value.
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
    if (isArrayLike(val) || isString(val)) {
        return val.length;
    }
    if (!isUndefined(val.size)) {
        return val.size;
    }
    if (isObjectLike(val)) {
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is empty.
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
 * @memberof For
 * @param {object} obj Object to iterate.
 * @param {function} fn Function to use (`fn(key: *, val: *, index: number, obj: object) => void`).
 * @example
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => {
 *     a[key] = val * index;
 * })
 * // a = {a: 0, b: 2}
 */
const forEachEntry = (obj, fn) => {
    for (const [key, val] of Object.entries(obj)) {
        fn(val, key, obj);
    }
};

/**
 * Recursively checks if two values and their the contents are equal.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} a First value to check.
 * @param {any} b Second value to check.
 * @returns {boolean} If the values are equal.
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
 * isEqual([], {})
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
        a.constructor !== b.constructor ||
        Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    let result = true;
    forEachEntry(a, (aVal, key) => {
        // Only check if the comparison didn't fail already
        if (result === true) {
            result = isUndefined(b[key]) ? false : isEqual(aVal, b[key]);
        }
    });
    return result;
};

/**
 * Checks if a value is an error.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an error.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a function.
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

/**
 * Checks if a value is a map.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a map.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an object.
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
const isObject = (val) => isObjectLike(val) || isFunction(val);

/**
 * Checks if a value is a plain object.
 *
 * An object is considered plain of its direct constructor is the built-in object constructor.
 *
 * @memberof Is
 * @since 2.9.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a plain object.
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
 * @memberof Is
 * @since 3.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a promise.
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
 * @memberof Is
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a regular expression.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a set.
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
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a symbol.
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
 * Checks if a value is a weak map.
 *
 * @memberof Is
 * @since 9.1.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a weak map.
 * @example
 * isMap(new WeakMap())
 * // => true
 *
 * isMap(new Map())
 * // => false
 */
const isWeakMap = (val) => isInstanceOf(val, WeakMap);

/**
 * Checks if a value is a weak set.
 *
 * @memberof Is
 * @since 9.1.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a weak set.
 * @example
 * isSet(new WeakSet())
 * // => true
 *
 * isSet(new Set())
 * // => false
 */
const isWeakSet = (val) => isInstanceOf(val, WeakSet);

/**
 * Returns a targets value in a given path.
 *
 * If the path doesn't exist in the target, null is returned.
 *
 * @memberof Get
 * @since 2.0.0
 * @param {any} target Target to check.
 * @param {string[]} path Path to use.
 * @returns {any} The value which was looked up, or null if the path could not be resolved.
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
 * @memberof Number
 * @since 1.0.0
 * @param {number} val Value to clamp
 * @param {number} min Inclusive minimum value.
 * @param {number} max Inclusive maximum value.
 * @returns {number} Value clamped into the range given.
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
    if (val > max) {
        return max;
    }
    return val;
};

/**
 * Clamps a number in the range of safe integers.
 *
 * @memberof Number
 * @since 7.1.0
 * @param {number} val Value to use.
 * @returns {number} Value clamped into the range of safe integers.
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
 * Returns the levenshtein string distance of two strings.
 *
 * @memberof String
 * @since 6.3.0
 * @param {string} str1 First string to compare.
 * @param {string} str2 Second string to compare.
 * @returns {number} Distance between the two strings.
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
    if (str2.length === 0) {
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
 * Returns an array with every falsey value removed.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to compact.
 * @returns {any[]} Compacted array.
 * @example
 * arrCompact([1, "", "", 2, 3, null, 4, undefined, 5, ""])
 * // => [1, 2, 3, 4, 5]
 */
const arrCompact = (arr) => arr.filter(val => val);

/**
 * Creates an array of words from a kebab-case string.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str String in kebab-case.
 * @returns {string[]} Words of the kebab-case string.
 * @example
 * strFromKebabCase("foo-bar")
 * // => ["foo", "bar"]
 *
 * strFromKebabCase("Fizz-buzz-BaZZ")
 * // => ["Fizz","buzz","BaZZ"]
 */
const strFromKebabCase = (str) => arrCompact(str.split("-" /* KEBAB */));

/**
 * Creates an array of words from a PascalCase or camelCase string.
 *
 * Functions the same as the removed strFromCamelCase.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str String in PascalCase.
 * @returns {string[]} Words of the PascalCase string.
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
 * Creates an array of words from a snake_case string.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string} str String in snake_case.
 * @returns {string[]} Words of the snake_case string.
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
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr Array to collect.
 * @param {function} fn Function to use for collection (`fn(val: *, index: number, arr: any[]) => any`).
 * @returns {Map<any, any[]>} Map<val: *, arr: any[]> Collected map.
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
 * Returns strings similar to the input based its distance to the values in the list given.
 *
 * @memberof String
 * @since 6.3.0
 * @param {string} str String to check.
 * @param {Array<string>} list Array of values to compare the string to.
 * @param {boolean} [returnFull=false] If the full map should be returned, rather than just the closest matches.
 * @returns {Array<string>|Map<number,string[]>} Array of the closest matches, or the map if `returnFull` is true.
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
    if (!returnFull) {
        return result.get(Math.min(...result.keys()));
    }
    return result;
};

/**
 * Creates a camelCase string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} camelCase string of the words.
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
    : val.substr(0, 1).toUpperCase() + val.substr(1).toLowerCase())
    .join("");

/**
 * Creates a kebab-case string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} kebab-case string of the words.
 * @example
 * strToKebabCase(["foo", "bar"])
 * // => "foo-bar"
 *
 * strToKebabCase(["Fizz","buzz","BaZZ"])
 * // => "fizz-buzz-bazz"
 */
const strToKebabCase = (arr) => arr.map(val => val.toLowerCase()).join("-" /* KEBAB */);

/**
 * Creates a PascalCase string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} PascalCase string of the words.
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
 * Creates a snake_case string from an array of words.
 *
 * @memberof String
 * @since 6.2.0
 * @param {string[]} arr Words to use.
 * @returns {string} snake_case string of the words.
 * @example
 * strToSnakeCase(["foo", "bar"])
 * // => "foo_bar"
 *
 * strToSnakeCase(["Fizz","buzz","BaZZ"])
 * // => "fizz_buzz_bazz"
 */
const strToSnakeCase = (arr) => arr.map(val => val.toLowerCase()).join("_" /* SNAKE */);

/**
 * Creates an array of elements split into sub arrays by size.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to chunk.
 * @param {number} chunk Size of the chunks.
 * @returns {any[]} Chunked array.
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
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to count.
 * @returns {Map<any, number>}  Map containing the counted result (`Map<val: *, count: number>`).
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
 * Merges an arbitrary amount of arrays.
 *
 * @memberof Array
 * @since 10.1.0
 * @param {...any[]} values Arrays to merge.
 * @returns {any[]} merged array.
 * @example
 * arrMerge([1, 2, 3], [1, 6, 3])
 * // => [1, 2, 3, 1, 6, 3]
 *
 * arrDifference([1, 2, 3], [0], [2, 0, 2])
 * // => [1, 2, 3, 0, 2, 0, 2]
 */
const arrMerge = (...values) => {
    if (values.length === 0) {
        return [];
    }
    const first = values[0];
    if (values.length === 1) {
        return first;
    }
    return first.concat(...values.slice(1));
};

/**
 * Returns an array of all elements that exist in the first array, but not any others.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to check.
 * @param {...any[]} values Arrays to compare to.
 * @returns {any[]} Difference of `arr` to `values`.
 * @example
 * arrDifference([1, 2, 3], [1, "foo", 3])
 * // => [2]
 *
 * arrDifference([1, 2, 3], [100], [2, 0, 2])
 * // => [1, 3]
 */
const arrDifference = (arr, ...values) => {
    const valuesCounted = arrCount(arrMerge(...values));
    return arr.filter(item => !valuesCounted.has(item));
};

// TODO: Figure out a way to properly use generics here.
/**
 * Recursively maps the values of the input array with the iterator function and return the result.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to map.
 * @param {function} fn Function to use for mapping (`fn(val: *, index: number, arr: any[]) => any`).
 * @returns {any[]} Array with the mapped values.
 * @example
 * arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)
 * // => [4, 8, [2, 2, [32], 8]]
 */
const arrMapDeep = (arr, fn) => arr.map((val, index) => Array.isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively creates a new array with the values of the input iterable.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to copy recursively.
 * @returns {any[]} Recursively copied array.
 * @example
 * const a = [1, 2, 3, [5, [6]]];
 * const b = arrFromDeep(a);
 *
 * b[3][1][0] = 10;
 * // a = [1, 2, 3, [5, [6]]]
 * // b = [1, 2, 3, [5, [10]]]
 */
const arrFromDeep = (arr) => arrMapDeep(Array.from(arr), val => Array.isArray(val) ? Array.from(val) : val);

/**
 * Returns an array of all elements that exist in the first array and at least once in one of the other arrays.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to check.
 * @param {...any[]} values Arrays to compare to.
 * @returns {any[]} Intersection of `arr` to `values`.
 * @example
 * arrIntersection([1, 2, 3], [1, "foo", 3])
 * // => [1, 3]
 *
 * arrIntersection([1, 2, 3], [100], [2, 0, 2])
 * // => [2]
 */
const arrIntersection = (arr, ...values) => {
    const valuesCounted = arrCount(arrMerge(...values));
    return arr.filter(item => valuesCounted.has(item));
};

/**
 * Returns an array with the item at the index removed.
 *
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr Array to use.
 * @param {number} targetIndex Index to remove.
 * @returns {any[]} Array with the index removed.
 * @example
 * arrRemoveIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const arrRemoveIndex = (arr, targetIndex) => arr.filter((val, index) => index !== targetIndex);

/**
 * Returns an array with all instances of the given item removed.
 *
 * @memberof Array
 * @since 2.8.0
 * @param {any[]} arr Array to use.
 * @param {any} targetItem Item to remove.
 * @param {boolean} [removeAll=true] If all or just the first occurrence should be removed.
 * @returns {any[]} Array with the item removed.
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
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to use.
 * @param {number} step Step to use.
 * @returns {any[]} Stepped array.
 * @example
 * arrStep([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const arrStep = (arr, step) => arr.filter((val, index) => index % step === 0);

/**
 * Returns an array of all unique elements in an array.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to use.
 * @returns {any[]} Array of the unique values.
 * @example
 * arrUniq([1, 1, 1, 2, 3, 1, 2, 1, 4])
 * // => [1, 2, 3, 4]
 */
const arrUniq = (arr) => Array.from(new Set(arr));

// TODO: Figure out a way to properly use generics here.
/**
 * Maps each entry of an object and returns the result.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to map.
 * @param {function} fn Mapping function (`fn(key: any, val: any, index: number, obj: object) => any`)
 * @returns {Object} Mapped object.
 * @example
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 * // => {a: 8, b: 4}
 */
const objMap = (obj, fn) => {
    const objNew = Array.isArray(obj) ? [] : {};
    forEachEntry(obj, (val, key) => {
        objNew[key] = fn(val, key, obj);
    });
    return objNew;
};

/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function and a pre-filled weak set of references.
 *
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj Object to decycle.
 * @param {function} [fn=() => null] Decycling function (`fn(key: *, val: any, index: number, obj: object) => void`)
 * @param {WeakSet<any>} [references=new WeakSet()] WeakSet prefilled with encountered references.
 * @returns {Object} Decycled object.
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
    return objMap(obj, (val, key, objNew) => {
        if (references.has(val)) {
            return fn(val, key, objNew);
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
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to copy.
 * @returns {Object} Copy of the object.
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
 * Sets every nil property of an object to the value from the default object.
 *
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj Object to default.
 * @param {Object} objDefault Object containing the default values.
 * @returns {Object} Object containing the default values in keys it did not have or had nil value in.
 * @example
 * objDefaults({a: 1, c: 5}, {a: 1, b: 2, c: 3})
 * // => {a: 1, b: 2, c: 5}
 */
const objDefaults = (obj, objDefault) => {
    const result = Array.isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);
    forEachEntry(objDefault, (valDefault, keyDefault) => {
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
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj Object to default.
 * @param {Object} objDefault Object containing the default values.
 * @returns {Object} Object containing the default values in keys it did not have or had nil value in.
 * @example
 * objDefaultsDeep({a: [1, 2], c: {f: "x"}}, {a: [1, 2, 3], b: 2, c: {f: "y"}})
 * // => {a: [1, 2, 3], b: 2, c: {f: "x"}}
 */
const objDefaultsDeep = (obj, objDefault) => {
    const result = Array.isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);
    forEachEntry(objDefault, (valDefault, keyDefault) => {
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
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to map.
 * @param {function} fn Mapping function (`fn(key: any, val: any, index: number, obj: object) => any`)
 * @returns {Object} Mapped object.
 * @example
 * objMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
const objMapDeep = (obj, fn) => objMap(obj, (val, key, objNew) => isObjectLike(val) ? objMapDeep(val, fn) : fn(val, key, objNew));

/**
 * Recursively creates a new object with the entries of the input object.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to copy.
 * @returns {Object} Copy of the object.
 * @example
 * const a = {a: {b: 2, c: {a: 10, b: 20}}};
 * const b = objFromDeep(a);
 *
 * b.a.c.a = 123;
 * // a = {a: {b: 2, c: {a: 10, b: 20}}
 * // b = {a: {b: 2, c: {a: 123, b: 20}}}
 */
const objFromDeep = (obj) => objMapDeep(objFrom(obj), val => (isObjectLike(val) ? objFrom(val) : val));

/**
 * Creates a map from an object.
 *
 * @memberof Map
 * @since 1.0.0
 * @param {Object} obj Object to use.
 * @returns {Map} Map created from the object.
 * @example
 * mapFromObject({a: 1, b: 4, c: 5})
 * // => Map<string,number>{a: 1, b: 4, c: 5}
 */
const mapFromObject = (obj) => new Map(Object.entries(obj));

/**
 * Recursively iterates over each element in an array.
 *
 * @memberof For
 * @param {any[]} arr Array to iterate.
 * @param {function} fn Function to use (`fn(val: *, index: number, arr: any[]) => void`).
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => {
 *     arr[index] = index * val;
 * })
 * // a = [0, 4, [0, 1, [0], 12]]
 */
const forEachDeep = (arr, fn) => arr.forEach((val, index) => Array.isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

/**
 * Recursively iterates over each entry of an object.
 *
 * @memberof For
 * @param {object} obj Object to iterate.
 * @param {function} fn Function to use (`fn(key: *, val: *, index: number, obj: object) => void`).
 * @example
 * const a = {a: 1, b: {c: [1, 2]}};
 *
 * forEachEntryDeep(a, (key, val, index, obj) => {
 *     obj[key] = index * val;
 * })
 * // a = {a: 0, b: {c: [0, 2]}}
 */
const forEachEntryDeep = (obj, fn) => forEachEntry(obj, (val, key) => isObjectLike(val) ? forEachEntryDeep(val, fn) : fn(val, key, obj));

/**
 * Creates a debounced function.
 *
 * Debouncing combines multiple function invocations in the given timeout into a single one.
 * @see https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @memberof Fn
 * @since 8.1.0
 * @param {Function} fn Function to debounce.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Debounced function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooDebounced = fnDebounce(foo, 500);
 * // function calls will be debounced to 500ms
 */
const fnDebounce = (fn, timeout) => {
    let timer = null; // Seems to require any, as the return type of the browser and node are different here.
    // tslint:disable-next-line:only-arrow-functions
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, Array.of(arguments));
        }, timeout);
    };
};

/**
 * Creates a throttled function.
 *
 * Throttling ensures that the function can only be invoked once in the given timeout.
 * @see https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @memberof Fn
 * @since 3.1.0
 * @param {Function} fn Function to throttle.
 * @param {number} timeout Timeout to use.
 * @returns {Function} Throttled function.
 * @example
 * const foo = (a, b) => console.log(a + b);
 * const fooThrottled = fnThrottle(foo, 500);
 * // function calls will be throttled to 500ms
 */
const fnThrottle = (fn, timeout) => {
    let timer = null; // Seems to require any, as the return type of the browser and node are different here.
    let last = null;
    // tslint:disable-next-line:only-arrow-functions
    return function () {
        const now = Date.now();
        const run = () => {
            last = now;
            fn.apply(this, Array.of(arguments));
        };
        if (last != null && now < last + timeout) {
            clearTimeout(timer);
            timer = setTimeout(run, timeout);
        }
        else {
            run();
        }
    };
};

/**
 * Binary-search implementation.
 *
 * @memberof Search
 * @since 5.0.0
 * @param {number[]} arr Array to search in.
 * @param {number} search Value to search.
 * @returns {number|null} Index of the value in the array, or null if none is found.
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
        if (current < search) {
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
 * @memberof Random
 * @since 3.0.0
 * @param {number} [min=0] Inclusive minimum value.
 * @param {number} [max=1] Inclusive maximum value.
 * @param {boolean} [float=false] If the value should be a float.
 * @returns {number} Random number
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
 * @memberof Random
 * @since 3.0.0
 * @param {any[]} arr Array to use.
 * @returns {any} Random item from the array.
 * @example
 * randItem(["foo", "bar"])
 * // => "foo"
 *
 * randItem([1, 2, 3, 4, 5])
 * // => 3
 */
const randItem = (arr) => arr[randNumber(0, arr.length - 1)];

/**
 * Shuffles an array randomly and returns it, using the Fisher-Yates shuffle algorithm.
 *
 * @memberof Random
 * @since 5.0.0
 * @param {any[]} arr Array to shuffle
 * @returns {any[]} Shuffled array.
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
 * Value checking, type checking, and comparison.
 *
 * Note that some equivalents found in lodash are not provided here due to native equivalents:
 * - isArray -> Array.isArray
 * - isInteger -> Number.isInteger
 * - isSafeInteger -> Number.isSafeInteger
 * - isFinite -> Number.isFinite
 * - isNaN -> Number.isNaN
 *
 * @namespace Is
 */
/**
 * Get values and properties of a target.
 *
 * @namespace Get
 */
/**
 * Number manipulation and comparison.
 *
 * @namespace Number
 */
/**
 * String manipulation and comparison.
 *
 * @namespace String
 */
/**
 * Array manipulation and analysis.
 *
 * @namespace Array
 */
/**
 * Object manipulation and analysis.
 *
 * @namespace Object
 */
/**
 * Map manipulation.
 *
 * @namespace Map
 */
/**
 * Looping through ranges, arrays and objects.
 *
 * @namespace For
 */
/**
 * Function manipulation.
 *
 * @namespace Fn
 */
/**
 * Array and object search.
 *
 * @namespace Search
 */
/**
 * Random number generation and value picking.
 *
 * @namespace Random
 */

export { isEqual, isInstanceOf, isTypeOf, isUndefined, isNil, isNumber, isString, isBoolean, isSymbol, isObject, isObjectLike, isObjectPlain, isArrayLike, isArrayBuffer, isArrayTyped, isPromise, isMap, isSet, isWeakMap, isWeakSet, isDate, isRegExp, isFunction, isError, isEmpty, isIndex, getPath, getSize, numClamp, numSafe, strDistance, strSimilar, strFromKebabCase, strFromPascalCase, strFromSnakeCase, strToCamelCase, strToKebabCase, strToPascalCase, strToSnakeCase, arrFromDeep, arrMapDeep, arrCompact, arrChunk, arrStep, arrRemoveIndex, arrRemoveItem, arrCount, arrCollect, arrDifference, arrIntersection, arrUniq, objFrom, objFromDeep, objMap, objMapDeep, objDefaults, objDefaultsDeep, objDecycle, mapFromObject, fnDebounce, fnThrottle, forEachDeep, forEachEntry, forEachEntryDeep, searchBinary, randNumber, randItem, randShuffle };
