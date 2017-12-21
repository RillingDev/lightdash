import { forEachEntryIterator } from "../types";
import isObjectLike from "../is/objectLike";
import forEachEntry from "./eachEntry";

/**
 * Recursively iterates over each entry of an object
 *
 * @function forEachEntryDeep
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @example
 * // returns {a: 0, b: {c: [0, 2]}}
 * const a = {a: 1, b: {c: [1, 2]}};
 *
 * forEachEntryDeep(a, (val, key, index, obj) => obj[key] = index * val)
 */
const forEachEntryDeep = (obj: object, fn: forEachEntryIterator): void =>
    forEachEntry(
        obj,
        (val: any, key: any, index: number) =>
            isObjectLike(val)
                ? forEachEntryDeep(val, fn)
                : fn(val, key, index, obj)
    );

export default forEachEntryDeep;
