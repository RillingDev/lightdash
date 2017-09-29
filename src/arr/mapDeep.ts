import isArray from "../is/array";
import {
    ForEachIterator,
} from "../types";
import arrMap from "./map";

/**
 * Deeply maps the values of the input array with the iterator function and return the result
 *
 * @param {any[]} arr
 * @param {ForEachIterator} fn
 * @returns {any[]}
 */
const arrMapDeep = (arr: any[], fn: ForEachIterator): any[] => arrMap(arr,
    (val, index) => isArray(val) ? arrMapDeep(val, fn) : fn(val, index, arr));

export default arrMapDeep;
