import { forEachMapper } from "../types";
/**
 * Collects the values of an array in a Map as arrays.
 *
 * @function arrCollect
 * @memberof Array
 * @since 6.1.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {Map<any, any[]>} Map<val: any, arr: any[]>
 * @example
 * arrCollect([1, 2, 3, 4, 5], val => val % 2)
 * // => Map<any, any[]>{0: [2, 4], 1: [1, 3, 5]}
 */
declare const arrCollect: <T>(arr: T[], fn: forEachMapper<T, any>) => Map<any, T[]>;
export { arrCollect };
