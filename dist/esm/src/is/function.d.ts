import { AnyFn } from "../fn/lib/AnyFn";
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
declare const isFunction: (val: any) => val is AnyFn<any>;
export { isFunction };
//# sourceMappingURL=function.d.ts.map