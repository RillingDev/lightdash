/**
 * Checks if a value is an error.
 *
 * @function isError
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isError(new Error())
 * // => true
 *
 * isError(new URIError())
 * // => true
 *
 * @example
 * isError("foo")
 * // => false
 */
declare const isError: (val: any) => boolean;
export default isError;
