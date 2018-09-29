/**
 * Checks if a value is a date object.
 *
 * @function isDate
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isDate(new Date())
 * // => true
 *
 * isDate(123213231)
 * // => false
 */
declare const isDate: (val: any) => val is Date;
export { isDate };