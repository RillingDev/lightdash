import { isTypeOf } from "./typeOf";
import { anyFunction } from "./lib/anyFunction";

/**
 * Checks if a value is a function.
 *
 * @function isFunction
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isFunction(function a(){})
 * // => true
 *
 * isFunction(Array.from)
 * // => true
 *
 * @example
 * isFunction(null)
 * // => false
 */
const isFunction = (val: any): val is anyFunction => isTypeOf(val, "function");

export { isFunction };
