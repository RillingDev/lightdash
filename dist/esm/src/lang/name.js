import { isFunction, isString, isSymbol } from "lodash";
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
    if (isString(value)) {
        return value;
    }
    if (isSymbol(value)) {
        return (_a = Symbol.keyFor(value)) !== null && _a !== void 0 ? _a : null;
    }
    if (isFunction(value)) {
        return value.name;
    }
    return null;
};
export { name };
//# sourceMappingURL=name.js.map