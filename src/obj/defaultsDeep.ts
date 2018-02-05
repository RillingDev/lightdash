import arrFrom from "../arr/from";
import forEachEntry from "../for/eachEntry";
import isArray from "../is/array";
import isObjectLike from "../is/objectLike";
import isUndefined from "../is/undefined";
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
const objDefaultsDeep = (obj: object, objDefault: object): object => {
    const result = isArray(obj) ? arrFrom(obj) : objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        const valGiven = obj[keyDefault];

        if (isObjectLike(valDefault)) {
            result[keyDefault] = isObjectLike(valGiven)
                ? objDefaultsDeep(valGiven, valDefault)
                : valDefault;
        } else {
            result[keyDefault] = isUndefined(valGiven) ? valDefault : valGiven;
        }
    });

    return result;
};

export default objDefaultsDeep;
