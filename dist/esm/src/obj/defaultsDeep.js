import { forEachEntry } from "../for/eachEntry";
import { isObjectLike } from "../is/objectLike";
import { isUndefined } from "../is/undefined";
import { objFrom } from "./from";
// TODO: Figure out a way to properly use generics here.
/**
 * Recursively sets every nil property of object to the value from the default object.
 *
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj Object to default.
 * @param {Object} objDefault Object containing the default values.
 * @returns {Object} Object containing the default values in keys it did not have or had nil value in.
 * @example
 * objDefaultsDeep({a: [1, 2], c: {f: "x"}}, {a: [1, 2, 3], b: 2, c: {f: "y"}})
 * // => {a: [1, 2, 3], b: 2, c: {f: "x"}}
 */
const objDefaultsDeep = (obj, objDefault) => {
    const defaulted = Array.isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);
    forEachEntry(objDefault, (valDefault, keyDefault) => {
        const valGiven = obj[keyDefault];
        if (isObjectLike(valDefault)) {
            defaulted[keyDefault] = isObjectLike(valGiven)
                ? objDefaultsDeep(valGiven, valDefault)
                : valDefault;
        }
        else {
            defaulted[keyDefault] = isUndefined(valGiven)
                ? valDefault
                : valGiven;
        }
    });
    return defaulted;
};
export { objDefaultsDeep };
//# sourceMappingURL=defaultsDeep.js.map