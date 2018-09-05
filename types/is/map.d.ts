/**
 * Checks if a value is a map.
 *
 * @function isMap
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isMap(new Map())
 * // => true
 *
 * isMap([[1, 2]])
 * // => false
 */
declare const isMap: (val: any) => val is Map<any, any>;
export { isMap };
