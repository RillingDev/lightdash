import { isObject, isString, isSymbol } from "lodash";
/**
 * Gets name of a value.
 *
 * If the value has a name or description property, the value of that is returned.
 * If the value is a string, it is returned as is.
 * Otherwise null is returned.
 *
 * @since 10.2.0
 * @memberOf Object
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
    if (isString(value)) {
        return value;
    }
    // eslint-disable-next-line no-extra-parens
    if (isObject(value) && isString(value.name)) {
        // eslint-disable-next-line no-extra-parens
        return value.name;
    }
    if (isSymbol(value) && isString(value.description)) {
        return value.description;
    }
    return null;
};
export { name };
