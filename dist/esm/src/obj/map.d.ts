import { forEachEntryMapper } from "../for/lib/forEachEntryMapper";
import { IAnyObject } from "./lib/IAnyObject";
/**
 * Maps each entry of an object and returns the result.
 *
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj Object to map.
 * @param {function} fn Mapping function (`fn(key: any, val: any, index: number, obj: object) => any`)
 * @returns {Object} Mapped object.
 * @example
 * objMap({a: 4, b: 2}, (key, val) => val * 2)
 * // => {a: 8, b: 4}
 */
declare const objMap: (obj: IAnyObject, fn: forEachEntryMapper<any, any>) => IAnyObject;
export { objMap };
//# sourceMappingURL=map.d.ts.map