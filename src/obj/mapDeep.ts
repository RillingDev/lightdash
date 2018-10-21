import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { isObjectLike } from "../is/objectLike";
import { ITypedObject } from "./lib/ITypedObject";
import { objMap } from "./map";

// TODO: Figure out a way to properly use generics here.
/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
 * @returns {Object}
 * @example
 * objMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
const objMapDeep = (
    obj: ITypedObject<any>,
    fn: forEachEntryMapper<any, any>
): ITypedObject<any> =>
    objMap(
        obj,
        (key, val, index, objNew) =>
            isObjectLike(val)
                ? objMapDeep(val, fn)
                : fn(key, val, index, objNew)
    );

export { objMapDeep };
