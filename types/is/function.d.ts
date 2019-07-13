import { anyFn } from "../fn/lib/anyFn";
/**
 * Checks if a value is a function.
 *
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
declare const isFunction: (val: any) => val is anyFn<any>;
export { isFunction };
