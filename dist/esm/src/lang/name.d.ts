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
declare const name: (value: unknown) => string | null;
export { name };
//# sourceMappingURL=name.d.ts.map