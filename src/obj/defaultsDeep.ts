import isNil from "../is/nil";
import isObject from "../is/object";
import {
    IGenericObject,
} from "../lightdash.d";
import objMap from "./map";

/**
 * Recursively sets every nil property of object to the value from the default object
 *
 * @function objDefaultsDeep
 * @memberof Object
 * @since 2.7.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * //returns a = {a:[1,2,3],b:2,c:{f:'x'}}
 * objDefaultsDeep({a:[1,2],c:{f:'x'}},{a:[1,2,3],b:2,c:{f:'y'}})
 */
const objDefaultsDeep = (obj: IGenericObject, objDefault: object): object => objMap(
    objDefault,
    (val: any, key: string) => {
        const valGiven = obj[key];

        if (isObject(val)) {
            if (isObject(valGiven)) {
                return objDefaultsDeep(valGiven, val);
            } else {
                return val;
            }
        } else {
            return isNil(valGiven) ? val : valGiven;
        }
    });

export default objDefaultsDeep;
