import { forEachEntryIterator, IGenericObject } from "../types";
import isObjectLike from "../is/objectLike";
import forEachEntry from "./eachEntry";

/**
 * Recursively iterates over each entry of an object
 *
 * @function forEachEntryDeep
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * // returns {a: 0, b: {c: [0, 2]}}
 * const a = {a: 1, b: {c: [1, 2]}};
 *
 * forEachEntryDeep(a, (key, val, index, obj) => obj[key] = index * val)
 */
const forEachEntryDeep = <T>(obj: IGenericObject<T>, fn: forEachEntryIterator<T>): void =>
    forEachEntry(
        obj,
        (key, val, index) =>
            isObjectLike(val)
                ? forEachEntryDeep(<IGenericObject<T>>val, fn)
                : fn(key, val, index, obj)
    );

export default forEachEntryDeep;
