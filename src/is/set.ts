import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is a set.
 *
 * @since 1.0.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a set.
 * @example
 * isSet(new Set())
 * // => true
 *
 * isSet([1, 2])
 * // => false
 */
const isSet = (val: any): val is Set<any> => isInstanceOf(val, Set);

export { isSet };
