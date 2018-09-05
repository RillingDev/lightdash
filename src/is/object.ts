import { isNil } from "./nil";
import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is an object.
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
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
    !isNil(val) && (isTypeOf(val, "object") || isTypeOf(val, "function"));

export { isObject };
