import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an map
 *
 * @param {*} val
 * @returns {boolean}
 */
const isSet = (val: any): boolean => isInstanceOf(val, Set);

export default isSet;
