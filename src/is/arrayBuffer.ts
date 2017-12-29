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
 * // returns true
 * isArrayBuffer(new ArrayBuffer())
 *
 * @example
 * // returns false
 * isArrayBuffer([1, 2])
 */
// @ts-ignore: ArrayBuffer declaration is outdated
const isArrayBuffer = (val: any): boolean => isInstanceOf(val, ArrayBuffer);

export default isArrayBuffer;
