import forEachEntry from "../for/eachEntry";
import hasKey from "../has/key";
import objFrom from "./from";
import isArray from "../is/array";
import arrFrom from "../arr/from";
import { objectStringKeyed } from "../types"

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
const objDefaults = (obj: object, objDefault: object): object => {
    const result: objectStringKeyed = isArray(obj) ? arrFrom(obj) : objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (!hasKey(obj, keyDefault)) {
            result[keyDefault] = valDefault;
        }
    });

    return result;
};

export default objDefaults;
