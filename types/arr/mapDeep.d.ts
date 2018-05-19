import { forEachMapper } from "../types";
/**
 * Recursively maps the values of the input array with the iterator function and return the result.
 *
 * @function arrMapDeep
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 * @example
 * arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)
 * // => [4, 8, [2, 2, [32], 8]]
 */
declare const arrMapDeep: <T>(arr: T[], fn: forEachMapper<T, any>) => any[];
export default arrMapDeep;
