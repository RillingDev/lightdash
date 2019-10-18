import { isInstanceOf } from "./instanceOf";
/**
 * Checks if a value is a regular expression.
 *
 * @memberof Is
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
const isRegExp = (val) => isInstanceOf(val, RegExp);
export { isRegExp };
//# sourceMappingURL=regExp.js.map