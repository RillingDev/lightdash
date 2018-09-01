import { forEachEntry } from "../for/eachEntry";
import { isArray } from "../is/array";
import { isUndefined } from "../is/undefined";
import { objFrom } from "./from";
import { ITypedObject } from "./lib/ITypedObject";

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
 * objDefaults({a: 1, c: 5}, {a: 1, b: 2, c: 3})
 * // => {a: 1, b: 2, c: 5}
 */
const objDefaults = <T = any, U = any>(
    obj: ITypedObject<T>,
    objDefault: ITypedObject<U>
): ITypedObject<T> & ITypedObject<U> => {
    const result: ITypedObject<any> = isArray(obj)
        ? Array.from(obj)
        : objFrom(obj);

    forEachEntry(objDefault, (keyDefault, valDefault) => {
        if (isUndefined(obj[keyDefault])) {
            result[keyDefault] = valDefault;
        }
    });

    return result;
};

export { objDefaults };
