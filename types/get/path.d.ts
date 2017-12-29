/**
 * Accesses a target by a path-array of key-strings.
 *
 * If the path doesn't exist, null is returned.
 *
 * @function getPath
 * @memberof Get
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * getPath({a: 1}, ["a"]);                              //=> 1
 * getPath([4, 6, 8], ["1"]);                           //=> 6
 * getPath({a: {b: 2, c: [10, 20]}}, ["a", "c", "0"]);  //=> 10
 */
declare const getPath: (target: any, path: string[]) => any;
export default getPath;
