import { forEachEntryIterator } from "../types";
/**
 * Recursively iterates over each entry of an object
 *
 * @function forEachEntryDeep
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @example
 * const a = {a: 1, b: {c: [1, 2]}};
 *
 * forEachEntryDeep(a, (key, val, index, obj) => obj[key] = index * val)
 * // a = {a: 0, b: {c: [0, 2]}}
 */
declare const forEachEntryDeep: (obj: object, fn: forEachEntryIterator<any>) => void;
export default forEachEntryDeep;
