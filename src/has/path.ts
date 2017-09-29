import isDefined from "../is/defined";
import hasKey from "./key";

/**
 * Checks if a target has a path of keys
 *
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
 */
const hasPath = (target: any, path: string[]): boolean => {
    let targetCurrent = target;
    let index = 0;

    while (isDefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];

        if (hasKey(targetCurrent, keyCurrent)) {
            targetCurrent = targetCurrent[keyCurrent];
            index++;
        } else {
            return false;
        }
    }

    return true;
};

export default hasPath;
