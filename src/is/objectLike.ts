import { isNil } from "./nil";
import { isObject } from "./object";
import { isTypeOf } from "./typeOf";

/**
 * Checks if a value is not nil and has a type of object.
 *
 * The main difference to {@link isObject} is that functions are not considered object-like,
 * because `typeof function(){}` returns `"function"`.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([])
 * // => true
 *
 * isObjectLike(() => 1))
 * // => false
 *
 * isObjectLike(1)
 * // => false
 */
const isObjectLike = (val: any): boolean =>
    !isNil(val) && isTypeOf(val, "object");

export { isObjectLike };
