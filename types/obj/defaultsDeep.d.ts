import { IGenericObject } from "../types";
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
declare const objDefaultsDeep: (obj: IGenericObject, objDefault: object) => object;
export default objDefaultsDeep;
