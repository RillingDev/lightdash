import { isTypeOf } from "./typeOf";
/**
 * Checks if a value is a string.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} if the value is a string.
 * @example
 * isString("foo")
 * // => true
 *
 * isString(1)
 * // => false
 */
const isString = (val) => isTypeOf(val, "string");
export { isString };
//# sourceMappingURL=string.js.map