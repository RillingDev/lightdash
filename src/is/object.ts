import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isObject = (val: any): boolean => isInstanceOf(val, Object);

export default isObject;
