import { isNil } from "./nil";
import { isTypeOf } from "./typeOf";
/**
 * Checks if a value is not nil and has a type of object.
 *
 * The main difference to {@link isObject} is that functions are not considered object-like,
 * because `typeof function(){}` returns `"function"`.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check,
 * @returns {boolean} If the value is object-like.
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
const isObjectLike = (val) => !isNil(val) && isTypeOf(val, "object");
export { isObjectLike };
//# sourceMappingURL=objectLike.js.map