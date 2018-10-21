/**
 * Checks if a value is a set.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isSet(new Set())
 * // => true
 *
 * isSet([1, 2])
 * // => false
 */
declare const isSet: (val: any) => val is Set<any>;
export { isSet };
