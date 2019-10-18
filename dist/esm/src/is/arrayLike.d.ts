/**
 * Checks if a value is array-like.
 *
 * A value is considered array-like if it is object-like and has a length property.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is an array-like.
 * @example
 * isArrayLike([])
 * // => true
 *
 * isArrayLike({length: 0})
 * // => true
 *
 * isArrayLike({})
 * // => false
 */
declare const isArrayLike: (val: any) => val is ArrayLike<any>;
export { isArrayLike };
//# sourceMappingURL=arrayLike.d.ts.map