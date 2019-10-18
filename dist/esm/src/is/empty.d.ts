/**
 * Checks if a value is empty.
 *
 * A value is consider empty if it is either a primitive or an object-like without content.
 * Array-likes and strings are considered empty if they have a length of zero,
 * sets/maps if they have a size of zero, and objects if their keys have a length of zero.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is empty.
 * @example
 * isEmpty([])
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty("")
 * // => true
 *
 * isEmpty(123)
 * // => true
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty("foo")
 * // => false
 *
 * isEmpty([1, 2])
 * // => false
 *
 * isEmpty({a: 1})
 * // => false
 *
 * isEmpty(new Map([["foo", 1]]))
 * // => false
 */
declare const isEmpty: (val: any) => boolean;
export { isEmpty };
//# sourceMappingURL=empty.d.ts.map