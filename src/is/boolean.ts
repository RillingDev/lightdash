import isTypeOf from "./typeOf";

/**
 * Checks if a value is a boolean
 *
 * @param {*} val
 * @returns {boolean}
 */
const isBoolean = (val: any): boolean => isTypeOf(val, "boolean");

export default isBoolean;
