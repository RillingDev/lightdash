import { forEachEntryIterator, IGenericObject } from "../types";
/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * // returns a = {a: 0, b: 2}
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => a[key] = val * index)
 */
declare const forEachEntry: <T>(obj: IGenericObject<T>, fn: forEachEntryIterator<T>) => void;
export default forEachEntry;
