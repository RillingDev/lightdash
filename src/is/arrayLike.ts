import { isNumber } from "./number";
import { isObjectLike } from "./objectLike";

/**
 * Checks if a value is array-like.
 *
 * A value is considered array-like if it is object-like and has a length property.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an array-like.
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
