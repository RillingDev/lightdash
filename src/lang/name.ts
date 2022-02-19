/**
 * Gets the name of a value.
 *
 * If the value is a function, its name is returned.
 * If the value is a symbol, its key is returned.
 * If the value is a string, it is returned as is.
 * Otherwise, null is returned.
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
export const name = (value: unknown): string | null => {
	if (typeof value == "string") {
		return value;
	}
	if (typeof value == "symbol") {
		return Symbol.keyFor(value) ?? null;
	}
	if (typeof value == "function") {
		return value.name;
	}

	return null;
};
