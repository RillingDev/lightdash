import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { IAnyObject } from "./lib/IAnyObject";
/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function and a pre-filled weak set of references.
 *
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj Object to decycle.
 * @param {function} [fn=() => null] Decycling function (`fn(key: *, val: any, index: number, obj: object) => void`)
 * @param {WeakSet<any>} [references=new WeakSet()] WeakSet prefilled with encountered references.
 * @returns {Object} Decycled object.
 * @example
 * const a = {a: {}, b: 1, c: 2};
 *
 * a.a = a;
 *
 * objDecycle(a)
 * // => {a: null, b: 1, c: 2}
 *
 * objDecycle(a, key => `_${key}`)
 * // => {a: "_a", b: 1, c: 2}
 */
declare const objDecycle: (obj: IAnyObject, fn?: forEachEntryMapper<any, any>, references?: WeakSet<any>) => object;
export { objDecycle };
