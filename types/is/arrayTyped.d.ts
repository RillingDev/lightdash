/**
 * Checks if a value is a typed array.
 *
 * @since 2.10.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a typed array.
 * @example
 * isArrayTyped(new Int16Array());
 * // => true
 *
 * isArrayTyped(new Uint8Array());
 * // => true
 *
 * isArrayTyped([]);
 * // => false
 */
declare const isArrayTyped: (val: any) => val is Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Float32Array | Float64Array;
export { isArrayTyped };
