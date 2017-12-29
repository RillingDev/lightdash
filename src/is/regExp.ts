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
 * // returns true
 * isRegExp(new RegExp("foo"))
 * isRegExp(/foo/)
 *
 * @example
 * //returns false
 * isRegExp("foo")
 */
// @ts-ignore: RegExp declaration is outdated
const isRegExp = (val: any): boolean => isInstanceOf(val, RegExp);

export default isRegExp;
