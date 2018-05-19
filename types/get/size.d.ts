/**
 * Gets size of a value.
 *
 * If the value has a length or size property, return that.
 * If the value is object-like, return the length of keys.
 * Else return -1.
 *
 * @function getSize
 * @memberof Get
 * @since 6.0.0
 * @param {any} val
 * @returns {number}
 * @example
 * getSize([1,2])
 * // => 2
 *
 * getSize({a:1})
 * // => 1
 *
 * getSize(new Set())
 * // => 0
 *
 * isEmpty("foo")
 * // => 3
 *
 * isEmpty(1)
 * // => -1
 *
 * isEmpty(null)
 * // => -1
 */
declare const getSize: (val: any) => number;
export default getSize;
