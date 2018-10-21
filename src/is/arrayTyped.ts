import { isNil } from "./nil";
import { isNumber } from "./number";

/**
 * Checks if a value is a typed array.
 *
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
 * isArrayTyped([]);
 * // => false
 */
const isArrayTyped = (
    val: any
): val is
    | Int8Array
    | Int16Array
    | Int32Array
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Float32Array
    | Float64Array => !isNil(val) && isNumber(val.BYTES_PER_ELEMENT);

export { isArrayTyped };
