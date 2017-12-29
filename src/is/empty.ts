import hasKey from "../has/key";
import objKeys from "../obj/keys";
import isArrayLike from "./arrayLike";
import isObjectLike from "./objectLike";

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
 * // returns true
 * isEmpty([])
 * isEmpty({})
 * isEmpty("")
 * isEmpty(true)
 * isEmpty(1)
 * isEmpty(null)
 *
 * @example
 * // returns false
 * isEmpty("foo")
 * isEmpty([1, 2])
 * isEmpty({a: 1})
 */
const isEmpty = (val: any): boolean => {
    if (isArrayLike(val)) {
        return val.length === 0;
    } else if (hasKey(val, "size")) {
        return val.size === 0;
    } else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    } else {
        return true;
    }
};

export default isEmpty;
