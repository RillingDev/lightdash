import hasKey from "../has/key";
import isDefined from "../is/defined";

/**
 * Accesses a target by a path of keys. If the path doesn't exist, null is returned
 *
 * @param {any} target
 * @param {string[]} path
 * @returns {boolean}
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
