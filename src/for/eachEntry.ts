import { entries, forEachEntryIterator } from "../types";
import objEntries from "../obj/entries";
import forEach from "./each";

/**
 * Iterates over each entry of an object
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @example
 * // returns a = {a: 0, b: 2}
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (val, key, index) => a[key] = val * index)
 */
const forEachEntry = (obj: object, fn: forEachEntryIterator): void => {
    forEach(objEntries(obj), (entry: entries, index: number) => {
        fn(entry[1], entry[0], index, obj);
    });
};

export default forEachEntry;
