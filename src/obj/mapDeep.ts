import isObject from "../is/object";
import {
    ForEachEntryIterator,
} from "../types";
import objMap from "./map";

/**
 * Deeply maps each entry of an object and returns the result
 *
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 */
const objMapDeep = (obj: object, fn: ForEachEntryIterator): object => objMap(obj, (val, key, index, objNew) => {
    if (isObject(val)) {
        return objMapDeep(val, fn);
    } else {
        return fn(val, key, index, objNew);
    }
});

export default objMapDeep;
