'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

/**
 * Checks if a value is a promise.
 *
 * @since 3.0.0
 * @param value Value to check.
 * @returns If the value is a promise.
 * @example
 * isPromise(new Promise((resolve, reject) => resolve("foo")));
 * // => true
 *
 * isPromise(() => "foo");
 * // => false
 */
const isPromise = (value) => value instanceof Promise;

/**
 * Creates a map from an object.
 *
 * @since 1.0.0
 * @param object Object to use.
 * @returns Map created from the object.
 * @example
 * toMap({a: 1, b: 4, c: 5})
 * // => Map{a: 1, b: 4, c: 5}
 */
const toMap = (object) => new Map(lodash.toPairs(object));

// noinspection SpellCheckingInspection
/**
 * Returns the levenshtein string distance of two strings.
 *
 * @since 6.3.0
 * @param str1 First string to compare.
 * @param str2 Second string to compare.
 * @returns Distance between the two strings.
 * @example
 * distance("Kitten", "Sitting")
 * // => 3
 *
 * distance("String", "Stribng")
 * // => 1
 *
 * distance("foo", "foo")
 * // => 0
 */
const distance = (str1, str2) => {
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
 * Creates a PascalCase string from a string.
 *
 * @since 6.2.0
 * @param str String to use.
 * @returns PascalCase string of the words.
 * @example
 * pascalCase(["fooBar")
 * // => "FooBar"
 *
 * pascalCase("__foo_bar__")
 * // => "FizzBuzzBazz"
 */
const pascalCase = (str) => lodash.upperFirst(lodash.camelCase(str));

/**
 * Collects the values of an array in a map as array values,
 * using the return value of the function as key.
 *
 * @since 6.1.0
 * @param collection Array to collect.
 * @param iteratee Function to use for collection.
 * @returns Collected map.
 * @example
 * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
 * // => Map{0: [2, 4], 1: [1, 3, 5]}
 */
const groupMapBy = (collection, iteratee) => {
    const result = new Map();
    lodash.forEach(collection, (val, index, _collection) => {
        const key = iteratee(val, index, _collection);
        const value = lodash.concat(result.has(key) ? result.get(key) : [], val);
        result.set(key, value);
    });
    return result;
};

// noinspection SpellCheckingInspection
/**
 * Returns strings similar to the input based its distance to the values in the list given.
 *
 * @since 6.3.0
 * @param str String to check.
 * @param list Array of values to compare the string to.
 * @param returnFull If the full map should be returned, rather than just the closest matches.
 * @returns Array of the closest matches, or the map if `returnFull` is true.
 * @example
 * similar("Fob", ["Foo", "Bar"])
 * // => ["Foo"]
 *
 * similar("cmmit", ["init", "commit", "push"])
 * // => ["commit"]
 *
 * similar("Kitten", ["Sitten", "Sitting", "Bitten"])
 * // => ["Sitten", "Bitten"]
 *
 * similar("cmmit", ["init", "commit", "push"], true)
 * // => Map<number, string[]>{1: ["commit"], 3: ["init"], 5: ["push"]}
 */
const similar = (str, list, returnFull = false) => {
    const result = groupMapBy(list, (value) => distance(str, value));
    if (returnFull) {
        return result;
    }
    const lowestKey = Math.min(...result.keys());
    return result.get(lowestKey);
};

/**
 * Returns an array with the item at the index removed.
 *
 * @since 2.8.0
 * @param collection Array to use.
 * @param targetIndex Index to remove.
 * @returns Array with the index removed.
 * @example
 * removeIndex(["foo", "bar", "fizz"], 1)
 * // => ["foo", "fizz"]
 */
const removeIndex = (collection, targetIndex) => lodash.filter(collection, (value, index) => index !== targetIndex);

/**
 * Returns an array with instances of the given item removed.
 *
 * @since 2.8.0
 * @param collection Array to use.
 * @param targetValue Item to remove.
 * @param removeAll If all occurrences should be removed, otherwise just the first occurrence will be.
 * @returns Array with the item removed.
 * @example
 * removeItem(["foo", "bar", "fizz", "bar"], "bar")
 * // => ["foo", "fizz"]
 *
 * removeItem(["foo", "bar", "fizz", "bar"], "bar", false)
 * // => ["foo", "fizz", "bar"]
 */
const removeItem = (collection, targetValue, removeAll = true) => removeAll
    ? lodash.filter(collection, value => value !== targetValue)
    : removeIndex(collection, lodash.indexOf(collection, targetValue));

/**
 * Returns an array with every n-th item from the input array.
 *
 * @since 1.0.0
 * @param collection Array to use.
 * @param n Step to use.
 * @returns Stepped array.
 * @example
 * step([1, 2, 3, 4, 5, 6], 2)
 * // => [1, 3, 5]
 */
const step = (collection, n) => lodash.filter(collection, (value, index) => index % n === 0);

/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function and a pre-filled weak set of references.
 *
 * @since 6.0.0
 * @param collection Object to decycle.
 * @param replacer Value replacer function
 * @param references WeakSet prefilled with encountered references, not recommended to provide this manually.
 * @returns Decycled object.
 * @example
 * const a = {a: {}, b: 1, c: 2};
 *
 * a.a = a;
 *
 * decycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * decycle(a, key => `_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
const decycle = (collection, replacer = () => null, references = new WeakSet()) => {
    // TODO: find a way to properly avoid any's here.
    const decycler = (value, key, _collection) => {
        if (references.has(value)) {
            return replacer(value, key, _collection);
        }
        if (lodash.isObjectLike(value)) {
            return decycle(value, replacer, references);
        }
        return value;
    };
    references.add(collection);
    return lodash.isArrayLike(collection)
        ? lodash.map(collection, decycler)
        : lodash.mapValues(collection, decycler);
};

/**
 * Gets name of a value.
 *
 * If the value has a name or description property, the value of that is returned.
 * If the value is a string, it is returned as is.
 * Otherwise null is returned.
 *
 * @since 10.2.0
 * @param value Value to check.
 * @returns The name of the value.
 * @example
 * name(class Foo{})
 * // => "Foo"
 *
 * name(function bar(){})
 * // => "bar"
 *
 * name(Symbol("abc"))
 * // => "abc"
 *
 * name("foo")
 * // => "foo"
 *
 * name(1)
 * // => null
 */
const name = (value) => {
    if (lodash.isString(value)) {
        return value;
    }
    if (lodash.isObject(value) && lodash.isString(value.name)) {
        return value.name;
    }
    if (lodash.isSymbol(value) && lodash.isString(value.description)) {
        return value.description;
    }
    return null;
};

/**
 * Binary-search implementation.
 *
 * @since 5.0.0
 * @param arr Array to search in.
 * @param search Value to search.
 * @returns Index of the value in the array, or null if none is found.
 * @example
 * binarySearch([0, 1, 2], 1)
 * // => 1
 *
 * binarySearch([0, 1, 2], 100)
 * // => null
 */
const binarySearch = (arr, search) => {
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

exports.binarySearch = binarySearch;
exports.decycle = decycle;
exports.distance = distance;
exports.groupMapBy = groupMapBy;
exports.isPromise = isPromise;
exports.name = name;
exports.pascalCase = pascalCase;
exports.removeIndex = removeIndex;
exports.removeItem = removeItem;
exports.similar = similar;
exports.step = step;
exports.toMap = toMap;
