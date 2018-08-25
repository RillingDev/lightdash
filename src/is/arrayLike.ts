import { isUndefined } from "./undefined";
import { isObjectLike } from "./objectLike";

/**
 * Checks if a value is object-like and has a length property.
 *
 * @function isArrayLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayLike([])
 * // => true
 *
 * isArrayLike({length: 0})
 * // => true
 *
 * @example
 * isArrayLike({})
 * // => false
 *
 * isArrayLike("foo")
 * // => false
 */
const isArrayLike = (val: any): val is ArrayLike<any> =>
    isObjectLike(val) && !isUndefined(val.length);

export { isArrayLike };
