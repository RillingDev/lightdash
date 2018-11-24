import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { isObjectLike } from "../is/objectLike";
import { IAnyObject } from "./lib/IAnyObject";
import { objMap } from "./map";

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
const objDecycle = (
    obj: IAnyObject,
    fn: forEachEntryMapper<any, any> = () => null,
    references = new WeakSet<any>()
): object => {
    references.add(obj);

    return objMap(obj, (val, key, objNew) => {
        if (references.has(val)) {
            return fn(val, key, objNew);
        }

        if (isObjectLike(val)) {
            references.add(val);
            return objDecycle(val, fn, references);
        }

        return val;
    });
};

export { objDecycle };
