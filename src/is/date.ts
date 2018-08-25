import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is a date object.
 *
 * @function isDate
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isDate(Date())
 * // => true
 *
 * isDate(new Date())
 * // => true
 *
 * @example
 * isDate(123213231)
 * // => false
 */
const isDate = (val: any): val is Date => isInstanceOf(val, Date);

export { isDate };
