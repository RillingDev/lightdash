import isObjectLike from "./objectLike";

/**
 * Checks if a value is a primitive
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike(1)
 * isObjectLike(null)
 *
 * @example
 * //returns false
 * isObjectLike({})
 * isObjectLike([])
 */
const isPrimitive = (val: any): boolean => !isObjectLike(val);

export default isPrimitive;
