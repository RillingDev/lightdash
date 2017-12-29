import { forEachIterator } from "../types";
/**
 * Recursively iterates over each element in an array
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * // returns a = [0, 4, [0, 1, [0], 12]]
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => arr[index] = index * val)
 */
declare const forEachDeep: <T>(arr: T[], fn: forEachIterator) => void;
export default forEachDeep;
