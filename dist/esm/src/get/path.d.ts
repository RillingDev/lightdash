/**
 * Returns a targets value in a given path.
 *
 * If the path doesn't exist in the target, null is returned.
 *
 * @memberof Get
 * @since 2.0.0
 * @param {any} target Target to check.
 * @param {string[]} path Path to use.
 * @returns {any} The value which was looked up, or null if the path could not be resolved.
 * @example
 * getPath({a: 1}, ["a"]);
 * // => 1
 *
 * getPath([4, 6, 8], ["1"]);
 * // => 6
 *
 * getPath({a: {b: 2, c: [10, 20]}}, ["a", "c", "0"]);
 * // => 10
 */
declare const getPath: (target: any, path: string[]) => any;
export { getPath };
//# sourceMappingURL=path.d.ts.map