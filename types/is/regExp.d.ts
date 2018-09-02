/**
 * Checks if a value is a regular expression.
 *
 * @function isRegExp
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isRegExp(new RegExp("foo"))
 * // => true
 *
 * isRegExp(/foo/)
 * // => true
 *
 * @example
 * isRegExp("foo")
 * // => false
 */
declare const isRegExp: (val: any) => val is RegExp;
export { isRegExp };
