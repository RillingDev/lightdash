import { isArrayLike } from "../is/arrayLike";
import { isNil } from "../is/nil";
import { isObjectLike } from "../is/objectLike";
import { isString } from "../is/string";
import { isUndefined } from "../is/undefined";

/**
 * Gets size of a value.
 *
 * If the value has a length or size property, the value of that is returned.
 * If the value is object-like, the length of its entries is returned.
 * Otherwise -1 is returned.
 *
 * @memberof Get
 * @since 6.0.0
 * @param {any} val Value to check.
 * @returns {number} The size of the value.
 * @example
 * getSize([1,2])
 * // => 2
 *
 * getSize({a:1})
 * // => 1
 *
 * getSize(new Set())
 * // => 0
 *
 * getSize("foo")
 * // => 3
 *
 * getSize(1)
 * // => -1
 *
 * getSize(null)
 * // => -1
 */
const getSize = (val: any): number => {
    if (isNil(val)) {
        return -1;
    }
    if (isArrayLike(val) || isString(val)) {
        return val.length;
    }
    if (!isUndefined(val.size)) {
        return val.size;
    }
    if (isObjectLike(val)) {
        return Object.keys(val).length;
    }

    return -1;
};

export { getSize };
