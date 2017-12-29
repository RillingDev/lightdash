import isObject from "./object";

/**
 * Checks if a value is primitive.
 *
 * @function isPrimitive
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isPrimitive(1)
 * isPrimitive(null)
 *
 * @example
 * // returns false
 * isPrimitive({})
 * isPrimitive([])
 */
const isPrimitive = (val: any): boolean => !isObject(val);

export default isPrimitive;
