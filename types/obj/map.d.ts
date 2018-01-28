import { forEachEntryMapper } from "../types";
import { IGenericObject } from "../interfaces";
/**
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns a = {a: 8, b: 4}
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 */
declare const objMap: <T, U>(obj: IGenericObject<T>, fn: forEachEntryMapper<T, U>) => IGenericObject<U>;
export default objMap;
