import { isTypeOf } from "./typeOf";
/**
 * Checks if a value is a function.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a function.
 * @example
 * isFunction(function a(){})
 * // => true
 *
 * isFunction(Array.from)
 * // => true
 *
 * isFunction(null)
 * // => false
 */
const isFunction = (val) => isTypeOf(val, "function");
export { isFunction };
//# sourceMappingURL=function.js.map