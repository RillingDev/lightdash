import { IGenericObject } from "../interfaces";
import { nestedObj } from "../types";
import forEachEntry from "../for/eachEntry";
import isUndefined from "../is/undefined";
import isObjectLike from "../is/objectLike";
import objFrom from "./fromDeep";

/**
 * Recursively sets every nil property of object to the value from the default object.
 *
 * @function objDefaultsDeep
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * // returns a = {a: [1, 2, 3], b: 2, c: {f: "x"}}
 * objDefaultsDeep({a: [1, 2], c: {f: "x"}}, {a: [1, 2, 3], b: 2, c: {f: "y"}})
 */
const objDefaultsDeep = <T>(obj: nestedObj<T>, objDefault: nestedObj<T>): nestedObj<T> => {
    const result = <nestedObj<T>>objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        const valGiven = obj[keyDefault];

        if (isObjectLike(valDefault)) {
            // @ts-ignore: @todo
            result[keyDefault] = isObjectLike(valGiven) ?
                objDefaultsDeep(<nestedObj<T>>valGiven, <nestedObj<T>>valDefault) :
                valDefault;
        } else {
            result[keyDefault] = isUndefined(valGiven) ? valDefault : valGiven;
        }
    });

    return result;
};

export default objDefaultsDeep;
