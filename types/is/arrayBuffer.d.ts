/**
 * Checks if a value is an array-buffer.
 *
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayBuffer(new ArrayBuffer(8))
 * // => true
 *
 * isArrayBuffer([1, 2])
 * // => false
 */
declare const isArrayBuffer: (val: any) => val is ArrayBuffer;
export { isArrayBuffer };
