import { AnyObject } from "../obj/lib/AnyObject";
import { ForEachEntryIterator } from "./lib/ForEachEntryIterator";

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
const forEachEntry = (obj: AnyObject, fn: ForEachEntryIterator<any>): void => {
    for (const [key, val] of Object.entries(obj)) {
        fn(val, key, obj);
    }
};

export { forEachEntry };
