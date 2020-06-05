var l_ = (function (exports, lodash) {
    'use strict';

    /**
     * Checks if the string is blank (no non-space content).
     *
     * @since 11.0.0
     * @category Is
     * @param string String to use.
     * @returns If the file is blank.
     * @example
     * isBlank("")
     * // => true
     *
     * isBlank("  ")
     * // => true
     *
     * isBlank(" foo ")
     * // => false
     */
    const isBlank = (string) => lodash.isEmpty(string.trim());

    /**
     * Checks if a value is a promise.
     *
     * @since 3.0.0
     * @category Is
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
     * Creates a map from an objects entries.
     *
     * @since 1.0.0
     * @category Lang
     * @param object Object to use.
     * @returns Map created from the object.
     * @example
     * toMap({a: 1, b: 4, c: 5})
     * // => Map{"a": 1, "b": 4, "c": 5}
     */
    const toMap = (object) => new Map(lodash.toPairs(object));

    /**
     * Creates a map from an objects entries, mapping the keys and values.
     *
     * @since 13.0.0
     * @category Lang
     * @param object Object to use.
     * @param keyMapper Function mapping keys.
     * @param valueMapper Function mapping values.
     * @returns Map created from the object.
     * @example
     * toMap({a: 1, b: 4, c: 5}, key => { return { key }; }, value => value * 2)
     * // => Map{{key: "a"}: 2, {key: "b"}: 8, {key: "a"}: 10}
     */
    const toMapBy = (object, keyMapper, valueMapper) => new Map(lodash.toPairs(object).map(([key, val]) => [
        keyMapper(key, val),
        valueMapper(key, val),
    ]));

    /**
     * Returns the levenshtein string distance of two strings.
     *
     * @since 6.3.0
     * @category String
     * @param string1 First string to compare.
     * @param string2 Second string to compare.
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
    const distance = (string1, string2) => {
        if (string1.length === 0) {
            return string2.length;
        }
        if (string2.length === 0) {
            return string1.length;
        }
        const matrix = [];
        for (let y = 0; y <= string2.length; y++) {
            matrix[y] = [y];
        }
        for (let x = 0; x <= string1.length; x++) {
            matrix[0][x] = x;
        }
        for (let y = 1; y <= string2.length; y++) {
            const matrixColumnCurrent = matrix[y];
            const matrixColumnLast = matrix[y - 1];
            for (let x = 1; x <= string1.length; x++) {
                if (string2.charAt(y - 1) === string1.charAt(x - 1)) {
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
        return matrix[string2.length][string1.length];
    };

    /**
     * Creates a PascalCase string from a string.
     *
     * @since 6.2.0
     * @category String
     * @param string String to use.
     * @returns PascalCase string of the input string.
     * @example
     * pascalCase("fooBar")
     * // => "FooBar"
     *
     * pascalCase("__foo_bar__")
     * // => "FizzBuzzBazz"
     */
    const pascalCase = (string) => lodash.upperFirst(lodash.camelCase(string));

    /**
     * Collects elements in an array into a an array of merged elements.
     *
     * @since 11.0.0
     * @category Array
     * @param array Array to group.
     * @param keyMapper Function returning the key for the value.
     * @param initializer Function initializing a new mergable object.
     * @param reducer Consumer mutating the existing object with the new data.
     * @returns Grouped and merged map.
     * @example
     * groupMapReducingBy(
     *     ["foo", "bar", "fizz", "buzz"],
     *     val => val.charAt(0),
     *     () => {
     *        return {
     *            count: 0,
     *            matches: []
     *        };
     *     },
     *     (current, val) => {
     *         current.count++;
     *         current.matches.push(val);
     *         return current;
     *     }
     * )
     * // => Map{"f": {count: 2, matches: ["foo", "fizz"]}, "b": {count: 2, matches: ["bar", "buzz"]}}
     */
    const groupMapReducingBy = (array, keyMapper, initializer, reducer) => {
        const result = new Map();
        lodash.forEach(array, (value, index) => {
            const key = keyMapper(value, index, array);
            if (!result.has(key)) {
                result.set(key, initializer(value, index, array));
            }
            result.set(key, reducer(result.get(key), value, index, array));
        });
        return result;
    };

    /**
     * Collects the values of an array in a map as array values,
     * using the return value of the function as key.
     *
     * @since 6.1.0
     * @category Array
     * @param array Array to group.
     * @param keyMapper Function to use for grouping.
     * @returns Grouped map.
     * @example
     * groupMapBy([1, 2, 3, 4, 5], val => val % 2)
     * // => Map{0: [2, 4], 1: [1, 3, 5]}
     */
    const groupMapBy = (array, keyMapper) => groupMapReducingBy(array, keyMapper, () => [], (current, value) => lodash.concat(current, value));

    /**
     * Returns strings similar to the input based its levenshtein distance to the values in the list given.
     *
     * @since 6.3.0
     * @category String
     * @param string String to check.
     * @param array Array of values to compare the string to.
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
    const similar = (string, array, returnFull = false) => {
        const result = groupMapBy(array, (value) => distance(string, value));
        if (returnFull) {
            return result;
        }
        const lowestKey = Math.min(...result.keys());
        return result.get(lowestKey);
    };

    /**
     * Removes a value from the end of a string. If the string does not end with the value, nothing is done.
     *
     * @since 13.0.0
     * @category String
     * @param string String to check.
     * @param removeValue Value to remove.
     * @returns String with the value removed from the end.
     * @example
     * removeEnd("FooBar", "Bar")
     * // => "Foo"
     *
     * removeEnd("FooBar", "Foo")
     * // => "FooBar"
     *
     * removeEnd("FooBar", "Buzz")
     * // => "FooBar"
     */
    const removeEnd = (string, removeValue) => {
        if (!string.endsWith(removeValue)) {
            return string;
        }
        return string.substring(0, string.length - removeValue.length);
    };

    /**
     * Removes a value from the start of a string. If the string does not start with the value, nothing is done.
     *
     * @since 13.0.0
     * @category String
     * @param string String to check.
     * @param removeValue Value to remove.
     * @returns String with the value removed from the start.
     * @example
     * removeStart("FooBar", "Foo")
     * // => "Bar"
     *
     * removeStart("FooBar", "Bar")
     * // => "FooBar"
     *
     * removeStart("FooBar", "Buzz")
     * // => "FooBar"
     */
    const removeStart = (string, removeValue) => {
        if (!string.startsWith(removeValue)) {
            return string;
        }
        return string.substring(removeValue.length);
    };

    /**
     * Counts the values of an array in a map,
     * using the return value of the function as key.
     *
     * @since 12.0.0
     * @category Array
     * @param array Array to count.
     * @param keyMapper Function to use for key generation.
     * @returns Count map.
     * @example
     * countMapBy([1, 2, 4, 2, 4, 4], val => val)
     * // => Map{1: 1, 2: 2, 4: 3}
     */
    const countMapBy = (array, keyMapper) => groupMapReducingBy(array, keyMapper, () => 0, (current) => current + 1);

    /**
     * Removes the first occurrence of an element from an array.
     *
     * Note: the input array is being mutated.
     *
     * @since 2.8.0
     * @category Array
     * @param array Array to modify.
     * @param value The value to remove.
     * @returns The mutated collection.
     * @example
     * const a = ["foo", "bar", "fizz", "bar"];
     * removeItem(a, "bar")
     * // a equals ["foo", "fizz", "bar"]
     */
    const pullFirst = (array, value) => {
        const targetIndex = lodash.indexOf(array, value);
        lodash.remove(array, (val, index) => index === targetIndex);
        return array;
    };

    /**
     * Returns a new collection with every n-th item from the input array.
     *
     * @since 1.0.0
     * @category Array
     * @param array Array to use.
     * @param stepSize Step to use.
     * @returns Stepped collection.
     * @example
     * step([1, 2, 3, 4, 5, 6], 2)
     * // => [1, 3, 5]
     */
    const step = (array, stepSize) => lodash.filter(array, (value, index) => index % stepSize === 0);

    /**
     * Inserts value(s) at the given position.
     * If the index is equal or higher the array length, the value(s) will appended.
     * If the index is less than 0, the value(s) will prepended.
     *
     * Note: the input array is being mutated.
     *
     * @since 12.1.0
     * @category Array
     * @param array Array to insertAt to.
     * @param index Index to start inserting.
     * @param values Value(s) to insertAt.
     * @returns Collection.
     * @example
     * insertAt(["foo", "fizz"], 1, "bar")
     * // => ["foo", "bar", "fizz"]
     */
    const insertAt = (array, index, ...values) => {
        array.splice(index, 0, ...values);
        return array;
    };

    /**
     * Gets name of a value.
     *
     * If the value is a function, its name is returned.
     * If the value is a symbol, its key is returned.
     * If the value is a string, it is returned as is.
     * Otherwise null is returned.
     *
     * @since 10.2.0
     * @category Lang
     * @param value Value to check.
     * @returns The name of the value.
     * @example
     * name(class Foo{})
     * // => "Foo"
     *
     * name(function bar(){})
     * // => "bar"
     *
     * name(Symbol.for("abc"))
     * // => "abc"
     *
     * name("foo")
     * // => "foo"
     *
     * name(1)
     * // => null
     */
    const name = (value) => {
        var _a;
        if (lodash.isString(value)) {
            return value;
        }
        if (lodash.isSymbol(value)) {
            return (_a = Symbol.keyFor(value)) !== null && _a !== void 0 ? _a : null;
        }
        if (lodash.isFunction(value)) {
            return value.name;
        }
        return null;
    };

    /**
     * Helper method recursively executing the callback against all object properties.
     * Only object-like values will have the callback executed.
     * If the same reference is encountered after the first time, it will be skipped.
     *
     * @private
     */
    const visit = (root, callback) => {
        const visitStack = new WeakSet();
        const visitObject = (target) => {
            visitStack.add(target);
            for (const prop of Object.values(target)) {
                if (lodash.isObject(prop) && !visitStack.has(prop)) {
                    visitObject(prop);
                }
            }
            callback(target);
        };
        visitObject(root);
    };

    /**
     * Recursively freezes objects, useful for constant objects.
     *
     * This function mutates the input value and calls Object.freeze() recursively on all sub-objects.
     *
     * @since 12.0.0
     * @category Object
     * @param object Object to recursively freeze.
     * @example
     * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
     *
     * deepFreeze(a)
     * // => object and all sub-objects are frozen.
     */
    const deepFreeze = (object) => visit(object, Object.freeze);

    /**
     * Recursively seals objects, useful for constant objects.
     *
     * This function mutates the input value and calls Object.seal() recursively on all sub-objects.
     *
     * @since 12.0.0
     * @category Object
     * @param object Object to recursively seal.
     * @example
     * const a = {a: {b: 2}, b: [1, {foo: "foo"}], c: 2};
     *
     * deepSeal(a)
     * // => object and all sub-objects are sealed.
     */
    const deepSeal = (object) => visit(object, Object.seal);

    exports.countMapBy = countMapBy;
    exports.deepFreeze = deepFreeze;
    exports.deepSeal = deepSeal;
    exports.distance = distance;
    exports.groupMapBy = groupMapBy;
    exports.groupMapReducingBy = groupMapReducingBy;
    exports.insertAt = insertAt;
    exports.isBlank = isBlank;
    exports.isPromise = isPromise;
    exports.name = name;
    exports.pascalCase = pascalCase;
    exports.pullFirst = pullFirst;
    exports.removeEnd = removeEnd;
    exports.removeStart = removeStart;
    exports.similar = similar;
    exports.step = step;
    exports.toMap = toMap;
    exports.toMapBy = toMapBy;

    return exports;

}({}, _));
//# sourceMappingURL=lightdash.js.map
