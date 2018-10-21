/**
 * Gets size of a value.
 *
 * If the value has a length or size property, the value of that is returned.
 * If the value is object-like, the length of its entries is returned.
 * Otherwise -1 is returned.
 *
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
 * getSize("foo")
 * // => 3
 *
 * getSize(1)
 * // => -1
 *
 * getSize(null)
 * // => -1
 */
declare const getSize: (val: any) => number;
export { getSize };
