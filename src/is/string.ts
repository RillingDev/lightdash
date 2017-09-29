import isTypeOf from "./typeOf";

/**
 * Checks if a value is a string
 *
 * @param {*} val
 * @returns {boolean}
 */
const isString = (val: any): boolean => isTypeOf(val, "string");

export default isString;
