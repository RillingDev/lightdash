import isTypeOf from "./typeOf";

/**
 * Checks if a value is a number
 *
 * @param {*} val
 * @returns {boolean}
 */
const isNumber = (val: any): boolean => isTypeOf(val, "number");

export default isNumber;
