import { arrMapDeep } from "./mapDeep";

/**
 * Recursively creates a new array with the values of the input iterable.
 *
 * @memberof Array
 * @since 2.0.0
 * @param {any[]} arr Array to copy recursively.
 * @returns {any[]} Recursively copied array.
 * @example
 * const a = [1, 2, 3, [5, [6]]];
 * const b = arrFromDeep(a);
 *
 * b[3][1][0] = 10;
 * // a = [1, 2, 3, [5, [6]]]
 * // b = [1, 2, 3, [5, [10]]]
 */
const arrFromDeep = <T>(arr: T[]): T[] =>
    arrMapDeep(Array.from(arr), val => Array.isArray(val) ? Array.from(val) : val);

export { arrFromDeep };
