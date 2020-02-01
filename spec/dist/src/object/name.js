"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * Gets name of a value.
 *
 * If the value has a name or description property, the value of that is returned.
 * If the value is a string, it is returned as is.
 * Otherwise null is returned.
 *
 * @since 10.2.0
 * @category Object
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
    if (lodash_1.isString(value)) {
        return value;
    }
    if (lodash_1.isObject(value) && lodash_1.isString(value.name)) {
        return value.name;
    }
    if (lodash_1.isSymbol(value) && lodash_1.isString(value.description)) {
        return value.description;
    }
    return null;
};
exports.name = name;
