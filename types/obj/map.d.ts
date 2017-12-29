import { forEachEntryIterator } from "../types";
/**
 * Maps each entry of an object and returns the result.
 *
 * @function objMap
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(val: any, key: any, index: number, arr: any[])
 * @returns {Object}
 * @example
 * // returns a = {a: 8, b: 4}
 * objMap({a: 4, b: 2}, val => val * 2)
 */
declare const objMap: (obj: object, fn: forEachEntryIterator) => object;
export default objMap;
