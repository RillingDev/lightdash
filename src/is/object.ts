import { isObjectLike } from "./objectLike";
import { isFunction } from "./function";

/**
 * Checks if a value is an object.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an object.
 * @example
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => true
 *
 * isObject(() => 1))
 * // => true
 *
 * isObject(1)
 * // => false
 */
const isObject = (val: any): val is object =>
    isObjectLike(val) || isFunction(val);

export { isObject };
