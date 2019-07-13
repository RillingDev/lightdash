import { isObject, isString, isSymbol } from "lodash";

/**
 * Gets name of a value.
 *
 * If the value has a name or description property, the value of that is returned.
 * If the value is a string, it is returned as is.
 * Otherwise null is returned.
 *
 * @since 10.2.0
 * @param val Value to check.
 * @returns The name of the value.
 * @example
 * getName(class Foo{})
 * // => "Foo"
 *
 * getName(function bar(){})
 * // => "bar"
 *
 * getName(Symbol("abc"))
 * // => "abc"
 *
 * getName("foo")
 * // => "foo"
 *
 * getName(1)
 * // => null
 */
const getName = (val: any): string | null => {
    if (isString(val)) {
        return val;
    }
    if (isObject(val) && isString((<any>val).name)) {
        return (<any>val).name;
    }
    if (isSymbol(val) && isString(val.description)) {
        return val.description;
    }

    return null;
};

export { getName };
