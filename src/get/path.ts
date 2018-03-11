import isUndefined from "../is/undefined";

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
const getPath = (target: any, path: string[]): any => {
    let targetCurrent = target;
    let index = 0;

    while (!isUndefined(targetCurrent) && index < path.length) {
        const keyCurrent = path[index];

        if (!isUndefined(targetCurrent.keyCurrent)) {
            return null;
        }

        targetCurrent = targetCurrent[keyCurrent];
        index++;
    }

    return targetCurrent;
};

export default getPath;
