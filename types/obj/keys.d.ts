/**
 * Returns an array of the objects keys.
 *
 * `Object.keys` shorthand.
 *
 * @function objKeys
 * @memberof Object
 * @since 1.0.0
 * @param {Object} obj
 * @returns {any[]}
 * @example
 * // returns ["a", "b", "c"]
 * objKeys({a: 1, b: 2, c: 3})
 */
declare const objKeys: (o: {}) => string[];
export default objKeys;
