import { IGenericObject } from "../interfaces";
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
declare const objDefaultsDeep: <T>(obj: IGenericObject<T | IGenericObject<T>>, objDefault: IGenericObject<T | IGenericObject<T>>) => IGenericObject<T | IGenericObject<T>>;
export default objDefaultsDeep;
