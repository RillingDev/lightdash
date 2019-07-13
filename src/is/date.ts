import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is a date instance.
 *
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a date instance.
 * @example
 * isDate(new Date())
 * // => true
 *
 * isDate(123213231)
 * // => false
 */
const isDate = (val: any): val is Date => isInstanceOf(val, Date);

export { isDate };
