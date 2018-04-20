import isInstanceOf from "./instanceOf";

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
// @ts-ignore: RegExp declaration is invalid
const isRegExp = (val: any): boolean => isInstanceOf(val, RegExp);

export default isRegExp;
