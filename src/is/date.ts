import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an date object
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isDate(new Date())
 * isDate(new Date("2017/1/1"))
 *
 * @example
 * //returns false
 * isDate(Date.now())
 * isDate("2017/1/1")
 */
const isDate = (val: any): boolean => isInstanceOf(val, Date);

export default isDate;
