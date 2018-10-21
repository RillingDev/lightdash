import { forEachEntry } from "../for/eachEntry";
import { isObjectLike } from "./objectLike";
import { isUndefined } from "./undefined";

/**
 * Recursively checks if two items and their the contents are equal.
 *
 * @function isEqual
 * @memberof Is
 * @since 1.0.0
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 * @example
 * isEqual(1, 1)
 * // => true
 *
 * isEqual({}, {})
 * // => true
 *
 * isEqual([1, 2], [1, 2])
 * // => true
 *
 * isEqual([1, 2, [3, 4]], [1, 2, [3, 4]])
 * // => true
 *
 * isEqual([1, 2, 3], [1])
 * // => false
 *
 * isEqual([], {})
 * // => false
 *
 * isEqual(1, true)
 * // => false
 */
const isEqual = (a: any, b: any): boolean => {
    if (a === b) {
        return true;
    }

    if (
        !isObjectLike(a) ||
        !isObjectLike(b) ||
        a.constructor !== b.constructor ||
        Object.keys(a).length !== Object.keys(b).length
    ) {
        return false;
    }

    let result = true;

    forEachEntry(a, (key, aVal) => {
        // Only check if the comparison didn't fail already
        if (result === true) {
            result = isUndefined(b[key]) ? false : isEqual(aVal, b[key]);
        }
    });

    return result;
};

export { isEqual };
