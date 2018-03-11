import isInstanceOf from "./instanceOf";

/**
 * Checks if a value is a set.
 *
 * @function isSet
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * // returns true
 * isSet(new Set())
 *
 * @example
 * // returns false
 * isSet([1, 2])
 */
const isSet = (val: any): boolean => isInstanceOf(val, Set);

export default isSet;
