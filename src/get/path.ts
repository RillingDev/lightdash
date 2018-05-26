import isUndefined from "../is/undefined";

/**
 * Returns a targets value in a given path.
 *
 * If the path doesn't exist in the target, null is returned.
 *
 * @function getPath
 * @memberof Get
 * @since 2.0.0
 * @param {any} target
 * @param {string[]} path
 * @returns {null|any}
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
const getPath = (target: any, path: string[]): null | any => {
    let targetCurrent = target;
    let index = 0;

    while (!isUndefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];

        if (isUndefined(targetCurrent[keyCurrent])) {
            return null;
        }

        targetCurrent = targetCurrent[keyCurrent];
        index++;
    }

    return targetCurrent;
};

export default getPath;
