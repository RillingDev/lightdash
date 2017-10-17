import hasLength from "../has/length";
import isObjectLike from "./objectLike";

/**
 * Checks if a value is object-like and has a length property
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isArrayLike([])
 * isArrayLike({length:0})
 *
 * @example
 * //returns false
 * isArrayLike({})
 * isArrayLike(null)
 * isArrayLike("foo")
 * isArrayLike(1)
 */
const isArrayLike = (val: any): boolean => isObjectLike(val) && hasLength(val);

export default isArrayLike;
