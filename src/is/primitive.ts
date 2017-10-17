import isObjectLike from "./objectLike";

/**
 * Checks if a value is a primitive
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isPrimitive(1)
 * isPrimitive(null)
 *
 * @example
 * //returns false
 * isPrimitive({})
 * isPrimitive([])
 */
const isPrimitive = (val: any): boolean => !isObjectLike(val);

export default isPrimitive;
