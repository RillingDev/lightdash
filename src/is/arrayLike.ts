import hasLength from "../has/length";
import isObjectLike from "./objectLike";

/**
 * Checks if a value is object-like and has a length property
 *
 * @param {*} val
 * @returns {boolean}
 */
const isArrayLike = (val: any): boolean => isObjectLike(val) && hasLength(val);

export default isArrayLike;
