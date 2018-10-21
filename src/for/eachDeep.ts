import { isArray } from "../is/array";
import { forEachIterator } from "./lib/forEachIterator";

/**
 * Recursively iterates over each element in an array.
 *
 * @memberof For
 * @param {any[]} arr Array to iterate.
 * @param {function} fn Function to use (`fn(val: *, index: number, arr: any[])`).
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => {
 *     arr[index] = index * val;
 * })
 * // a = [0, 4, [0, 1, [0], 12]]
 */
const forEachDeep = (arr: any[], fn: forEachIterator<any>): void =>
    arr.forEach(
        (val, index) =>
            isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr)
    );

export { forEachDeep };
