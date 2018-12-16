/**
 * Gets name of a value.
 *
 * If the value has a name or description property, the value of that is returned.
 * If the value is a string, it is returned as is.
 * Otherwise null is returned.
 *
 * @memberof Get
 * @since 10.2.0
 * @param {any} val Value to check.
 * @returns {string} The name of the value.
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
declare const getName: (val: any) => string | null;
export { getName };
