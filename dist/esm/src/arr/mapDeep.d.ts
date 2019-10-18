import { ForEachMapper } from "../for/lib/ForEachMapper";
/**
 * Recursively maps the values of the input array with the iterator function and return the result.
 *
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr Array to map.
 * @param {function} fn Function to use for mapping (`fn(val: *, index: number, arr: any[]) => any`).
 * @returns {any[]} Array with the mapped values.
 * @example
 * arrMapDeep([2, 4, [1, 1, [16], 4]], val => val * 2)
 * // => [4, 8, [2, 2, [32], 8]]
 */
declare const arrMapDeep: (arr: any[], fn: ForEachMapper<any, any>) => any[];
export { arrMapDeep };
//# sourceMappingURL=mapDeep.d.ts.map