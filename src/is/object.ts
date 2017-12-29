import isNil from "./nil";
import isTypeOf from "./typeOf";

/**
 * Checks if a value is an object.
 *
 * @function isObject
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isObject({})
 * isObject([])
 * isObject(() => 1))
 *
 * @example
 * // returns false
 * isObject(1)
 */
const isObject = (val: any): boolean =>
    !isNil(val) && (isTypeOf(val, "object") || isTypeOf(val, "function"));

export default isObject;
