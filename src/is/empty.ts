import hasLength from "../has/length";
import objKeys from "../obj/keys";
import isObjectLike from "./objectLike";

/**
 * Checks if an array has no items, or an object has no keys
 *
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * //returns true
 * isEmpty([])
 * isEmpty({})
 * isEmpty("")
 *
 * @example
 * //returns false
 * isEmpty("foo")
 * isEmpty([1,2])
 */
const isEmpty = (val: any): boolean => {
    if (hasLength(val)) {
        return val.length === 0;
    } else if (isObjectLike(val)) {
        return objKeys(val).length === 0;
    } else {
        return false;
    }
};

export default isEmpty;
