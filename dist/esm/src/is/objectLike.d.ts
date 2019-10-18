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
declare const isObjectLike: (val: any) => boolean;
export { isObjectLike };
//# sourceMappingURL=objectLike.d.ts.map