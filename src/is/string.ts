import isTypeOf from "./typeOf";

/**
 * Checks if a value is a string
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isString("foo")
 *
 * @example
 * //returns false
 * isString(1)
 */
const isString = (val: any): boolean => isTypeOf(val, "string");

export default isString;
