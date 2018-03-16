import isNumber from "./number";

/**
 * Checks if a value is a typed array.
 *
 * @function isArrayTyped
 * @memberof Is
 * @since 2.10.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isArrayTyped(new Int16Array());
 * // => true
 *
 * isArrayTyped(new Uint8Array());
 * // => true
 *
 * @example
 * isArrayTyped([]);
 * // => false
 */
const isArrayTyped = (val: any): boolean => isNumber(val.BYTES_PER_ELEMENT);

export default isArrayTyped;
