import { forEachIterator } from "./lib/forEachIterator";
/**
 * Recursively iterates over each element in an array.
 *
 * @function forEachDeep
 * @memberof For
 * @param {any[]} arr
 * @param {function} fn fn(val: *, index: number, arr: any[])
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => {
 *     arr[index] = index * val;
 * })
 * // a = [0, 4, [0, 1, [0], 12]]
 */
declare const forEachDeep: (arr: any[], fn: forEachIterator<any>) => void;
export { forEachDeep };
