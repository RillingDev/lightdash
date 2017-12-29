/**
 * Checks if a value is a regular expression.
 *
 * @function isRegExp
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isRegExp(new RegExp("foo"))
 * isRegExp(/foo/)
 *
 * @example
 * //returns false
 * isRegExp("foo")
 */
declare const isRegExp: (val: any) => boolean;
export default isRegExp;
