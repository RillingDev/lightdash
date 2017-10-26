import isNil from "../is/nil";
import {
    IGenericObject,
} from "../types";
import objMap from "./map";

/**
 * Sets every nil property of object to the value from the default object
 *
 * @function objMerge
 * @memberof Object
 * @since 2.6.0
 * @param {Object} obj
 * @param {Object} objSrc
 * @returns {Object}
 * @example
 * //returns a = {a:1,b:2,c:5}
 * objMerge({a:1,c:5},{a:1,b:2,c:3})
 */
/* const objMerge = (obj: IGenericObject, objDefault: object): object => objMap(
    objDefault,
    (val, key) => isNil(obj[key]) ? val : obj[key]);

export default objMerge;
 */
