import isArray from "../is/array";
import {
    ForEachIterator,
} from "../types";
import forEach from "./each";

/**
 * Deeply iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {function} fn fn(val: any, index: number, arr: any[])
 * @example
 * //returns [0,4,[0,1,[0],12]]
 * const a = [2,4,[1,1,[16],4]];
 *
 * forEachDeep(a,(val,index,arr)=>arr[index]=index*val)
 */
const forEachDeep = (arr: any[], fn: ForEachIterator): void => forEach(arr,
    (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

export default forEachDeep;
