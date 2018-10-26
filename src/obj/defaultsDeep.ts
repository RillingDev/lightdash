import { forEachEntry } from "../for/eachEntry";
import { isArray } from "../is/array";
import { isObjectLike } from "../is/objectLike";
import { isUndefined } from "../is/undefined";
import { objFrom } from "./from";
import { ITypedObject } from "./lib/ITypedObject";

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
const objDefaultsDeep = (
    obj: ITypedObject<any>,
    objDefault: ITypedObject<any>
): ITypedObject<any> => {
    const result: ITypedObject<any> = isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);

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

export { objDefaultsDeep };
