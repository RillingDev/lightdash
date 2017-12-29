/**
 * Checks if a value is an array-buffer.
 *
 * @function isArrayBuffer
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isArrayBuffer(new ArrayBuffer())
 *
 * @example
 * // returns false
 * isArrayBuffer([1, 2])
 */
declare const isArrayBuffer: (val: any) => boolean;
export default isArrayBuffer;
