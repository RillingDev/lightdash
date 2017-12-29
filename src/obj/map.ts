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
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns a = {a: 8, b: 4}
 * objMap({a: 4, b: 2}, val => val * 2)
 */
const objMap = (obj: object, fn: forEachEntryIterator): object => {
    const objNew: IGenericObject = objFrom(obj);

    forEachEntry(objNew, (val: any, key: string, index: number) => {
        objNew[key] = fn(val, key, index, objNew);
    });

    return objNew;
};

export default objMap;
