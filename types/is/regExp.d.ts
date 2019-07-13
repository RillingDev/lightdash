/**
 * Checks if a value is a regular expression.
 *
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a regular expression.
 * @example
 * isRegExp(new RegExp("foo"))
 * // => true
 *
 * isRegExp(/foo/)
 * // => true
 *
 * isRegExp("/foo/")
 * // => false
 */
declare const isRegExp: (val: any) => val is RegExp;
export { isRegExp };
