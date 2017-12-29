import { forEachEntryIterator } from "../types";
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
declare const forEachEntryDeep: (obj: object, fn: forEachEntryIterator) => void;
export default forEachEntryDeep;
