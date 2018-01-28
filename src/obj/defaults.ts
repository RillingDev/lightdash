import { IGenericObject } from "../interfaces";
import { nestedObj } from "../types";
import forEachEntry from "../for/eachEntry";
import hasKey from "../has/key";
import objFrom from "./from";

/**
 * Sets every nil property of object to the value from the default object.
 *
 * @function objDefaults
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * // returns a = {a: 1, b: 2, c: 5}
 * objDefaults({a: 1, c: 5}, {a: 1, b: 2, c: 3})
 */
const objDefaults = <T>(obj: IGenericObject<T>, objDefault: IGenericObject<T>): IGenericObject<T> => {
    const result = <IGenericObject<T>>objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (!hasKey(obj, keyDefault)) {
            result[keyDefault] = valDefault;
        }
    });

    return result;
};

export default objDefaults;
