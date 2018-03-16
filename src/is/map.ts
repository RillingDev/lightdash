import isInstanceOf from "./instanceOf";

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
 * @example
 * isMap([[1, 2]])
 * // => false
 */
const isMap = (val: any): boolean => isInstanceOf(val, Map);

export default isMap;
