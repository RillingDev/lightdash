import {
    ForEachIterator,
} from "../types";

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 * @returns {any[]}
 */
const arrMap = (arr: any[], fn: ForEachIterator): any[] => arr.map(fn);

export default arrMap;
