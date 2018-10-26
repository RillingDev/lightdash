import { isInstanceOf } from "./instanceOf";

/**
 * Checks if a value is a weak set.
 *
 * @memberof Is
 * @since 9.1.0
 * @param {any} val Value to check.
 * @returns {boolean} If the value is a weak set.
 * @example
 * isSet(new WeakSet())
 * // => true
 *
 * isSet(new Set())
 * // => false
 */
const isWeakSet = (val: any): val is WeakSet<any> => isInstanceOf(val, WeakSet);

export { isWeakSet };
