import { forEachMapper } from "../for/lib/forEachMapper";
/**
 * Collects the values of an array in a Map as arrays.
 * If the fn returns a nil value, the element will be skipped,
 * otherwise the return value will be used as key.
 *
 * @function arrCollect
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr
 * @param {function} fn fn(val: *, index: number, arr: any[])
 * @returns {Map<any, any[]>} Map<val: *, arr: any[]>
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
declare const arrCollect: <T, U = any>(arr: T[], fn: forEachMapper<T, U>) => Map<U, T[]>;
export { arrCollect };
