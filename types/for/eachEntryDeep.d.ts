import { forEachEntryIterator, nestedObjItem } from "../types";
import { IGenericObject } from "../interfaces";
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
declare const forEachEntryDeep: <T>(obj: IGenericObject<nestedObjItem<T>>, fn: forEachEntryIterator<nestedObjItem<T>>) => void;
export default forEachEntryDeep;
