import isTypeOf from "./typeOf";

/**
 * Checks if a value is undefined.
 *
 * @function isUndefined
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * const a = {};
 *
 * isUndefined(a.b)
 * // => true
 *
 * isUndefined(undefined)
 * // => true
 *
 * @example
 * const a = {};
 *
 * isUndefined(1)
 * // => false
 *
 * isUndefined(a)
 * // => false
 */
const isUndefined = (val: any): boolean => isTypeOf(val, "undefined");

export default isUndefined;
