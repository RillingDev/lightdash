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
 * // returns true
 * isArrayTyped(new Int16Array());
 * isArrayTyped(new Uint8Array());
 *
 * @example
 * // returns false
 * isArrayTyped([]);
 */
const isArrayTyped = (val: any): boolean => isNumber(val.BYTES_PER_ELEMENT);

export default isArrayTyped;
