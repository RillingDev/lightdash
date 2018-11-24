import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { IAnyObject } from "./lib/IAnyObject";
/**
 * Recursively maps each entry of an object and returns the result.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to map.
 * @param {function} fn Mapping function (`fn(key: any, val: any, index: number, obj: object) => any`)
 * @returns {Object} Mapped object.
 * @example
 * objMapDeep({a: {b: 2, c: [10, 20]}}, (key, val) => val * 2)
 * // => {a: {b: 4, c: [20, 40]}}
 */
declare const objMapDeep: (obj: IAnyObject, fn: forEachEntryMapper<any, any>) => IAnyObject;
export { objMapDeep };
