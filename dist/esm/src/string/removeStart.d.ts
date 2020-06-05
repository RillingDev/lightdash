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
declare const removeStart: (string: string, removeValue: string) => string;
export { removeStart };
//# sourceMappingURL=removeStart.d.ts.map