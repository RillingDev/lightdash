import { forEachEntryIterator, IGenericObject } from "../types";
import forEachEntry from "../for/eachEntry";
import objFrom from "./from";

/**
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns a = {a: 8, b: 4}
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 */
const objMap = (obj: object, fn: forEachEntryIterator): object => {
    const objNew: IGenericObject = objFrom(obj);

    forEachEntry(objNew, (key, val, index) => {
        objNew[key] = fn(key, val, index, objNew);
    });

    return objNew;
};

export default objMap;
