import getPath from "../get/path";
import isNil from "../is/nil";

/**
 * Checks if a target has a path of keys
 *
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns true
 * hasPath({a:1},["a"]);
 * hasPath([4,6,8],["1"]);
 * hasPath({a:{b:2,c:[10,20]}},["a","c","0"]);
 *
 * @example
 * // returns false
 * hasPath({a:1},["c"]);
 * hasPath([4,6,8],["8"]);
 * hasPath({a:{b:2,c:[10,20]}},["f","x","231","21"]);
 * hasPath(1,["foo"]);
 */
const hasPath = (target: any, path: string[]): boolean => isNil(getPath(target, path));

export default hasPath;
