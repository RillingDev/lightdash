import {
    ForEachIterator,
} from "../types";

/**
 * Maps the values of the input array with the iterator function and return the result
 *
 * @function arrMap
 * @memberof Array
 * @since 1.0.0
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 * @example
 * //returns [4,8]
 * arrMap([2,4],val=>val*2)
 */
const arrMap = (arr: any[], fn: ForEachIterator): any[] => arr.map(fn);

export default arrMap;
