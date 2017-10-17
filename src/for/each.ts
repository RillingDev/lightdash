import {
    ForEachIterator,
} from "../types";

/**
 * Iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 */
const forEach = (arr: any[], fn: ForEachIterator): void => arr.forEach(fn);

export default forEach;
