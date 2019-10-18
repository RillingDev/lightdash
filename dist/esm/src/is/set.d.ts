/**
 * Checks if a value is a set.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a set.
 * @example
 * isSet(new Set())
 * // => true
 *
 * isSet([1, 2])
 * // => false
 */
declare const isSet: (val: any) => val is Set<any>;
export { isSet };
//# sourceMappingURL=set.d.ts.map