/**
 * Checks if the value has a certain type-string.
 *
 * @function isTypeOf
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @param {string} type
 * @returns {boolean}
 * @example
 * isTypeOf({}, "object")
 * // => true
 *
 * isTypeOf([], "object")
 * // => true
 *
 * isTypeOf("foo", "string")
 * // => true
 *
 * @example
 * isTypeOf("foo", "number")
 * // => false
 */
declare const isTypeOf: (val: any, type: string) => boolean;
export default isTypeOf;
