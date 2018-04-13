import isArrayLike from "./arrayLike";
import isObjectLike from "./objectLike";
import isUndefined from "./undefined";

/**
 * Checks if a value is empty.
 *
 * A value is consider empty if it is either a primitive or an object-like without content.
 * Array-likes are considered empty if they have a length of zero,
 * Sets/Maps if they have a size of zero,
 * and Objects if their keys have a length of zero.
 *
 * @function isEmpty
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isEmpty([])
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty("")
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty(null)
 * // => true
 *
 * @example
 * isEmpty("foo")
 * // => false
 *
 * isEmpty([1, 2])
 * // => false
 *
 * isEmpty({a: 1})
 * // => false
 */
const isEmpty = (val: any): boolean => {
    if (isArrayLike(val)) {
        return val.length === 0;
    } else if (!isUndefined(val.size)) {
        return val.size === 0;
    } else if (isObjectLike(val)) {
        return Object.keys(val).length === 0;
    }

    return true;
};

export default isEmpty;
