import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { ITypedObject } from "./lib/ITypedObject";
/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @function objMapDeep
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @param {function} fn fn(key: any, val: any, index: number, obj: object)
 * @returns {Object}
 * @example
 * arrMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
declare const objMapDeep: (obj: ITypedObject<any>, fn: forEachEntryMapper<any, any>) => ITypedObject<any>;
export { objMapDeep };
