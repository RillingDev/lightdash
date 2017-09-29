import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an date object
 *
 * @param {*} val
 * @returns {boolean}
 */
const isDate = (val: any): boolean => isInstanceOf(val, Date);

export default isDate;
