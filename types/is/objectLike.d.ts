/**
 * Checks if a value is not nil and has a type of object.
 *
 * The main difference to isObject is that functions are not considered object-like,
 * because `typeof function(){}` returns "function".
 *
 * @function isObjectLike
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isObjectLike({})
 * isObjectLike([])
 *
 * @example
 * // returns false
 * isObjectLike(1)
 * isObjectLike(() => 1))
 */
declare const isObjectLike: (val: any) => boolean;
export default isObjectLike;
