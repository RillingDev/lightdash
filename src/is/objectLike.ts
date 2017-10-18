import isNil from "./nil";
import isTypeOf from "./typeOf";

/**
 * Checks if a value is not nil and has a type of object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isObjectLike({})
 * isObjectLike([])
 *
 * @example
 * //returns false
 * isObjectLike(null)
 * isObjectLike(1)
 */
const isObjectLike = (val: any): boolean => !isNil(val) && isTypeOf(val, "object");

export default isObjectLike;
