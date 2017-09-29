import isTypeOf from "./typeOf";

/**
 * Checks if a value is undefined
 *
 * @param {*} val
 * @returns {boolean}
 */
const isUndefined = (val: any): boolean => isTypeOf(val, "undefined");

export default isUndefined;
