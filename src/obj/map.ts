import forEachEntry from "../for/eachEntry";
import {
    forEachEntryIterator,
} from "../lightdash.d";
import objClone from "./clone";

/**
 * Maps each entry of an object and returns the result
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * //returns a = {a:8, b:4}
 * objMap({a:4, b:2},val=>val*2)
 */
const objMap = (obj: object, fn: forEachEntryIterator): object => {
    const objNew: { [key: string]: any } = objClone(obj);

    forEachEntry(objNew, (val, key, index) => {
        objNew[key] = fn(val, key, index, objNew);
    });

    return objNew;
};

export default objMap;
