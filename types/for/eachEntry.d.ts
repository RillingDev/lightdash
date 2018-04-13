import { forEachEntryIterator } from "../types";
/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => a[key] = val * index)
 * // a = {a: 0, b: 2}
 */
declare const forEachEntry: (obj: object, fn: forEachEntryIterator<any>) => void;
export default forEachEntry;
