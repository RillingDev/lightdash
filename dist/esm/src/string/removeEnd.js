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
export { removeEnd };
//# sourceMappingURL=removeEnd.js.map