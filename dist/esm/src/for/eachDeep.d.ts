import { ForEachIterator } from "./lib/ForEachIterator";
/**
 * Recursively iterates over each element in an array.
 *
 * @memberof For
 * @param {any[]} arr Array to iterate.
 * @param {function} fn Function to use (`fn(val: *, index: number, arr: any[]) => void`).
 * @example
 * const a = [2, 4, [1, 1, [16], 4]];
 *
 * forEachDeep(a, (val, index, arr) => {
 *     arr[index] = index * val;
 * })
 * // a = [0, 4, [0, 1, [0], 12]]
 */
declare const forEachDeep: (arr: any[], fn: ForEachIterator<any>) => void;
export { forEachDeep };
//# sourceMappingURL=eachDeep.d.ts.map