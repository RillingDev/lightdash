import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is an array-buffer.
 *
 * @function isArrayBuffer
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayBuffer(new ArrayBuffer())
 * // => true
 *
 * @example
 * isArrayBuffer([1, 2])
 * // => false
 */
// @ts-ignore: ArrayBuffer declaration is invalid
const isArrayBuffer = (val: any): boolean => isInstanceOf(val, ArrayBuffer);

export default isArrayBuffer;
