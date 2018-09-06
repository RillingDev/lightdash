import { forEachEntryIterator } from "./lib/forEachEntryIterator";
import { ITypedObject } from "../obj/lib/ITypedObject";

/**
 * Iterates over each entry of an object.
 *
 * @function forEachEntry
 * @memberof For
 * @param {object} obj
 * @param {function} fn fn(key: *, val: *, index: number, arr: any[])
 * @example
 * const a = {a: 1, b: 2};
 *
 * forEachEntry(a, (key, val, index) => {
 *     a[key] = val * index;
 * })
 * // a = {a: 0, b: 2}
 */
declare const forEachEntry: (obj: ITypedObject<any>, fn: forEachEntryIterator<any>) => void;
export { forEachEntry };
