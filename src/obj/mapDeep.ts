import isObject from "../is/object";
import {
    ForEachEntryIterator,
} from "../types";
import objMap from "./map";

/**
 * Deeply maps each entry of an object and returns the result
 *
 * @param {Object} obj
 * @param {ForEachEntryIterator} fn
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
