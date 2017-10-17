import {
    ForEachIterator,
} from "../types";

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {ForEachIterator} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 */
const arrMap = (arr: any[], fn: ForEachIterator): any[] => arr.map(fn);

export default arrMap;
