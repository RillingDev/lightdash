/**
 * Checks if a value is a string.
 *
 * @function isString
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isString("foo")
 * // => true
 *
 * isString(1)
 * // => false
 */
declare const isString: (val: any) => val is string;
export { isString };
