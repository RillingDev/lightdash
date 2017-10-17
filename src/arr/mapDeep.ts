import isArray from "../is/array";
import {
    ForEachIterator,
} from "../types";
import arrMap from "./map";

/**
 * Deeply maps the values of the input array with the iterator function and return the result
 *
 * @since 1.0.0
 * @param {any[]} arr
 * @param {ForEachIterator} fn fn(val: any, index: number, arr: any[])
 * @returns {any[]}
 */
const arrMapDeep = (arr: any[], fn: ForEachIterator): any[] => arrMap(arr,
    (val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

export default arrMapDeep;
