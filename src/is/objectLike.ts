import isNil from "./nil";
import isTypeOf from "./typeOf";

/**
 * Checks if a value is not nil and has a typeof object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObjectLike = (val: any): boolean => !isNil(val) && isTypeOf(val, "object");

export default isObjectLike;
