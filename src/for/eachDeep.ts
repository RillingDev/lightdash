import isArray from "../is/array";
import {
    ForEachIterator,
} from "../types";
import forEach from "./each";

/**
 * Deeply iterate over each value of an array
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 */
const forEachDeep = (arr: any[], fn: ForEachIterator): void => forEach(arr,
    (val, index) => isArray(val) ? forEachDeep(val, fn) : fn(val, index, arr));

export default forEachDeep;
