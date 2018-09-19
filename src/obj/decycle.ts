import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { isObjectLike } from "../is/objectLike";
import { ITypedObject } from "./lib/ITypedObject";
import { objMap } from "./map";

/**
 * Replaces every circular reference in an object with a value, defaulting to null.
 *
 * Can take a custom replacer function and a pre-filled weak set of references.
 *
 * @function objDecycle
 * @memberof Object
 * @since 6.0.0
 * @param {Object} obj
 * @param {function} [fn = () => null] fn(key: *, val: any, index: number, obj: object)
 * @param {WeakSet<any>} [references=new WeakSet()]
 * @returns {Object}
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
    obj: ITypedObject<any>,
    fn: forEachEntryMapper<any, any> = () => null,
    references: WeakSet<any> = new WeakSet()
): object => {
    references.add(obj);

    return objMap(obj, (key, val, index, objNew) => {
        if (references.has(val)) {
            return fn(key, val, index, objNew);
        }

        if (isObjectLike(val)) {
            references.add(val);

            return objDecycle(val, fn, references);
        }

        return val;
    });
};

export { objDecycle };
