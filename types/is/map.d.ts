/**
 * Checks if a value is a map.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a map.
 * @example
 * isMap(new Map())
 * // => true
 *
 * isMap([[1, 2]])
 * // => false
 */
declare const isMap: (val: any) => val is Map<any, any>;
export { isMap };
