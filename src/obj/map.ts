import { forEachEntry } from "../for/eachEntry";
import { ForEachEntryMapper } from "../for/lib/ForEachEntryMapper";
import { AnyObject } from "./lib/AnyObject";

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
    obj: AnyObject,
    fn: ForEachEntryMapper<any, any>
): AnyObject => {
    const mapped: AnyObject = Array.isArray(obj) ? [] : {};

    forEachEntry(obj, (val, key) => {
        mapped[key] = fn(val, key, obj);
    });

    return mapped;
};

export { objMap };
