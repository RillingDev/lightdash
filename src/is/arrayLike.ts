import { isNumber } from "./number";
import { isObjectLike } from "./objectLike";

/**
 * Checks if a value is object-like and has a length property.
 *
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
 * isArrayLike({})
 * // => false
 */
const isArrayLike = (val: any): val is ArrayLike<any> =>
    isObjectLike(val) && isNumber(val.length);

export { isArrayLike };
