import { forEachEntryIterator } from "../types";
import isObjectLike from "../is/objectLike";
import objMap from "./map";

/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns {a: {b: 4, c: [20, 40]}}
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, val => val * 2)
 */
const objMapDeep = (obj: object, fn: forEachEntryIterator): object =>
    objMap(
        obj,
        (val: any, key: string, index: number, objNew: object | undefined) => {
            if (isObjectLike(val)) {
                return objMapDeep(val, fn);
            } else {
                return fn(val, key, index, objNew);
            }
        }
    );

export default objMapDeep;
