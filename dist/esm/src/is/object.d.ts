import { IAnyObject } from "../obj/lib/IAnyObject";
/**
 * Checks if a value is an object.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an object.
 * @example
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => true
 *
 * isObject(() => 1))
 * // => true
 *
 * isObject(1)
 * // => false
 */
declare const isObject: (val: any) => val is IAnyObject;
export { isObject };
//# sourceMappingURL=object.d.ts.map