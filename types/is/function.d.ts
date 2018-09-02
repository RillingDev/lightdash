import { anyFn } from "../fn/lib/anyFn";
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
declare const isFunction: (val: any) => val is anyFn;
export { isFunction };
