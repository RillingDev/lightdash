import { isTypeOf } from "./typeOf";
/**
 * Checks if a value is undefined.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is undefined.
 * @example
 * const a = {};
 *
 * isUndefined(a.b)
 * // => true
 *
 * isUndefined(undefined)
 * // => true
 *
 * isUndefined(null)
 * // => false
 *
 * isUndefined(1)
 * // => false
 */
const isUndefined = (val) => isTypeOf(val, "undefined");
export { isUndefined };
//# sourceMappingURL=undefined.js.map