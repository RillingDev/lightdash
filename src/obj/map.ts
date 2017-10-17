import forEachEntry from "../for/eachEntry";
import {
    ForEachEntryIterator,
} from "../types";
import objClone from "./clone";

/**
 * Maps each entry of an object and returns the result
 *
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 */
const objMap = (obj: object, fn: ForEachEntryIterator): object => {
    const objNew: { [key: string]: any } = objClone(obj);

    forEachEntry(objNew, (val, key, index) => {
        objNew[key] = fn(val, key, index, objNew);
    });

    return objNew;
};

export default objMap;
