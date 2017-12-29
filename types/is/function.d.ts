/**
 * Checks if a value is a function.
 *
 * @function isFunction
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isFunction(function a(){})
 * isFunction(() => 1)
 *
 * @example
 * // returns false
 * isFunction(null)
 */
declare const isFunction: (val: any) => boolean;
export default isFunction;
