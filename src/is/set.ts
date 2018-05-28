import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is a set.
 *
 * @function isSet
 * @memberof Is
 * @since 1.0.0
 * @param {any} val
 * @returns {boolean}
 * @example
 * isSet(new Set())
 * // => true
 *
 * @example
 * isSet([1, 2])
 * // => false
 */
const isSet = (val: any): boolean => isInstanceOf(val, Set);

export { isSet };
