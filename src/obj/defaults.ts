import arrFrom from "../arr/from";
import forEachEntry from "../for/eachEntry";
import hasKey from "../has/key";
import isArray from "../is/array";
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
const objDefaults = (obj: object, objDefault: object): object => {
    const result = isArray(obj) ? arrFrom(obj) : objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (!hasKey(obj, keyDefault)) {
            result[keyDefault] = valDefault;
        }
    });

    return result;
};

export default objDefaults;
