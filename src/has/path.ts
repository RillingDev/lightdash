import getPath from "../get/path";
import isNil from "../is/nil";

/**
 * Checks if a target has a path of keys
 *
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 */
const hasPath = (target: any, path: string[]): boolean => isNil(getPath(target, path));

export default hasPath;
