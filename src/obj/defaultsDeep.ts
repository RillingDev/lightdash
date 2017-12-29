import { IGenericObject } from "../types";
import forEachEntry from "../for/eachEntry";
import isNil from "../is/nil";
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
const objDefaultsDeep = (obj: IGenericObject, objDefault: object): object => {
    const result: IGenericObject = objFrom(obj);

    forEachEntry(objDefault, (valDefault: any, keyDefault: string) => {
        const valGiven = obj[keyDefault];

        if (isObjectLike(valDefault)) {
            result[keyDefault] = isObjectLike(valGiven)
                ? objDefaultsDeep(valGiven, valDefault)
                : valDefault;
        } else {
            result[keyDefault] = isNil(valGiven) ? valDefault : valGiven;
        }
    });

    return result;
};

export default objDefaultsDeep;
