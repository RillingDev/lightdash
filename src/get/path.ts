import hasKey from "../has/key";
import isDefined from "../is/defined";

/**
 * Accesses a target by a path of keys. If the path doesn't exist, null is returned
 *
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 * @example
 * // returns 1
 * getLength({a:1},["a"]);
 *
 * @example
 * // returns 6
 * getLength([4,6,8],["1"]);
 *
 * @example
 * // returns 10
 * getLength({a:{b:2,c:[10,20]}},["a","c","0"]);
 */
const getPath = (target: any, path: string[]): any | null => {
    let targetCurrent = target;
    let index = 0;

    while (isDefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];

        if (hasKey(targetCurrent, keyCurrent)) {
            targetCurrent = targetCurrent[keyCurrent];
            index++;
        } else {
            return null;
        }
    }

    return targetCurrent;
};

export default getPath;
