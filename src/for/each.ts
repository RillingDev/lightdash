import {
    ForEachIterator,
} from "../types";

/**
 * Iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 */
const forEach = (arr: any[], fn: ForEachIterator): void => arr.forEach(fn);

export default forEach;
