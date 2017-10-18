import isNil from "../is/nil";
import {
    IGenericObject,
} from "../types";
import objMap from "./map";

/**
 * Sets every nil property of object to the value from the default object
 *
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objDefault
 * @returns {Object}
 * @example
 * //returns a = {a:1,b:2,c:5}
 * objDefaults({a:1,c:5},{a:1,b:2,c:3})
 */
const objDefaults = (obj: IGenericObject, objDefault: object): object => objMap(objDefault,
    (val, key) => isNil(obj[key]) ? val : obj[key]);

export default objDefaults;
