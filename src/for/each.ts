import {
    ForEachIterator,
} from "../types";

/**
 * Iterates over each element in an array
 *
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * //returns a = [0,2,6]
 * const a = [1,2,3];
 *
 * forEach(a,(val,index)=>a[index]=val*index)
 */
const forEach = (arr: any[], fn: ForEachIterator): void => arr.forEach(fn);

export default forEach;
