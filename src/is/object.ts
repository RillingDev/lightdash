import { IAnyObject } from "../obj/lib/IAnyObject";
import { isFunction } from "./function";
import { isObjectLike } from "./objectLike";

/**
 * Checks if a value is an object.
 *
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
const isObject = (val: any): val is IAnyObject =>
    isObjectLike(val) || isFunction(val);

export { isObject };
