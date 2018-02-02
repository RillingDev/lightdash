import forEachEntry from "../for/eachEntry";
import isUndefined from "../is/undefined";
import isObjectLike from "../is/objectLike";
import objFrom from "./fromDeep";
import isArray from "../is/array";
import arrFrom from "../arr/from";
import { objectStringKeyed } from "../types";

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
const objDefaultsDeep = (obj: object, objDefault: object): object => {
    const result: objectStringKeyed = isArray(obj) ? arrFrom(obj) : objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        const valGiven = (<objectStringKeyed>obj)[keyDefault];

        if (isObjectLike(valDefault)) {
            result[keyDefault] =
                isObjectLike(valGiven)
                    ? objDefaultsDeep(valGiven, valDefault)
                    : valDefault;
        } else {
            result[keyDefault] = isUndefined(valGiven) ? valDefault : valGiven;
        }
    });

    return result;
};

export default objDefaultsDeep;
