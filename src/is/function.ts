import { AnyFn } from "../fn/lib/AnyFn";
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
const isFunction = (val: any): val is AnyFn<any> => isTypeOf(val, "function");

export { isFunction };
