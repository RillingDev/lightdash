import { forEachEntryMapper, nestedObj, nestedObjItem } from "../types";
import { IGenericObject } from "../interfaces";
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
const objMap = <T, U>(obj: IGenericObject<T>, fn: forEachEntryMapper<T, U>): IGenericObject<U> => {
    const objNew: IGenericObject<U> = {};

    forEachEntry(obj, (key, val, index) => {
        objNew[key] = fn(key, val, index, obj);
    });

    return objNew;
};

export default objMap;
