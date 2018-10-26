import { forEachEntry } from "../for/eachEntry";
import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { ITypedObject } from "./lib/ITypedObject";

// TODO: Figure out a way to properly use generics here.
/**
 * Maps each entry of an object and returns the result.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to map.
 * @param {function} fn Mapping function (`fn(key: any, val: any, index: number, obj: object) => any`)
 * @returns {Object} Mapped object.
 * @example
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 * // => {a: 8, b: 4}
 */
const objMap = (
    obj: ITypedObject<any>,
    fn: forEachEntryMapper<any, any>
): ITypedObject<any> => {
    const objNew: ITypedObject<any> = Array.isArray(obj) ? [] : {};

    forEachEntry(obj, (key, val, index) => {
        objNew[key] = fn(key, val, index, obj);
    });

    return objNew;
};

export { objMap };
