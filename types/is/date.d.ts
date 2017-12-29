/**
 * Checks if a value is a date object.
 *
 * @function isDate
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isDate(Date())
 * isDate(new Date())
 *
 * @example
 * // returns false
 * isDate(123213)
 */
declare const isDate: (val: any) => boolean;
export default isDate;
