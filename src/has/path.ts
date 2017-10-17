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
 * getLength({a:1},["a"]);
 * getLength([4,6,8],["1"]);
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
 *
 * @example
 * // returns false
 * getLength({a:1},["c"]);
 * getLength([4,6,8],["8"]);
 * getLength({a:{b:2,c:[10,20]}},["f","x","231","21"]);
 * getLength(1,["foo"]);
 */
const hasPath = (target: any, path: string[]): boolean => isNil(getPath(target, path));

export default hasPath;
