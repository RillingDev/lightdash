import forEachEntry from "../for/eachEntry";
import isNil from "../is/nil";
import {
    IGenericObject,
} from "../lightdash.d";
import objClone from "./cloneDeep";
/**
 * Sets every nil property of object to the value from the default object
 *
 * @function objDefaults
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * //returns a = {a:1,b:2,c:5}
 * objDefaults({a:1,c:5},{a:1,b:2,c:3})
 */
const objDefaults = (obj: IGenericObject, objDefault: object): object => {
    const result: IGenericObject = objClone(obj);

    forEachEntry(objDefault, (valDefault: any, keyDefault: string) => {
        if (isNil(obj[keyDefault])) {
            result[keyDefault] = valDefault;
        }
    });

    return result;
};

export default objDefaults;
