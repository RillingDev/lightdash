import isObject from "../is/object";
import {
    ForEachEntryIterator,
} from "../types";
import forEachEntry from "./eachEntry";
/**
 * Deeply iterate over each entry of an object
 *
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 */
const forEachEntryDeep = (obj: object, fn: ForEachEntryIterator): void => forEachEntry(obj,
    (val, key, index) => isObject(val) ? forEachEntryDeep(val, fn) : fn(val, key, index, obj));

export default forEachEntryDeep;
