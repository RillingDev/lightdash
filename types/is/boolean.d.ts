/**
 * Checks if a value is a boolean.
 *
 * @function isBoolean
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isBoolean(true)
 * // => true
 *
 * isBoolean(false)
 * // => true
 *
 * isBoolean(0)
 * // => false
 *
 * isBoolean(null)
 * // => false
 */
declare const isBoolean: (val: any) => val is boolean;
export { isBoolean };
