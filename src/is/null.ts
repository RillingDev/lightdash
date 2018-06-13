import { isUndefined } from "./undefined";

/**
 * Checks if a value is null.
 *
 * @function isNull
 * @memberof Is
 * @since 7.1.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isNull(null)
 * // => true
 *
 * @example
 * isNull(0)
 * // => false
 *
 * isNull(undefined)
 * // => false
 */
const isNull = (val: any): boolean => val === null;

export { isNull };
