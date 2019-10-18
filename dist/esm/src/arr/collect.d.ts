import { forEachMapper } from "../for/lib/forEachMapper";
/**
 * Collects the values of an array in a map as arrays.
 * If the function returns a nil value, the element will be skipped,
 * otherwise the return value will be used as key.
 *
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr Array to collect.
 * @param {function} fn Function to use for collection (`fn(val: *, index: number, arr: any[]) => any`).
 * @returns {Map<any, any[]>} Map<val: *, arr: any[]> Collected map.
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
declare const arrCollect: <T, U>(arr: T[], fn: forEachMapper<T, U>) => Map<U, T[]>;
export { arrCollect };
//# sourceMappingURL=collect.d.ts.map