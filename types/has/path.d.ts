/**
 * Checks if a target has a given path.
 *
 * @function hasPath
 * @memberof Has
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * hasPath({a: 1}, ["a"]);
 * // => true
 *
 * hasPath([4, 6, 8], ["1"]);
 * // => true
 *
 * hasPath({a: {b: 2, c: [10, 20]}}, ["a", "c", "0"]);
 * // => true
 *
 * @example
 * hasPath({a: 1}, ["c"]);
 * // => false
 *
 * hasPath([4, 6, 8], ["8"]);
 * // => false
 *
 * hasPath({a: {b: 2, c: [10, 20]}}, ["f", "x", "231", "21"]);
 * // => false
 *
 * hasPath(1, ["foo"]);
 * // => false
 */
declare const hasPath: (target: any, path: string[]) => boolean;
export default hasPath;
