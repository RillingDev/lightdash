import { ITypedObject } from "../obj/lib/ITypedObject";
import { forEachEntryIterator } from "./lib/forEachEntryIterator";
/**
 * Iterates over each entry of an object.
 *
 * @memberof For
 * @param {object} obj Object to iterate.
 * @param {function} fn Function to use (`fn(key: *, val: *, index: number, obj: object) => void`).
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
