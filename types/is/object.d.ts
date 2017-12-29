/**
 * Checks if a value is an object.
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isObject({})
 * isObject([])
 * isObject(() => 1))
 *
 * @example
 * // returns false
 * isObject(1)
 */
declare const isObject: (val: any) => boolean;
export default isObject;
