/**
 * Checks if a value is undefined or null.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is nil.
 * @example
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 *
 * isNil(0)
 * // => false
 *
 * isNil("")
 * // => false
 */
declare const isNil: (val: any) => val is null | undefined;
export { isNil };
//# sourceMappingURL=nil.d.ts.map