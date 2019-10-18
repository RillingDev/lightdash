import { forEachEntry } from "../for/eachEntry";
import { isObjectLike } from "./objectLike";
import { isUndefined } from "./undefined";
/**
 * Recursively checks if two values and their the contents are equal.
 *
 * @memberof Is
 * @since 1.0.0
 * @param {any} a First value to check.
 * @param {any} b Second value to check.
 * @returns {boolean} If the values are equal.
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
const isEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (!isObjectLike(a) ||
        !isObjectLike(b) ||
        a.constructor !== b.constructor ||
        Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    let equal = true;
    forEachEntry(a, (aVal, key) => {
        // Only check if the comparison didn't fail already
        if (equal) {
            equal = isUndefined(b[key]) ? false : isEqual(aVal, b[key]);
        }
    });
    return equal;
};
export { isEqual };
//# sourceMappingURL=equal.js.map